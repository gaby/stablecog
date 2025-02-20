import type { TGeneration } from '$ts/stores/user/generation';
import { writableLocal } from '$ts/stores/writableLocal';
import { writable } from 'svelte/store';
import { z } from 'zod';

const defaultUpscaleDurationMs = 20000;
const defaultGenerationDurationPerOutputMs = 10000;
const defaultGenerationCostCompletionPerMs = 105;

export const estimatedGenerationDurationMs = writable(defaultGenerationDurationPerOutputMs);
export const generationCostCompletionPerMs = writableLocal({
	key: 'generationCostCompletionPerMs',
	defaultValue: defaultGenerationCostCompletionPerMs,
	schema: z.number()
});
export const estimatedUpscaleDurationMs = writableLocal({
	key: 'estimatedUpscaleDurationMs',
	defaultValue: defaultUpscaleDurationMs,
	schema: z.number()
});

const widthBase = 1024;
const heightBase = 1024;
const outputsBase = 1;
const costBase = widthBase * heightBase * outputsBase;

export const calculateGenerationCost = (width: number, height: number, numOutputs: number) => {
	const widthMul = width / widthBase;
	const heightMul = height / heightBase;
	const outputsMul = numOutputs / outputsBase;
	const costMul = widthMul * heightMul * outputsMul;
	const cost = costBase * costMul;
	return cost;
};

export const getCostFromGeneration = (generation: TGeneration) => {
	if (generation.status !== 'succeeded' || !generation.completed_at || !generation.started_at) {
		return null;
	}
	const cost = calculateGenerationCost(
		generation.width,
		generation.height,
		generation.outputs.length
	);
	return cost;
};

export const getCostCompletionPerMsFromGeneration = (generation: TGeneration) => {
	if (generation.status !== 'succeeded' || !generation.completed_at || !generation.started_at) {
		return null;
	}
	const cost = getCostFromGeneration(generation);
	if (cost === null) {
		return null;
	}
	const durationMs =
		new Date(generation.completed_at).getTime() - new Date(generation.started_at).getTime();
	const costRatePerMs = cost / durationMs;
	return costRatePerMs;
};
