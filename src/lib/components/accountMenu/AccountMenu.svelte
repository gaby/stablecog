<script lang="ts">
	import AccountPageHeader from '$components/accountMenu/AccountPageHeader.svelte';
	import Header from '$components/accountMenu/Header.svelte';
	import AccountPage from '$components/accountMenu/pages/AccountPage.svelte';
	import LanguagePage from '$components/accountMenu/pages/LanguagePage.svelte';
	import type { TAccountDropdownPage } from '$components/accountMenu/types';
	import DropdownWrapperTranslate from '$components/primitives/dropdown/DropdownWrapperTranslate.svelte';
	import LL from '$i18n/i18n-svelte';

	export let closeMenu: () => void;
	let currentPage: TAccountDropdownPage = 'account';

	let menuPages: Record<
		TAccountDropdownPage,
		{
			title: string;
			onBackButtonClicked: (() => void) | undefined;
			height: number;
			headerComponent?: ConstructorOfATypedSvelteComponent;
			href?: string;
		}
	> = {
		account: {
			title: $LL.Account.PageTitle(),
			onBackButtonClicked: undefined,
			height: 0,
			headerComponent: AccountPageHeader,
			href: '/account'
		},
		settings: {
			title: $LL.Settings.Title(),
			onBackButtonClicked: () => setAccountMenuDropdownPage('account'),
			height: 0
		},
		language: {
			title: $LL.Language(),
			onBackButtonClicked: () => setAccountMenuDropdownPage('account'),
			height: 0
		}
	};

	async function setAccountMenuDropdownPage(page: TAccountDropdownPage) {
		currentPage = page;
	}
</script>

<DropdownWrapperTranslate
	class="w-192 max-w-[calc(100vw-1.25rem)] md:w-72 md:max-w-[calc(100vw-1.25rem)]"
>
	<Header
		title={menuPages[currentPage].title}
		href={menuPages[currentPage].href}
		onBackButtonClicked={menuPages[currentPage].onBackButtonClicked}
		content={menuPages[currentPage].headerComponent || undefined}
		{closeMenu}
	/>
	<div
		style="height: {menuPages[currentPage].height ? `${menuPages[currentPage].height}px` : 'auto'}"
		class="relative flex w-full flex-col transition-all duration-150"
	>
		<AccountPage
			bind:height={menuPages['account'].height}
			{closeMenu}
			{setAccountMenuDropdownPage}
			{currentPage}
		/>
		<LanguagePage bind:height={menuPages['language'].height} {closeMenu} {currentPage} />
	</div>
</DropdownWrapperTranslate>
