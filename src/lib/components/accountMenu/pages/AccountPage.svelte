<script lang="ts">
	import { page } from '$app/stores';
	import Avatar from '$components/Avatar.svelte';
	import ProductIdBadge from '$components/badges/ProductIdBadge.svelte';
	import LL, { locale } from '$i18n/i18n-svelte';
	import { userSummary } from '$ts/stores/user/summary';
	import Button from '$components/buttons/Button.svelte';
	import { isGalleryAdmin, isSuperAdmin } from '$ts/helpers/admin/roles';
	import DropdownItem from '$components/DropdownItem.svelte';
	import IconWrench from '$components/icons/IconWrench.svelte';
	import IconUser from '$components/icons/IconUser.svelte';
	import IconGuide from '$components/icons/IconGuide.svelte';
	import { logSignOut } from '$ts/helpers/loggers';
	import { supabase } from '$ts/constants/supabase';
	import IconSignOut from '$components/icons/IconSignOut.svelte';
	import { advancedModeApp } from '$ts/stores/advancedMode';
	import { appVersion } from '$ts/stores/appVersion';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import IconSettings from '$components/icons/IconSettings.svelte';
	import type { TAccountDropdownPage } from '$components/accountMenu/types';
	import PageWrapper from '$components/accountMenu/PageWrapper.svelte';

	export let setAccountMenuDropdownPage: (p: TAccountDropdownPage) => void;
	export let closeMenu: () => void;
	export let height: number;
	export let currentPage: TAccountDropdownPage;
</script>

<PageWrapper bind:height {currentPage} thisPage="account">
	<div class="w-full flex gap-3 items-center px-5 py-4">
		<div
			class="w-7 h-7 ring-2 ring-c-on-bg/25 rounded-full transition transform
			relative shadow-lg shadow-c-shadow/[var(--o-shadow-strong)] items-center justify-center overflow-hidden"
		>
			<div class="w-full h-full">
				<Avatar str={$page.data.session?.user.email || ''} class="w-9 h-9 relative" />
			</div>
		</div>
		<div class="min-w-0 flex-1 flex flex-col">
			<p class="flex-1 min-w-0 overflow-hidden overflow-ellipsis font-bold">
				{$page.data.session?.user.email}
			</p>
		</div>
	</div>
	{#if $userSummary}
		<div class="w-full flex justify-stretch px-5 py-1 -mt-1">
			{#if $userSummary.product_id}
				<ProductIdBadge
					href="/pricing#plans"
					class="w-full mt-0.25"
					productId={$userSummary.product_id}
				/>
			{:else}
				<Button class="w-full mt-0.25" href="/pricing" size="sm">
					{$LL.Pricing.SubscribeButton()}
				</Button>
			{/if}
		</div>
		<div class="w-full relative z-20 mt-4">
			<div class="w-full h-2px rounded-full bg-c-bg-tertiary" />
		</div>
		<div class="w-full flex flex-col items-start px-5 py-3">
			<p class="text-c-on-bg/50 font-medium text-sm">{$LL.Account.RemainingTitle()}</p>
			<p class="font-bold text-lg">
				{$userSummary.total_remaining_credits.toLocaleString($locale)}
			</p>
		</div>
	{/if}
	<div class="w-full relative z-20">
		<div class="w-full h-2px rounded-full bg-c-bg-tertiary" />
	</div>
	<div class="w-full flex flex-col justify-start">
		{#if isSuperAdmin($userSummary?.roles || []) || isGalleryAdmin($userSummary?.roles || [])}
			<DropdownItem href="/admin" onClick={closeMenu}>
				<div class="flex-1 min-w-0 flex items-center justify-start gap-2.5">
					<IconWrench
						class="transition w-6 h-6 text-c-text {!$isTouchscreen
							? 'group-hover:text-c-primary'
							: ''}"
					/>
					<p
						class="flex-1 min-w-0 overflow-hidden overflow-ellipsis text-left transition text-c-on-bg {!$isTouchscreen
							? 'group-hover:text-c-primary'
							: ''}"
					>
						{$LL.Admin.AdminTab()}
					</p>
				</div>
			</DropdownItem>
		{/if}
		<DropdownItem onClick={() => setAccountMenuDropdownPage('settings')}>
			<div class="flex-1 min-w-0 flex items-center justify-start gap-2.5">
				<IconSettings
					class="transition w-6 h-6 text-c-text {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				/>
				<p
					class="flex-1 min-w-0 overflow-hidden overflow-ellipsis text-left transition text-c-on-bg {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				>
					{$LL.Settings.Title()}
				</p>
			</div>
		</DropdownItem>
		<DropdownItem href="/account" onClick={closeMenu}>
			<div class="flex-1 min-w-0 flex items-center justify-start gap-2.5">
				<IconUser
					class="transition w-6 h-6 text-c-text {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				/>
				<p
					class="flex-1 min-w-0 overflow-hidden overflow-ellipsis text-left transition text-c-on-bg {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				>
					{$LL.Account.ManageAccountButton()}
				</p>
			</div>
		</DropdownItem>
		<DropdownItem href="/guide" onClick={closeMenu}>
			<div class="flex-1 min-w-0 flex items-center justify-start gap-2.5">
				<IconGuide
					class="transition w-6 h-6 text-c-text {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				/>
				<p
					class="flex-1 min-w-0 overflow-hidden overflow-ellipsis text-left transition text-c-on-bg {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				>
					{$LL.Guide.GuideButton()}
				</p>
			</div>
		</DropdownItem>
		<DropdownItem
			onClick={async () => {
				close();
				try {
					await supabase.auth.signOut();
					userSummary.set(undefined);
					logSignOut({
						'SC - User Id': $page.data.session?.user.id,
						'SC - Stripe Product Id': $userSummary?.product_id,
						'SC - Locale': $locale,
						'SC - Advanced Mode': $advancedModeApp,
						'SC - Page': `${$page.url.pathname}${$page.url.search}`,
						'SC - App Version': $appVersion
					});
				} catch (error) {
					console.log(error);
				}
			}}
		>
			<div class="flex-1 min-w-0 flex items-center justify-start gap-2.5">
				<IconSignOut
					class="transition w-6 h-6 text-c-text {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				/>
				<p
					class="flex-1 min-w-0 overflow-hidden overflow-ellipsis text-left transition text-c-on-bg {!$isTouchscreen
						? 'group-hover:text-c-primary'
						: ''}"
				>
					{$LL.SignIn.SignOutButton()}
				</p>
			</div>
		</DropdownItem>
	</div>
</PageWrapper>