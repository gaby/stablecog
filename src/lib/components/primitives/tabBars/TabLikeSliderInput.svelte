<script lang="ts">
	import SliderInputWithNumerator from '$components/primitives/SliderInputWithNumerator.svelte';
	import TabBarWrapper from '$components/primitives/tabBars/TabBarWrapper.svelte';

	export let value: number;
	export let min: number;
	export let max: number;
	export let step = 1;
	export let name: string;
	export let disabled: boolean = false;
	export let notAllowed: boolean = false;
	export let hasTitle = false;
	export let valueSize: 'sm' | 'md' = 'sm';
	export let numeratorFormatter: (value: number) => string = (value) => value.toString();
	export { classes as class };
	let classes = '';
</script>

<TabBarWrapper class="{classes} {notAllowed ? 'opacity-50' : ''}">
	{#if hasTitle}
		<div class="flex self-stretch text-c-on-bg/50">
			<slot name="title" />
		</div>
		<div class="-ml-px mr-px w-2px self-stretch">
			<div class="h-full w-full bg-c-bg-secondary transition" />
		</div>
	{/if}
	<SliderInputWithNumerator
		bind:value
		{valueSize}
		{step}
		{name}
		{max}
		{min}
		{disabled}
		{notAllowed}
		{numeratorFormatter}
	/>
</TabBarWrapper>
