<script lang="ts">
	import { page } from '$app/stores';
	import ShareButton from '$components/generationFullScreen/ShareButton.svelte';
	import type {
		TButtonObjectsWithState,
		TGenerationFullScreenModalType,
		TSetButtonObjectWithState
	} from '$components/generationFullScreen/types';
	import IconAnimatedSpinner from '$components/icons/IconAnimatedSpinner.svelte';
	import IconCopy from '$components/icons/IconCopy.svelte';
	import IconDownload from '$components/icons/IconDownload.svelte';
	import IconImageSearch from '$components/icons/IconImageSearch.svelte';
	import IconTick from '$components/icons/IconTick.svelte';
	import IconTrashcan from '$components/icons/IconTrashcan.svelte';
	import IconTrashcanFilledOpen from '$components/icons/IconTrashcanFilledOpen.svelte';
	import IconWand from '$components/icons/IconWand.svelte';
	import LikeButton from '$components/primitives/buttons/LikeButton.svelte';
	import SubtleButton from '$components/primitives/buttons/SubtleButton.svelte';
	import Morpher from '$components/utils/Morpher.svelte';
	import LL, { locale } from '$i18n/i18n-svelte';
	import { clickoutside } from '$ts/actions/clickoutside';
	import { getApiUrl } from '$ts/constants/main';
	import { sessionStore } from '$ts/constants/supabase';
	import { downloadGenerationImage } from '$ts/helpers/downloadGenerationImage';
	import {
		logGalleryExploreSimilarClicked,
		logGalleryGenerateSimilarClicked,
		logGenerationOutputDeleted,
		logUserProfileExploreSimilarClicked
	} from '$ts/helpers/loggers';
	import { replaceOutputInUserQueryData } from '$ts/helpers/replaceOutputInUserQueryData';
	import { appVersion } from '$ts/stores/appVersion';
	import {
		activeGeneration,
		setGenerationOutputToDeleted,
		type TGenerationWithSelectedOutput
	} from '$ts/stores/user/generation';
	import {
		generatePageHistoryFullOutputsQueryKey,
		historyFullOutputsQueryKey
	} from '$ts/stores/user/queryKeys';
	import { userSummary } from '$ts/stores/user/summary';
	import { useQueryClient } from '@tanstack/svelte-query';
	import { copy } from 'svelte-copy';

	export let generation: TGenerationWithSelectedOutput;
	export let generateSimilarUrl: string;
	export let exploreSimilarUrl: string;
	export let linkUrl: string;
	export let setButtonObjectWithState: TSetButtonObjectWithState;
	export let buttonObjectsWithState: TButtonObjectsWithState;
	export let currentImageUrl: string;
	export let modalType: TGenerationFullScreenModalType;
	export let setSearchQuery: ((query: string) => void) | undefined = undefined;
	export let shareButtonPortalBarrier: HTMLDivElement | undefined = undefined;
	export let shareButtonPortalContent: HTMLDivElement | undefined = undefined;
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
	export { classes as class };
	let classes = '';

	const queryClient = useQueryClient();
	const onDownloadImageClicked = async () => {
		try {
			setButtonObjectWithState('download', 'loading');
			await downloadGenerationImage({
				url: currentImageUrl,
				guidanceScale: generation.guidance_scale,
				inferenceSteps: generation.inference_steps,
				isUpscaled: generation.selected_output.upscaled_image_url !== undefined,
				prompt: generation.prompt.text,
				seed: generation.seed,
				outputIndex: generation.outputs.findIndex(
					(output) => output.id === generation.selected_output.id
				),
				modelId: generation.model_id,
				imageStrength: generation.prompt_strength
					? Math.round((1 - generation.prompt_strength) * 10) / 10
					: undefined,
				logProps: {
					'SC - Locale': $locale,
					'SC - Output Id': generation.selected_output.id,
					'SC - Page': `${$page.url.pathname}${$page.url.search}`,
					'SC - Generation Id': generation.id,
					'SC - User Id': $sessionStore?.user.id,
					'SC - Stripe Product Id': $userSummary?.product_id,
					'SC - App Version': $appVersion
				}
			});
			setButtonObjectWithState('download', 'success');
		} catch (error) {
			console.log("Couldn't download image", error);
			setButtonObjectWithState('download', 'idle');
		}
	};

	let deleteStatus: 'idle' | 'should-confirm' | 'loading' | 'success' = 'idle';

	$: logProps = {
		'SC - Generation Id': generation.id,
		'SC - Output Id': generation.selected_output.id,
		'SC - Locale': $locale,
		'SC - Page': `${$page.url.pathname}${$page.url.search}`,
		'SC - User Id': $sessionStore?.user.id,
		'SC - Stripe Product Id': $userSummary?.product_id,
		'SC - App Version': $appVersion
	};

	async function deleteGeneration() {
		if (deleteStatus === 'idle') {
			deleteStatus = 'should-confirm';
			return;
		}
		deleteStatus = 'loading';
		try {
			const res = await fetch(`${getApiUrl().origin}/v1/user/generation`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$sessionStore?.access_token}`
				},
				body: JSON.stringify({ generation_output_ids: [generation.selected_output.id] })
			});
			if (!res.ok) throw new Error('Response not ok');
			logGenerationOutputDeleted(logProps);
			if (modalType === 'history') {
				replaceOutputInUserQueryData(queryClient, $historyFullOutputsQueryKey, {
					id: generation.selected_output.id,
					is_deleted: true
				});
			} else if (modalType === 'generate' || modalType === 'stage') {
				setGenerationOutputToDeleted(generation.selected_output.id);
				replaceOutputInUserQueryData(queryClient, $generatePageHistoryFullOutputsQueryKey, {
					id: generation.selected_output.id,
					is_deleted: true
				});
			}
			deleteStatus = 'success';
			activeGeneration.set(undefined);
		} catch (error) {
			console.log('Error deleting generation output', error);
			resetDeleteStatus();
		}
	}
	const resetDeleteStatus = () => (deleteStatus = 'idle');
</script>

<div class="flex w-full flex-wrap gap-3 pb-1 {classes}">
	<LikeButton {generation} {modalType} {onLikesChanged} />
	<SubtleButton
		prefetch={true}
		href={generateSimilarUrl}
		onClick={() => {
			if (modalType === 'gallery') {
				logGalleryGenerateSimilarClicked({
					'SC - Output Id': generation.selected_output.id,
					'SC - User Id': $sessionStore?.user.id,
					'SC - Stripe Product Id': $userSummary?.product_id,
					'SC - App Version': $appVersion
				});
			}
			activeGeneration.set(undefined);
		}}
	>
		<div class="flex items-center justify-center gap-1.5">
			<IconWand class="-ml-0.5 h-5 w-5" />
			<p>{$LL.GenerationFullscreen.GenerateSimilarButton()}</p>
		</div>
	</SubtleButton>
	{#if modalType === 'gallery' || modalType === 'user-profile'}
		<SubtleButton
			prefetch={true}
			href={exploreSimilarUrl}
			onClick={() => {
				if (modalType === 'gallery' || modalType === 'user-profile') {
					if (setSearchQuery) {
						setSearchQuery(generation.selected_output.id);
					}
					const logParams = {
						'SC - Output Id': generation.selected_output.id,
						'SC - User Id': $sessionStore?.user.id,
						'SC - Stripe Product Id': $userSummary?.product_id,
						'SC - App Version': $appVersion,
						'SC - Clicked Output Id': generation.selected_output.id,
						'SC - Similar to Output Id': generation.selected_output.id
					};
					if (modalType === 'user-profile') {
						logUserProfileExploreSimilarClicked(logParams);
					} else {
						logGalleryExploreSimilarClicked(logParams);
					}
					if ($activeGeneration) {
						activeGeneration.set(undefined);
					}
				}
			}}
		>
			<div class="flex items-center justify-center gap-1.5">
				<IconImageSearch class="-ml-0.5 h-5 w-5" />
				<p>{$LL.GenerationFullscreen.ExploreSimilarButton()}</p>
			</div>
		</SubtleButton>
	{/if}
	<div
		use:copy={generation.prompt.text}
		on:svelte-copy={() => setButtonObjectWithState('prompt', 'success')}
		on:svelte-copy:error={(e) => console.log(e)}
	>
		<SubtleButton state={buttonObjectsWithState.prompt.state === 'success' ? 'success' : 'idle'}>
			<Morpher morphed={buttonObjectsWithState.prompt.state === 'success'}>
				<div slot="0" class="flex items-center justify-center gap-1.5">
					<IconCopy class="-ml-0.5 h-5 w-5" />
					<p>{$LL.GenerationFullscreen.CopyPromptButton()}</p>
				</div>
				<div slot="1" class="flex items-center justify-center gap-1.5">
					<IconTick class="-ml-0.5 h-5 w-5 scale-110" />
					<p>{$LL.GenerationFullscreen.CopiedButtonState()}</p>
				</div>
			</Morpher>
		</SubtleButton>
	</div>
	{#if modalType === 'gallery' || modalType === 'user-profile' || modalType === 'history' || modalType === 'stage' || modalType === 'generate'}
		<ShareButton
			{modalType}
			{generation}
			url={linkUrl}
			bind:portalBarrier={shareButtonPortalBarrier}
			bind:portalContent={shareButtonPortalContent}
		/>
	{/if}
	{#if (modalType === 'generate' || modalType === 'history' || (modalType === 'user-profile' && generation.user.username === $userSummary?.username)) && !generation.selected_output.image_url.includes('placeholder')}
		<SubtleButton
			onClick={onDownloadImageClicked}
			disabled={buttonObjectsWithState.download.state === 'loading'}
			state={buttonObjectsWithState.download.state === 'success' ? 'success' : 'idle'}
		>
			<Morpher morphed={buttonObjectsWithState.download.state === 'success'}>
				<div slot="0" class="flex items-center justify-center gap-1.5">
					<Morpher morphed={buttonObjectsWithState.download.state === 'loading'}>
						<div slot="0" class="flex items-center justify-center gap-1.5">
							<IconDownload class="-ml-0.5 h-5 w-5" />
							<p>{$LL.GenerationFullscreen.DownloadButton()}</p>
						</div>
						<div slot="1" class="flex items-center justify-center gap-1.5">
							<IconAnimatedSpinner
								class="h-5 w-5"
								loading={buttonObjectsWithState.download.state === 'loading'}
							/>
						</div>
					</Morpher>
				</div>
				<div slot="1" class="flex items-center justify-center gap-1.5">
					<IconTick class="-ml-0.5 h-5 w-5 scale-110 transform text-c-on-primary" />
					<p>{$LL.GenerationFullscreen.DoneButtonState()}</p>
				</div>
			</Morpher>
		</SubtleButton>
	{/if}
	{#if modalType === 'generate' || modalType === 'history'}
		<div use:clickoutside={{ callback: resetDeleteStatus }}>
			<SubtleButton
				disabled={deleteStatus === 'loading'}
				onClick={deleteGeneration}
				state={deleteStatus === 'should-confirm' || deleteStatus === 'loading' ? 'danger' : 'idle'}
			>
				<Morpher morphed={deleteStatus === 'should-confirm'}>
					<div slot="0" class="flex items-center justify-center gap-1.5 text-c-danger">
						<Morpher morphed={deleteStatus === 'loading'}>
							<div slot="0" class="flex items-center justify-center gap-1.5 text-c-danger">
								<IconTrashcan class="-ml-0.5 h-5 w-5" />
								<p>{$LL.Shared.DeleteButton()}</p>
							</div>
							<div slot="1" class="flex items-center justify-center gap-1.5 text-c-on-primary">
								<IconAnimatedSpinner loading={deleteStatus === 'loading'} class="h-5 w-5" />
							</div>
						</Morpher>
					</div>
					<div slot="1" class="flex items-center justify-center gap-1.5">
						<IconTrashcanFilledOpen class="-ml-0.5 h-5 w-5 scale-110 text-c-on-primary" />
					</div>
				</Morpher>
			</SubtleButton>
		</div>
	{/if}
</div>
