// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
type Locales = import('$i18n/i18n-types').Locales;
type TranslationFunctions = import('$i18n/i18n-types').TranslationFunctions;

declare namespace App {
	interface Locals {
		locale: Locales;
		LL: TranslationFunctions;
	}

	// interface Error {}
	// interface Platform {}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
	}
}

interface PlausibleObj {
	callback?: function;
	props?: { [key: string]: string };
}

interface Window {
	plausible: (goalName: string, obj?: PlausibleObj) => void;
	umami: (goalName: string) => void;
}

declare module '*.md' {
	// "unknown" would be more detailed depends on how you structure frontmatter
	const attributes: Record<string, unknown>;

	// When "Mode.TOC" is requested
	const toc: { level: string; content: string }[];

	// When "Mode.HTML" is requested
	const html: string;

	// When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
	import React from 'react';
	const ReactComponent: React.VFC;

	// When "Mode.Vue" is requested
	import { ComponentOptions, Component } from 'vue';
	const VueComponent: ComponentOptions;
	const VueComponentWith: (components: Record<string, Component>) => ComponentOptions;

	// Modify below per your usage
	export { attributes, toc, html, ReactComponent, VueComponent, VueComponentWith };
}
