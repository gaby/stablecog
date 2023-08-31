<script lang="ts">
	import { page } from '$app/stores';
	import IconButton from '$components/buttons/IconButton.svelte';
	import PageLoadProgressBar from '$components/PageLoadProgressBar.svelte';
	import NavigationTabBar from '$components/navigation/NavigationTabBar.svelte';
	import { clickoutside } from '$ts/actions/clickoutside';
	import IconSc from '$components/icons/IconSc.svelte';
	import LL from '$i18n/i18n-svelte';
	import Button from '$components/buttons/Button.svelte';
	import AccountMenu from '$components/accountMenu/AccountMenu.svelte';
	import Avatar from '$components/avatar/Avatar.svelte';
	import { navbarHeight } from '$ts/stores/navbarHeight';
	import { userSummary } from '$ts/stores/user/summary';
	import { navbarStickyType } from '$ts/stores/navbar';
	import { isDrawerOpen } from '$ts/stores/isDrawerOpen';
	import IconSidebar from '$components/icons/IconSidebar.svelte';
	import ButtonHoverEffect from '$components/buttons/ButtonHoverEffect.svelte';
	import LogoButton from '$components/buttons/LogoButton.svelte';
	import IconGuide from '$components/icons/IconGuide.svelte';
	import { themeApp } from '$ts/stores/theme';
	import IconBlog from '$components/icons/IconBlog.svelte';
	import { searchParamsString } from '$ts/stores/searchParamsString';
	import IconLive from '$components/icons/IconLive.svelte';
	import type { Writable } from 'svelte/store';
	import type { TDirTreeItem } from '$routes/+layout';
	import IconChevronDown from '$components/icons/IconChevronDown.svelte';
	import BannerWrapper from '$components/BannerWrapper.svelte';
	import SignInModal from '$components/SignInModal.svelte';
	import RemainingCredits from '$components/navigation/navbar/RemainingCredits.svelte';

	export let notAtTheVeryTop = false;
	export let scrollDirection: 'up' | 'down' = 'down';
	export let dirTree: Writable<TDirTreeItem[]> | undefined = undefined;

	let isSignInModalOpen = false;
	let isAccountMenuOpen = false;

	const routesWithoutDrawer = ['/'];

	const toggleAccountMenu = () => (isAccountMenuOpen = !isAccountMenuOpen);
	const closeAccountMenu = () => (isAccountMenuOpen = false);

	const showBanner = false;
</script>

<nav
	bind:clientHeight={$navbarHeight}
	style={$navbarStickyType === 'relative' || $navbarStickyType === undefined
		? ''
		: 'position: fixed; top: 0; left: 0;'}
	class="w-full flex flex-col z-60 transform transition rounded-b-xl {notAtTheVeryTop &&
	$navbarStickyType === 'auto-hiding' &&
	scrollDirection === 'down'
		? '-translate-y-[calc(100%+2px)]'
		: ''} {$navbarStickyType === 'relative' || !notAtTheVeryTop
		? 'bg-c-bg/0 shadow-navbar-0'
		: 'bg-c-bg shadow-navbar'}"
>
	{#if showBanner}
		<BannerWrapper />
	{/if}
	<div class="w-full flex flex-row items-center justify-between relative z-0">
		<PageLoadProgressBar />
		<div class="flex flex-1 md:flex-none xl:flex-1 self-stretch min-w-0">
			<button
				aria-label="Toggle Drawer"
				on:click={() => isDrawerOpen.set(!$isDrawerOpen)}
				class="flex-shrink-0 relative self-stretch p-0.5 group overflow-hidden md:hidden {routesWithoutDrawer.includes(
					$page.url.pathname
				)
					? 'hidden'
					: ''}"
			>
				<div class="h-full flex items-center justify-center px-2.5 py-3 relative overflow-hidden">
					<ButtonHoverEffect hoverFrom="left" size="md" color="primary-strong" />
					<IconSidebar
						class="w-8 h-8 transition text-c-on-bg not-touch:group-hover:text-c-primary 
						transform {$isDrawerOpen ? 'rotate-90' : ''}"
					/>
				</div>
			</button>
			<LogoButton
				class="{routesWithoutDrawer.includes($page.url.pathname) ? 'flex' : 'hidden'} md:flex"
			/>
			{#if $dirTree && $dirTree.length > 0}
				<div class="pr-2 h-full flex-shrink min-w-0">
					<div
						class="w-full h-full overflow-x-auto items-center md:hidden text-sm font-medium text-c-on-bg/75 pr-2"
					>
						<div class="flex items-center justify-start h-full">
							{#each $dirTree as treeItem, index}
								<a
									class="px-2 h-full flex items-center whitespace-nowrap relative group"
									href={treeItem.href}
								>
									<ButtonHoverEffect size="sm" />
									<p class="not-touch:group-hover:text-c-primary transition">{treeItem.title}</p>
								</a>
								{#if index !== $dirTree.length - 1}
									<IconChevronDown
										class="w-4 h-4 flex-shrink-0 transform -rotate-90 text-c-on-bg/50"
									/>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
		<div class="hidden md:flex md:max-w-[19rem] lg:max-w-[36rem] xl:max-w-[40rem] md:ml-2 xl:ml-0">
			<NavigationTabBar />
		</div>
		<div class="flex md:flex-1 flex-wrap items-center justify-end relative">
			<IconButton
				class="py-2 hidden md:block"
				href="/discord"
				target="_blank"
				name={$LL.Scl.Discord()}
				hasTooltip={true}
			>
				<IconSc
					type="discord"
					class="w-7.5 h-7.5 relative transition transform {$page.url.pathname === '/' &&
					$themeApp === 'light' &&
					!notAtTheVeryTop
						? 'text-c-bg'
						: 'text-c-on-bg'} not-touch:group-hover/iconbutton:text-c-primary"
				/>
			</IconButton>
			<IconButton
				class="py-2 hidden md:block"
				href="/guide"
				target={$page.url.pathname.startsWith('/guide') ? undefined : '_blank'}
				name={$LL.Guide.PageTitle()}
				hasTooltip={true}
			>
				<IconGuide
					class="w-7.5 h-7.5 relative transition transform {$page.url.pathname === '/' &&
					$themeApp === 'light' &&
					!notAtTheVeryTop
						? 'text-c-bg'
						: 'text-c-on-bg'} not-touch:group-hover/iconbutton:text-c-primary"
				/>
			</IconButton>
			<IconButton
				class="py-2 hidden md:block"
				href="/blog"
				target={$page.url.pathname.startsWith('/blog') ? undefined : '_blank'}
				name={$LL.Blog.TitleAlt()}
				hasTooltip={true}
			>
				<IconBlog
					class="w-7.5 h-7.5 relative transition transform {$page.url.pathname === '/' &&
					$themeApp === 'light' &&
					!notAtTheVeryTop
						? 'text-c-bg'
						: 'text-c-on-bg'} not-touch:group-hover/iconbutton:text-c-primary"
				/>
			</IconButton>
			<IconButton
				class="py-2 hidden md:block"
				href="/live"
				name={$LL.Navbar.LiveTab()}
				hasTooltip={true}
			>
				<IconLive
					class="w-7.5 h-7.5 relative transition transform {$page.url.pathname === '/' &&
					$themeApp === 'light' &&
					!notAtTheVeryTop
						? 'text-c-bg'
						: 'text-c-on-bg'} not-touch:group-hover/iconbutton:text-c-primary"
				/>
			</IconButton>
			<div class="flex items-center justify-end pl-2 pr-3.5 md:pl-2.5 md:pr-5">
				<RemainingCredits {notAtTheVeryTop} />
				<!-- Account -->
				{#if $page.data.session?.user.email && $userSummary}
					<div
						use:clickoutside={{ callback: closeAccountMenu }}
						class="flex flex-col items-end relative"
					>
						<div class="py-3.5">
							<IconButton
								class="shadow-lg rounded-full flex items-center justify-center shadow-c-shadow/[var(--o-shadow-strong)]"
								noPadding
								name="Account"
								onClick={() => {
									toggleAccountMenu();
									if (isAccountMenuOpen && $userSummary && $userSummary.refetch) {
										$userSummary.refetch();
									}
								}}
							>
								<Avatar
									text={$userSummary.username}
									class="w-9 h-9 ring-2 {$page.url.pathname === '/' &&
									$themeApp === 'light' &&
									!notAtTheVeryTop
										? 'ring-c-bg/25'
										: 'ring-c-on-bg/25'} overflow-hidden rounded-full transition duration-250 transform relative
									{$page.url.pathname === '/' && $themeApp === 'light' && !notAtTheVeryTop
										? 'not-touch:group-hover/iconbutton:ring-c-bg'
										: 'not-touch:group-hover/iconbutton:ring-c-on-bg'} {isAccountMenuOpen
										? 'rotate-360'
										: !isAccountMenuOpen
										? 'not-touch:group-hover/iconbutton:rotate-45'
										: ''}"
								/>
							</IconButton>
						</div>
						<div class="relative -mr-1">
							{#if isAccountMenuOpen}
								<AccountMenu closeMenu={closeAccountMenu} />
							{/if}
						</div>
					</div>
				{:else}
					<div class="py-2.5">
						<Button class="-mr-1" size="xs" onClick={() => (isSignInModalOpen = true)}>
							{$LL.SignIn.GetStartedButton()}
						</Button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</nav>

{#if isSignInModalOpen && (!$page.data.session?.user.id || !$userSummary)}
	<SignInModal
		redirectTo={($page.url.pathname === '/' ? '/generate' : $page.url.pathname) +
			$searchParamsString}
		onClickoutside={() => (isSignInModalOpen = false)}
	/>
{/if}