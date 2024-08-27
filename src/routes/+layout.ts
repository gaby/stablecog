import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { writable } from 'svelte/store';
import type { TAvailableTheme } from '$ts/stores/theme';
import type { TUserSummary } from '$ts/stores/user/summary';
import { getUserSummary } from '$ts/helpers/user/user';
import { supabaseAnonKey, supabaseUrl } from '$ts/constants/supabase';
import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
import { browser } from '$app/environment';

export const load: LayoutLoad = async (event) => {
	const s = Date.now();
	const { depends, data, fetch } = event;
	depends('supabase:auth');

	const supabase = isBrowser()
		? createBrowserClient(supabaseUrl, supabaseAnonKey, {
				global: {
					fetch
				}
			})
		: createServerClient(supabaseUrl, supabaseAnonKey, {
				global: {
					fetch
				},
				cookies: {
					getAll() {
						return data.cookies;
					}
				}
			});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	const startUserSummary = Date.now();
	let userSummary: TUserSummary | undefined = undefined;
	if (session && session.access_token && session.expires_in > 3) {
		try {
			const summary = await getUserSummary(session.access_token);
			if (!browser) {
				console.log('layout.ts | UserSummary load time:', `${Date.now() - startUserSummary}ms`);
			}
			if (summary) {
				userSummary = summary;
			}
		} catch (error) {
			console.log('getUserSummary error', error);
		}
	}
	const locale = event.data.locale;
	await loadLocaleAsync(locale);
	const theme = event.data.theme;
	const isLeftSidebarHidden = event.data.isLeftSidebarHidden;

	if (!browser) {
		console.log(`[layout.ts] | ${Date.now() - s}ms`);
	}
	return {
		locale,
		session,
		supabase,
		theme,
		themeStore: writable<TAvailableTheme>('dark'),
		userSummary,
		userSummaryStore: writable<TUserSummary | undefined>(userSummary),
		globalSeed: event.data.globalSeed,
		globalSeedStore: writable<number>(event.data.globalSeed),
		isLeftSidebarHidden,
		isLeftSidebarHiddenStore: writable<boolean>(isLeftSidebarHidden),
		dirTree: writable<TDirTreeItem[]>([])
	};
};

export interface TDirTreeItem {
	title: string;
	href: string;
}
