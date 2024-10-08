<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import LiveBubble from '$approutes/live/LiveBubble.svelte';
	import type {
		TAnyRealtimePayloadExt,
		TGenerationRealtimePayloadExt,
		TUpscaleRealtimePayloadExt
	} from '$approutes/live/types';
	import IconPulsing from '$components/icons/IconPulsing.svelte';
	import MetaTag from '$components/utils/MetaTag.svelte';
	import LL, { locale } from '$i18n/i18n-svelte';
	import type { TRow } from '$ts/actions/tooltip';
	import { elementreceive, elementsend, expandCollapse } from '$ts/animation/transitions';
	import { getAspectRatioFromWidthAndHeight } from '$ts/constants/generationSize';
	import { staticAssetBaseUrl, getApiUrl } from '$ts/constants/main';
	import { previewImageVersion } from '$ts/constants/previewImageVersion';
	import { onDestroy, onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { quadOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let sse: EventSource | undefined = undefined;
	$: if (browser && (!sse || sse.readyState === sse.CLOSED)) {
		sse = new EventSource(`${getApiUrl().href}v1/sse?id=live`);
		sse.onopen = () => {
			console.log(`Connected to SSE with ID: live`);
		};
		sse.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.process_type === 'generate') {
				const generation = data as TGenerationRealtimePayloadExt;
				// check if generation is already in the array
				const generationAlreadyInArray = generations.find((g) => g.id === generation.id);
				if (!generationAlreadyInArray) {
					generations = [withAspectRatio(generation), ...generations];
				} else {
					// update the generation in the array
					generations = generations.map((g) => {
						if (g.id === generation.id) {
							return withAspectRatio(generation);
						} else {
							return withAspectRatio(g);
						}
					});
					if (generation.status === 'succeeded' && generation.actual_num_outputs) {
						const newCount = $generationTotalCount + generation.actual_num_outputs;
						generationTotalCount = tweened($generationTotalCount, {
							duration: calculateAnimationDuration($generationTotalCount, newCount),
							easing: quadOut
						});
						generationTotalCount.set(newCount);
					}
				}
			} else if (data.process_type === 'upscale') {
				const upscale = data as TUpscaleRealtimePayloadExt;
				// check if upscale is already in the array
				const upscaleAlreadyInArray = upscales.find((u) => u.id === upscale.id);
				if (!upscaleAlreadyInArray) {
					upscales = [withAspectRatio(upscale), ...upscales];
				} else {
					// update the upscale in the array
					upscales = upscales.map((u) => {
						if (u.id === upscale.id) {
							return withAspectRatio(upscale);
						} else {
							return withAspectRatio(u);
						}
					});
					if (upscale.status === 'succeeded' && upscale.actual_num_outputs) {
						const newCount = $upscaleTotalCount + upscale.actual_num_outputs;
						upscaleTotalCount = tweened($upscaleTotalCount, {
							duration: calculateAnimationDuration($upscaleTotalCount, newCount),
							easing: quadOut
						});
						upscaleTotalCount.set(newCount);
					}
				}
			}
			console.log('Message from SSE', data);
		};
		sse.onerror = (event) => {
			console.log('Error from SSE', event);
		};
	}

	let generations: TGenerationRealtimePayloadExt[] = [];
	let upscales: TUpscaleRealtimePayloadExt[] = [];
	let allProcesses: TAnyRealtimePayloadExt[] = [];

	$: [generations, upscales], setAllProcesses();

	const maxLengthAllProcesses = 50;
	const msForEachDifference = 50;
	const maxDuration = 500;
	let generationTotalCount = tweened(0, {
		duration: 500,
		easing: quadOut
	});
	let upscaleTotalCount = tweened(0, {
		duration: 500,
		easing: quadOut
	});

	const calculateAnimationDuration = (curr: number, next: number) => {
		return Math.min((next - curr) * msForEachDifference, maxDuration);
	};

	function setAllProcesses() {
		const all = [...generations, ...upscales];
		const allSorted = all
			.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
			.slice(0, maxLengthAllProcesses);
		allProcesses = [...allSorted];
	}

	function withAspectRatio(payload: TGenerationRealtimePayloadExt | TUpscaleRealtimePayloadExt) {
		const aspect_ratio = getAspectRatioFromWidthAndHeight(payload.width, payload.height);
		return {
			...payload,
			aspect_ratio: aspect_ratio ?? undefined
		} as TGenerationRealtimePayloadExt | TUpscaleRealtimePayloadExt;
	}

	let getAndSetTotalsInterval: NodeJS.Timeout;
	const getAndSetTotalsIntervalTime = 10 * 1000;

	onMount(() => {
		getAndSetTotals();
		getAndSetTotalsInterval = setInterval(getAndSetTotals, getAndSetTotalsIntervalTime);
	});

	onDestroy(() => {
		clearInterval(getAndSetTotalsInterval);
		sse?.close();
	});

	async function getAndSetTotals() {
		const res = await fetch(`${getApiUrl().origin}/v1/stats`);
		if (!res.ok) {
			console.error('Failed to fetch stats');
			return;
		}
		const resJson: IStatsRes = await res.json();
		const { generation_output_count: gCount, upscale_output_count: uCount } = resJson;
		if (gCount > $generationTotalCount) {
			generationTotalCount = tweened($generationTotalCount, {
				duration: calculateAnimationDuration($generationTotalCount, gCount),
				easing: quadOut
			});
			generationTotalCount.set(gCount);
		}
		if (uCount > $upscaleTotalCount) {
			upscaleTotalCount = tweened($upscaleTotalCount, {
				duration: calculateAnimationDuration($upscaleTotalCount, uCount),
				easing: quadOut
			});
			upscaleTotalCount.set(uCount);
		}
	}

	interface IStatsRes {
		generation_output_count: number;
		upscale_output_count: number;
		voiceover_output_count: number;
	}
</script>

<MetaTag
	title="Live | Stablecog"
	description="Watch generations happening live on Stablecog. Free, multilingual and open-source AI image generator using Stable Diffusion, FLUX, and Kandinsky."
	image_url="{staticAssetBaseUrl}/previews{$page.url.pathname}-{previewImageVersion}.png"
/>

<div class="flex w-full flex-1 justify-center pb-[calc(2vh)]">
	<div class="flex w-full max-w-5xl flex-col items-center justify-center">
		<div
			class="flex w-full flex-wrap items-center justify-center gap-8 px-8 py-2 md:px-16 md:pt-10 lg:gap-12"
		>
			<div class="flex w-full max-w-full flex-col gap-1.5 text-center lg:w-64 lg:text-right">
				<h2 class="text-base font-medium text-c-on-bg/50">{$LL.Live.GenerationsTitle()}</h2>
				<p class="text-4xl font-bold">
					{Math.floor($generationTotalCount).toLocaleString($locale)}
				</p>
			</div>
			<div class="flex w-full max-w-full flex-col gap-1.5 text-center lg:w-64 lg:text-left">
				<h2 class="text-base font-medium text-c-on-bg/50">{$LL.Live.UpscalesTitle()}</h2>
				<p class="text-4xl font-bold">
					{Math.floor($upscaleTotalCount).toLocaleString($locale)}
				</p>
			</div>
		</div>
		{#if allProcesses.length > 0}
			<div transition:expandCollapse={{ duration: 300 }} class="relative z-0 w-full px-8 md:px-24">
				<div class="flex w-full flex-wrap items-center justify-center py-4">
					{#each allProcesses as processObject (processObject.id)}
						<div
							in:elementreceive={{ key: processObject.id }}
							out:elementsend={{ key: processObject.id }}
							animate:flip={{ duration: 300, easing: quadOut }}
							class="relative z-0 -m-3 flex items-center justify-center"
						>
							<LiveBubble {processObject} />
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div
				transition:expandCollapse={{ duration: 300 }}
				class="relative w-full max-w-lg px-8 lg:px-16"
			>
				<div class="flex w-full flex-col items-center justify-center py-4">
					<IconPulsing class="-m-3 h-26 w-26" />
					<p class="mt-1.5 w-full text-center font-medium text-c-on-bg/75">
						{$LL.Live.WaitingTitle()}
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>
