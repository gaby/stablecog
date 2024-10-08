<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import InsufficientCreditsBadge from '$components/badges/InsufficientCreditsBadge.svelte';
	import { baseOutputForInpainting } from '$components/canvas/stores/baseOutputForInpainting';
	import UpscaleAnimation from '$components/generate/UpscaleAnimation.svelte';
	import ButtonsSection from '$components/generationFullScreen/ButtonsSection.svelte';
	import {
		lgBreakpoint,
		mdBreakpoint,
		sidebarWidth
	} from '$components/generationFullScreen/constants';
	import Container from '$components/generationFullScreen/Container.svelte';
	import Divider from '$components/generationFullScreen/Divider.svelte';
	import GenerationFullScreenImageSet from '$components/generationFullScreen/GenerationFullScreenImageSet.svelte';
	import NegativePromptSection from '$components/generationFullScreen/NegativePromptSection.svelte';
	import ParamsSection from '$components/generationFullScreen/ParamsSection.svelte';
	import ShowOnProfileSection from '$components/generationFullScreen/ShowOnProfileSection.svelte';
	import SideButton from '$components/generationFullScreen/SideButton.svelte';
	import SimilarOutputsSection from '$components/generationFullScreen/SimilarOutputsSection.svelte';
	import type {
		TButtonObjectsWithState,
		TGenerationFullScreenModalType,
		TSetButtonObjectWithState
	} from '$components/generationFullScreen/types';
	import SrcsetProvider from '$components/generationImage/SrcsetProvider.svelte';
	import IconGalleryFilled from '$components/icons/IconGalleryFilled.svelte';
	import IconNoImage from '$components/icons/IconNoImage.svelte';
	import IconUpscale from '$components/icons/IconUpscale.svelte';
	import ModalWrapper from '$components/modals/ModalWrapper.svelte';
	import Button from '$components/primitives/buttons/Button.svelte';
	import ButtonHoverEffect from '$components/primitives/buttons/ButtonHoverEffect.svelte';
	import FavoriteButton from '$components/primitives/buttons/FavoriteButton.svelte';
	import UsernameButton from '$components/primitives/buttons/UsernameButton.svelte';
	import TabBar from '$components/primitives/tabBars/TabBar.svelte';
	import QueuePosition from '$components/QueuePosition.svelte';
	import ScrollAreaWithChevron from '$components/utils/ScrollAreaWithChevron.svelte';
	import LL, { locale } from '$i18n/i18n-svelte';
	import type { TRequestNavigationEventParams } from '$routes/(app)/admin/gallery/types';
	import { sessionStore } from '$ts/constants/supabase';
	import { upscaleModelIdDefault } from '$ts/constants/upscaleModels';
	import { isAdmin, isSuperAdmin } from '$ts/helpers/admin/roles';
	import { generateSSEId } from '$ts/helpers/generateSSEId';
	import { getGenerateSimilarUrlFromParams } from '$ts/helpers/getGenerationUrlFromParams';
	import { getRelativeDate } from '$ts/helpers/getRelativeDate';
	import { imageQualityLowDefault } from '$ts/helpers/imgproxy';
	import { adminGallerySelectedOutputIds } from '$ts/stores/admin/gallery';
	import { generateMode } from '$ts/stores/generate/generateMode';
	import { lastClickedOutputId } from '$ts/stores/lastClickedOutputId';
	import { userGalleryCurrentView } from '$ts/stores/user/gallery';
	import { toggleGalleryActionableItemsState } from '$ts/stores/user/galleryActionableItems';
	import { getQueuePositionFromId, queue } from '$ts/stores/user/queue';
	import { removeFromRecentlyUpdatedOutputIds } from '$ts/stores/user/recentlyUpdatedOutputIds';
	import { userSummary } from '$ts/stores/user/summary';
	import {
		maxOngoingUpscalesCountReached,
		queueInitialUpscaleRequest,
		upscales,
		type TInitialUpscaleRequest
	} from '$ts/stores/user/upscale';
	import { windowWidth } from '$ts/stores/window';
	import { activeGeneration, type TGenerationWithSelectedOutput } from '$userStores/generation';
	import { sseId } from '$userStores/sse';
	import { createEventDispatcher, onMount } from 'svelte';
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let generation: TGenerationWithSelectedOutput;
	export let prevGeneration: TGenerationWithSelectedOutput | undefined = undefined;
	export let nextGeneration: TGenerationWithSelectedOutput | undefined = undefined;
	export let modalType: TGenerationFullScreenModalType;
	export let onLeftButtonClicked: (() => void) | undefined = undefined;
	export let onRightButtonClicked: (() => void) | undefined = undefined;
	export let setSearchQuery: ((query: string) => void) | undefined = undefined;
	export let outputsLength: number | undefined = undefined;
	export let outputIndex: number | undefined = undefined;
	export let onLikesChanged:
		| (({
				newLikeCount,
				newIsLikedByUser,
				action
		  }: {
				newLikeCount: number;
				newIsLikedByUser: boolean;
				action: 'like' | 'unlike';
		  }) => void)
		| undefined = undefined;

	let buttonLeft: HTMLButtonElement;
	let buttonRight: HTMLButtonElement;
	let buttonLeftMobile: HTMLButtonElement;
	let buttonRightMobile: HTMLButtonElement;

	const dispatch = createEventDispatcher<{ requestNavigation: TRequestNavigationEventParams }>();

	$: upscaleFromStore = $upscales.find(
		(upscale) => upscale.type === 'from_output' && upscale.input === generation.selected_output.id
	);

	$: upscaledImageUrlFromStore =
		upscaleFromStore &&
		upscaleFromStore.outputs &&
		upscaleFromStore.outputs.length > 0 &&
		upscaleFromStore.outputs[0].image_url
			? upscaleFromStore.outputs[0].image_url
			: undefined;

	$: [upscaleFromStore], onUpscaleFromStoreChanged();

	function setUpscaleFromStore() {
		upscaleFromStore = $upscales.find(
			(upscale) => upscale.type === 'from_output' && upscale.input === generation.selected_output.id
		);
	}
	function onUpscaleFromStoreChanged() {
		if (upscaledImageUrlFromStore !== undefined && !generation.selected_output.upscaled_image_url) {
			generation.selected_output.upscaled_image_url = upscaledImageUrlFromStore;
		}
	}

	$: currentImageUrl = generation.selected_output.upscaled_image_url
		? generation.selected_output.upscaled_image_url
		: generation.selected_output.image_url;

	$: upscaledImageWidth = generation.selected_output.upscaled_image_url
		? generation.width * 4
		: undefined;
	$: upscaledImageHeight = generation.selected_output.upscaled_image_url
		? generation.height * 4
		: undefined;

	$: generation.selected_output, onGenerationChanged();
	$: selectedOutputId = generation.selected_output.id;
	let initialGenerationChange = true;
	$: upscaleBeingProcessed = upscaleFromStore
		? upscaleFromStore.status !== 'succeeded' &&
			upscaleFromStore.status !== 'failed' &&
			!generation.selected_output.upscaled_image_url
		: false;

	let sidebarScrollContainer: HTMLDivElement | undefined;

	let generateSimilarUrl: string;
	let linkUrl: string;

	let modalScrollContainer: HTMLDivElement | undefined;

	$: exploreSimilarUrl = `${
		modalType === 'user-profile' ? `/user/${generation.user.username}` : '/gallery'
	}?q=${generation.selected_output.id}`;

	let upscaledTabValue: TUpscaleTabValue = 'upscaled';
	type TUpscaleTabValue = 'original' | 'upscaled';
	let upscaledOrDefaultTabs: { label: string; value: TUpscaleTabValue }[];

	$: upscaledOrDefaultTabs = [
		{
			label: $LL.GenerationFullscreen.UpscaleTabBar.UpscaledTitle(),
			value: 'upscaled'
		},
		{
			label: $LL.GenerationFullscreen.UpscaleTabBar.OriginalTitle(),
			value: 'original'
		}
	];

	const upscaleCreditCost = 1;
	$: doesntHaveEnoughCredits =
		$userSummary && $sessionStore?.user.id
			? $userSummary.total_remaining_credits < upscaleCreditCost
			: false;

	const onGenerationChanged = () => {
		removeFromRecentlyUpdatedOutputIds(generation.selected_output.id);
		setUpscaleFromStore();
		currentImageUrl =
			generation.selected_output.upscaled_image_url ?? generation.selected_output.image_url;
		if (generation.selected_output.upscaled_image_url) upscaledTabValue = 'upscaled';
		buttonObjectsWithState = { ...initialButtonObjectsWithState };
		const { seed, selected_output, ...rest } = generation;
		generateSimilarUrl = getGenerateSimilarUrlFromParams(rest);
		linkUrl =
			modalType === 'user-profile' ||
			(modalType === 'history' && $userGalleryCurrentView !== 'likes') ||
			(modalType === 'history' &&
				$userGalleryCurrentView === 'likes' &&
				generation.selected_output.gallery_status !== 'approved') ||
			modalType === 'generate' ||
			modalType === 'stage'
				? `${$page.url.origin}/${generation.user.username}/o/${generation.selected_output.id}`
				: `${$page.url.origin}/gallery/o/${generation.selected_output.id}`;
		if (browser && window && !initialGenerationChange) {
			if (modalType === 'gallery') {
				window.history.replaceState({}, '', `/gallery/o/${generation.selected_output.id}`);
			} else if (modalType === 'user-profile') {
				window.history.replaceState(
					{},
					'',
					`/${generation.user.username}/o/${generation.selected_output.id}`
				);
			} else {
				const searchParams = new URLSearchParams(window.location.search);
				searchParams.set('o', generation.selected_output.id);
				const params = searchParams.toString();
				window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
			}
		}
		resetAllButtonObjectWithState();
		initialGenerationChange = false;
	};

	const initialButtonObjectsWithState: TButtonObjectsWithState = {
		prompt: {
			state: 'idle'
		},
		seed: {
			state: 'idle'
		},
		link: {
			state: 'idle'
		},
		download: {
			state: 'idle'
		}
	};

	let buttonObjectsWithState = { ...initialButtonObjectsWithState };

	const setButtonObjectWithState: TSetButtonObjectWithState = (key, state) => {
		buttonObjectsWithState[key].state = state;
		if (state === 'success') {
			if (buttonObjectsWithState[key].timeout) {
				clearTimeout(buttonObjectsWithState[key].timeout);
			}
			buttonObjectsWithState[key].timeout = setTimeout(() => {
				buttonObjectsWithState[key].state = 'idle';
			}, 2000);
			for (const buttonKey in buttonObjectsWithState) {
				if (buttonKey !== key) {
					buttonObjectsWithState[buttonKey].state = 'idle';
					if (buttonObjectsWithState[buttonKey].timeout) {
						clearTimeout(buttonObjectsWithState[buttonKey].timeout);
					}
				}
			}
		}
		buttonObjectsWithState = { ...buttonObjectsWithState };
	};

	const resetAllButtonObjectWithState = () => {
		for (const key in buttonObjectsWithState) {
			if (buttonObjectsWithState[key].timeout) {
				clearTimeout(buttonObjectsWithState[key].timeout);
			}
			buttonObjectsWithState[key].state = 'idle';
		}
	};

	async function onUpscaleClicked() {
		if (!$sseId) {
			console.log('No SSE ID, cannot upscale');
			return;
		}
		const initialRequestProps: TInitialUpscaleRequest = {
			input: generation.selected_output.id,
			model_id: upscaleModelIdDefault,
			type: 'from_output',
			stream_id: $sseId,
			ui_id: generateSSEId()
		};
		queueInitialUpscaleRequest(initialRequestProps);
	}

	$: upscaledTabValue, setCurrentImageUrl();

	$: backgroundImageUrl =
		modalType !== 'stage' && generation.selected_output.upscaled_image_url
			? generation.selected_output.upscaled_image_url
			: generation.selected_output.image_url;

	function setCurrentImageUrl() {
		if (
			upscaledTabValue === 'upscaled' &&
			generation.selected_output.upscaled_image_url !== undefined
		) {
			currentImageUrl = generation.selected_output.upscaled_image_url;
		} else {
			currentImageUrl = generation.selected_output.image_url;
		}
	}

	const onPopState: any = (e: any) => {
		const searchParams = new URLSearchParams(e.currentTarget.location.search);
		const hasOutputParam = searchParams.has('o');
		if (!hasOutputParam) {
			activeGeneration.set(undefined);
		}
	};

	$: positionInQueue = getQueuePositionFromId(upscaleFromStore?.queued_id, $queue);
	$: positionInQueue, onPositionInQueueChanged();

	let debouncedPositionInQueue: number | undefined;
	let positionInQueueTimeout: NodeJS.Timeout;

	function onPositionInQueueChanged() {
		let hasPrevValue = debouncedPositionInQueue !== undefined;
		clearTimeout(positionInQueueTimeout);
		// First entry
		if (positionInQueue !== undefined && !hasPrevValue) {
			positionInQueueTimeout = setTimeout(() => {
				debouncedPositionInQueue = positionInQueue;
			}, 750);
			return;
		}
		// Updates after the first entry except exit
		if (positionInQueue !== undefined && hasPrevValue) {
			debouncedPositionInQueue = positionInQueue;
			return;
		}
		// Exit
		positionInQueueTimeout = setTimeout(() => {
			debouncedPositionInQueue = positionInQueue;
		}, 2000);
	}

	function onSelect(action?: 'add' | 'remove') {
		let finalAction: 'add' | 'remove' = $adminGallerySelectedOutputIds.includes(
			generation.selected_output.id
		)
			? 'remove'
			: 'add';
		if (action) finalAction = action;

		toggleGalleryActionableItemsState({
			output_id: generation.selected_output.id,
			cardType: 'admin-gallery',
			generation_id: generation.id || generation.ui_id,
			type: finalAction
		});
	}

	function onKeyPress(event: KeyboardEvent) {
		if (modalType !== 'admin-gallery') return;
		if (event.key === 'Enter') {
			onSelect();
			return;
		}
		if (event.key === 'w' || event.key === 'u') {
			onSelect('remove');
			dispatch('requestNavigation', {
				direction: 'left'
			});
			return;
		}
		if (event.key === 's' || event.key === 'j') {
			onSelect('add');
			dispatch('requestNavigation', {
				direction: 'left'
			});
			return;
		}
	}

	$: isAdminView = modalType === 'admin-gallery' && isAdmin($userSummary?.roles);

	async function onEditClicked() {
		baseOutputForInpainting.set({ generation: generation, ...generation.selected_output });
		generateMode.set('inpainting');
		activeGeneration.set(undefined);
		if (modalType !== 'generate' && modalType !== 'stage') {
			await goto('/generate');
		}
	}

	let shareButtonPortalBarrier: HTMLDivElement;
	let shareButtonPortalContent: HTMLDivElement;

	$: now = generation ? Date.now() : Date.now();

	onMount(() => {
		lastClickedOutputId.set(undefined);
	});
</script>

<svelte:window on:popstate={onPopState} on:keypress={onKeyPress} />

<ModalWrapper
	bind:scrollContainer={modalScrollContainer}
	hasPadding={false}
	onClose={$windowWidth < mdBreakpoint
		? () => {
				if ($activeGeneration !== undefined) {
					activeGeneration.set(undefined);
				}
			}
		: undefined}
>
	<Container
		clickoutsideExceptions={[
			buttonLeft,
			buttonRight,
			shareButtonPortalBarrier,
			shareButtonPortalContent
		]}
		{generation}
		let:imageContainerWidth
		let:imageContainerHeight
		let:modalMinHeight
		ringClass={modalType === 'admin-gallery' &&
		$adminGallerySelectedOutputIds.includes(generation.selected_output.id)
			? 'ring-c-primary'
			: 'ring-c-bg-tertiary'}
	>
		<div class="relative flex items-center self-stretch">
			{#if generation.selected_output.image_url}
				{#key generation.selected_output.id}
					<SrcsetProvider
						imageQualityPreset={imageQualityLowDefault}
						src={backgroundImageUrl}
						cardType={modalType}
						let:sizes
						let:srcset
					>
						<img
							class="translate-3d-0 absolute left-0 top-0 h-full w-full scale-125 transform blur-xl"
							{sizes}
							src={generation.selected_output.image_url}
							{srcset}
							alt="Blurred background for: {generation.prompt.text}"
							width={generation.width}
							height={generation.height}
						/>
					</SrcsetProvider>
				{/key}
			{/if}
			<div class="absolute left-0 top-0 h-full w-full bg-c-bg/50" />
			<div
				style={$windowWidth >= lgBreakpoint
					? `width: ${imageContainerWidth}px; height: ${imageContainerHeight}px;`
					: ''}
				class="relative w-full lg:h-full"
			>
				{#if generation.selected_output.image_url.includes('placeholder')}
					<svg
						class="h-auto w-full text-c-bg-secondary"
						width={generation.width}
						height={generation.height}
						viewBox="0 0 {generation.width} {generation.height}"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width={generation.width} height={generation.height} fill="currentColor" />
					</svg>
					<div class="absolute left-0 top-0 flex h-full w-full items-center justify-center p-5">
						<IconNoImage class="h-16 w-16 text-c-on-bg/50" />
					</div>
				{:else}
					{#key selectedOutputId}
						<GenerationFullScreenImageSet
							prompt={generation.prompt.text}
							{backgroundImageUrl}
							backgroundImageWidth={generation.width}
							backgroundImageHeight={generation.height}
							imageUrl={currentImageUrl}
							imageWidth={upscaledTabValue === 'upscaled' &&
							upscaledImageWidth &&
							generation.selected_output.upscaled_image_url
								? upscaledImageWidth
								: generation.width}
							imageHeight={upscaledTabValue === 'upscaled' &&
							upscaledImageHeight &&
							generation.selected_output.upscaled_image_url
								? upscaledImageHeight
								: generation.height}
							cardType={modalType}
						/>
					{/key}
					{#if modalType === 'admin-gallery' && generation.prompt_strength !== undefined}
						<div
							class="absolute -left-px -top-px rounded-br-lg bg-c-bg-secondary pb-2 pl-1.75 pr-2 pt-1.75"
						>
							<IconGalleryFilled class="text-c-danger" />
						</div>
					{/if}
					{#if $upscales && $upscales.length > 0 && upscaleFromStore?.status === 'failed'}
						<div
							transition:fly={{ duration: 200, easing: quadOut, y: -50 }}
							class="pointer-events-none absolute left-0 top-0 flex w-full items-center justify-center p-3"
						>
							<p
								class="rounded-xl bg-c-bg-secondary px-4 py-3 text-center text-xs font-medium shadow-lg shadow-c-shadow/[var(--o-shadow-stronger)] md:text-sm"
							>
								{upscaleFromStore?.error ?? $LL.Error.SomethingWentWrong()}
							</p>
						</div>
					{/if}
					{#if upscaleFromStore?.animation}
						<UpscaleAnimation
							animation={upscaleFromStore.animation}
							isProcessing={upscaleBeingProcessed}
						/>
						<QueuePosition
							position={debouncedPositionInQueue !== undefined ? debouncedPositionInQueue : 0}
							show={debouncedPositionInQueue !== undefined &&
								(!($userSummary?.product_id || $userSummary?.has_nonfree_credits) ||
									isSuperAdmin($userSummary?.roles))}
							hasBg
						/>
					{/if}
				{/if}
				{#if modalType === 'admin-gallery'}
					<button
						on:click={() => onSelect()}
						class="group absolute right-2 top-2 z-20 rounded-full bg-c-bg-secondary
							p-1 before:absolute
							before:-right-2 before:-top-2
							before:h-full before:min-h-[56px] before:w-full before:min-w-[56px]"
					>
						<ButtonHoverEffect noPadding fullRounding color="primary-strong" />
						<div class="h-6 w-6 rounded-full border-3 border-c-primary p-0.75 transition">
							<div
								class="h-full w-full rounded-full bg-c-primary transition {$adminGallerySelectedOutputIds.includes(
									generation.selected_output.id
								)
									? 'scale-100 opacity-100'
									: 'scale-0 opacity-0'}"
							/>
						</div>
					</button>
				{/if}
			</div>
			<div class="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
				{#if onLeftButtonClicked || onRightButtonClicked}
					<SideButton
						name="Go Left"
						hasAnimation={false}
						iconClass="w-6 h-6"
						class="pointer-events-auto absolute left-0 top-1/2 flex h-full w-1/6 -translate-y-1/2 transform md:hidden"
						wrapperClass="w-full h-full relative flex items-center rounded-xl justify-start pl-1.5"
						side="left"
						bind:element={buttonLeftMobile}
						onClick={onLeftButtonClicked}
					/>
					<SideButton
						name="Go Right"
						hasAnimation={false}
						iconClass="w-6 h-6"
						class="pointer-events-auto absolute right-0 top-1/2 flex h-full w-1/6 -translate-y-1/2 transform md:hidden"
						wrapperClass="w-full h-full relative flex items-center rounded-xl justify-end pr-1.5"
						side="right"
						bind:element={buttonRightMobile}
						onClick={onRightButtonClicked}
					/>
				{/if}
				{#if (modalType === 'history' && $userGalleryCurrentView !== 'likes') || modalType === 'generate'}
					<div class="pointer-events-auto absolute right-1.5 top-1.5 z-10">
						<FavoriteButton {generation} {modalType} />
					</div>
				{/if}
			</div>
		</div>
		<!-- Right side of the panel -->
		<div
			style={$windowWidth >= lgBreakpoint
				? `width: ${sidebarWidth}px; height: ${imageContainerHeight}px; min-height: ${modalMinHeight}px;`
				: ``}
			class="relative flex w-full flex-col
				items-start justify-start border-c-bg-tertiary bg-c-bg-secondary shadow-generation-sidebar shadow-c-shadow/[var(--o-shadow-stronger)] lg:border-l-2"
		>
			<ScrollAreaWithChevron bind:scrollContainer={sidebarScrollContainer}>
				<div class="flex w-full flex-col items-start justify-start">
					<div class="flex w-full flex-col gap-4 px-5 py-4 md:gap-5 md:px-7 md:py-5">
						{#if (modalType === 'generate' || (modalType === 'history' && $userGalleryCurrentView !== 'likes')) && !generation.selected_output.image_url.includes('placeholder')}
							<div class="flex w-full flex-col pt-1.5">
								{#if !generation.selected_output.upscaled_image_url || upscaleBeingProcessed}
									<div class="relative w-full">
										<Button
											onClick={onUpscaleClicked}
											loading={upscaleBeingProcessed}
											waiting={!upscaleBeingProcessed && $maxOngoingUpscalesCountReached}
											disabled={doesntHaveEnoughCredits}
											fadeOnDisabled={doesntHaveEnoughCredits}
											withSpinner
											class="w-full"
											size="sm"
										>
											<div class="flex items-center gap-2">
												<IconUpscale class="h-5 w-5" />
												<p>{$LL.GenerationFullscreen.UpscaleButton()}</p>
											</div>
										</Button>
										{#if doesntHaveEnoughCredits && !upscaleBeingProcessed && $userSummary && $sessionStore?.user.id}
											<InsufficientCreditsBadge
												neededCredits={upscaleCreditCost}
												remainingCredits={$userSummary.total_remaining_credits}
											/>
										{/if}
									</div>
								{:else}
									<TabBar
										bind:value={upscaledTabValue}
										fontWeight={600}
										tabs={upscaledOrDefaultTabs}
										name="Upscaled or Default Image"
									/>
								{/if}
								<!-- Edit Image Button -->
								<!-- <div
									class="w-full relative {!generation.selected_output.upscaled_image_url ||
									upscaleBeingProcessed
										? 'mt-2'
										: 'mt-2.5'}"
								>
									<Button
										onClick={onEditClicked}
										disabled={doesntHaveEnoughCredits}
										fadeOnDisabled={doesntHaveEnoughCredits}
										class="w-full"
										type="on-bg"
										size="sm"
									>
										<div class="flex items-center gap-2">
											<IconPen class="w-5 h-5" />
											<p>{$LL.GenerationFullscreen.EditButton()}</p>
										</div>
									</Button>
									{#if doesntHaveEnoughCredits && !upscaleBeingProcessed && $userSummary && $sessionStore?.user.id}
										<InsufficientCreditsBadge
											neededCredits={upscaleCreditCost}
											remainingCredits={$userSummary.total_remaining_credits}
										/>
									{/if}
								</div> -->
							</div>
						{/if}
						<div class="mt-1 flex w-full items-center justify-start">
							<UsernameButton username={generation.user.username} email={generation.user.email} />
						</div>
						<!-- Prompt and Negative Prompt -->
						<div class="flex w-full flex-col items-start gap-3 break-words">
							<p class="w-full leading-normal">{generation.prompt.text}</p>
							{#if generation.negative_prompt}
								{#key generation.id}
									<NegativePromptSection negativePrompt={generation.negative_prompt.text} />
								{/key}
							{/if}
							{#if generation.selected_output.created_at !== undefined || generation.created_at !== undefined}
								<p class="-mt-1 text-sm text-c-on-bg/75">
									{getRelativeDate({
										date: generation.selected_output.created_at || generation.created_at,
										locale: $locale,
										dateStyle: 'long',
										now,
										decimals: isAdminView ? 1 : 0
									})}
								</p>
							{/if}
						</div>
						{#key generation.selected_output.id}
							<ButtonsSection
								{generation}
								{generateSimilarUrl}
								{exploreSimilarUrl}
								{linkUrl}
								{currentImageUrl}
								{setSearchQuery}
								{modalType}
								{onLikesChanged}
								{setButtonObjectWithState}
								bind:shareButtonPortalBarrier
								bind:shareButtonPortalContent
								bind:buttonObjectsWithState
							/>
						{/key}
					</div>
					{#if modalType === 'generate' || modalType === 'history' || modalType === 'stage' || (modalType === 'user-profile' && $userSummary?.username === generation.user.username)}
						<Divider />
						{#key generation.selected_output.id}
							<ShowOnProfileSection {generation} {modalType} />
						{/key}
					{/if}
					<Divider />
					<ParamsSection
						class="flex flex-col gap-6 px-5 py-4 md:px-7 md:py-5 lg:pb-8"
						currentImageWidth={upscaledTabValue === 'upscaled' && upscaledImageWidth
							? upscaledImageWidth
							: generation.width}
						currentImageHeight={upscaledTabValue === 'upscaled' && upscaledImageHeight
							? upscaledImageHeight
							: generation.height}
						{generation}
						{setButtonObjectWithState}
						bind:buttonObjectsWithState
						{modalType}
					/>
					{#if modalType === 'gallery' || modalType === 'user-profile'}
						<SimilarOutputsSection
							{modalType}
							{generation}
							afterClick={() => {
								sidebarScrollContainer?.scrollTo({
									left: 0,
									top: 0
								});
								modalScrollContainer?.scrollTo({
									left: 0,
									top: 0
								});
							}}
						/>
					{/if}
				</div>
			</ScrollAreaWithChevron>
		</div>
	</Container>
	{#if onLeftButtonClicked || onRightButtonClicked}
		<SideButton
			name="Go Left"
			class="absolute left-0 top-1/2 hidden h-56 w-20 -translate-y-1/2 transform md:flex"
			side="left"
			bind:element={buttonLeft}
			onClick={onLeftButtonClicked}
			count={modalType === 'admin-gallery' &&
			outputIndex !== undefined &&
			outputsLength !== undefined
				? outputIndex
				: undefined}
			generation={prevGeneration}
			isGenerationSelected={prevGeneration
				? modalType === 'admin-gallery' &&
					$adminGallerySelectedOutputIds.includes(prevGeneration.selected_output.id)
				: undefined}
		/>
		<SideButton
			name="Go Right"
			class="absolute right-0 top-1/2 hidden h-56 w-20 -translate-y-1/2 transform md:flex"
			side="right"
			bind:element={buttonRight}
			onClick={onRightButtonClicked}
			count={modalType === 'admin-gallery' &&
			outputIndex !== undefined &&
			outputsLength !== undefined
				? outputsLength - (outputIndex + 1)
				: undefined}
			generation={nextGeneration}
			isGenerationSelected={nextGeneration
				? modalType === 'admin-gallery' &&
					$adminGallerySelectedOutputIds.includes(nextGeneration.selected_output.id)
				: undefined}
		/>
	{/if}
</ModalWrapper>
