<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$components/primitives/buttons/Button.svelte';
	import MetaTag from '$components/utils/MetaTag.svelte';
	import PageWrapper from '$components/wrappers/PageWrapper.svelte';
	import LL from '$i18n/i18n-svelte';
	import DataProvider from '$routes/(app)/pricing/DataProvider.svelte';
	import PlanCard from '$routes/(app)/pricing/PlanCard.svelte';
	import type { TBillingType, TSubscriptionCard } from '$routes/(app)/pricing/types.js';
	import { getApiUrl, staticAssetBaseUrl } from '$ts/constants/main';
	import { previewImageVersion } from '$ts/constants/previewImageVersion';
	import { socialAppUrls } from '$ts/constants/social';
	import { sessionStore } from '$ts/constants/supabase';
	import { getCustomerPortalUrl } from '$ts/helpers/user/getCustomerPortalUrl.js';
	import { isSignInModalOpen } from '$ts/stores/isSignInModalOpen.js';
	import { userSummary } from '$ts/stores/user/summary';
	import type { TTab } from '$ts/types/main.js';

	export let data;

	let selectedBillingType: TBillingType = 'monthly';
	let billingTypes: TTab<TBillingType>[];
	$: billingTypes = [
		{
			label: $LL.Pricing.MonthlyTitle(),
			value: 'monthly'
		},
		{
			label: $LL.Pricing.YearlyTitle(),
			value: 'yearly'
		}
	];

	interface FAQItem {
		id: string;
		question: string;
		answer: string;
		isHTML?: boolean;
	}
	let faqItems: FAQItem[];
	$: faqItems = [
		{
			id: 'plan-cancellation',
			question: $LL.FAQ.Questions.PlanCancellation.Question(),
			answer: $LL.FAQ.Questions.PlanCancellation.Answer()
		},
		{
			id: 'plan-upgrade-or-downgrade',
			question: $LL.FAQ.Questions.PlanUpgradeOrDowngrade.Question(),
			answer: $LL.FAQ.Questions.PlanUpgradeOrDowngrade.Answer()
		},
		{
			id: 'commercial-use',
			question: $LL.FAQ.Questions.CommercialUse.Question(),
			answer: $LL.FAQ.Questions.CommercialUse.Answer()
		},
		{
			id: 'more-credits',
			question: $LL.FAQ.Questions.MoreCredits.Question(),
			answer: $LL.FAQ.Questions.MoreCredits.Answer()
		},
		{
			id: 'credit-roll-over',
			question: $LL.FAQ.Questions.CreditRollOver.Question(),
			answer: $LL.FAQ.Questions.CreditRollOver.Answer()
		},
		{
			id: 'more-questions',
			question: $LL.FAQ.Questions.MoreQuestions.Question(),
			answer: $LL.FAQ.Questions.MoreQuestions.Answer({
				Discord: getAnchorLinkHTML(
					$LL.FAQ.Questions.MoreQuestions.Parts.Discord(),
					socialAppUrls.discord
				),
				Twitter: getAnchorLinkHTML(
					$LL.FAQ.Questions.MoreQuestions.Parts.Twitter(),
					socialAppUrls.twitter
				),
				email: getAnchorLinkHTML($LL.FAQ.Questions.MoreQuestions.Parts.Email(), socialAppUrls.email)
			}),
			isHTML: true
		}
	];

	let checkoutCreationStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
	let customerPortalCreationStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
	let selectedPriceId: string | undefined = undefined;

	interface TCheckoutSessionRes {
		checkout_url?: string;
		error?: string;
	}

	async function createCheckoutSessionAndRedirect({
		priceId,
		currency,
		promotionCodeId
	}: {
		priceId: string;
		currency: string;
		promotionCodeId?: string;
	}) {
		selectedPriceId = priceId;
		let body: Record<string, string> = {
			target_price_id: priceId,
			success_url: `${window.location.origin}/pricing/purchase/succeeded`,
			cancel_url: `${window.location.origin}/pricing/purchase/cancelled`,
			currency
		};
		if (promotionCodeId) {
			body.promotion_code_id = promotionCodeId;
		}
		try {
			checkoutCreationStatus = 'loading';
			const res = await fetch(`${getApiUrl().origin}/v1/user/subscription/checkout`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$sessionStore?.access_token}`
				},
				body: JSON.stringify(body)
			});
			if (!res.ok) {
				throw new Error('Failed to create checkout session');
			}
			const resJson: TCheckoutSessionRes = await res.json();
			if (resJson.error) {
				throw new Error(resJson.error);
			}
			const { checkout_url } = resJson;
			if (!checkout_url) {
				throw new Error('No checkout session url returned');
			}
			window.location.href = checkout_url;
			checkoutCreationStatus = 'success';
		} catch (error) {
			checkoutCreationStatus = 'error';
			selectedPriceId = undefined;
		}
	}

	async function createCustomerPortalSessionAndRedirect(accessToken: string) {
		try {
			customerPortalCreationStatus = 'loading';
			const { customer_portal_url, error } = await getCustomerPortalUrl({
				returnUrl: `${window.location.origin}/pricing`,
				accessToken
			});
			if (error || !customer_portal_url) {
				throw new Error(error || 'No customer portal url returned');
			}
			window.location.href = customer_portal_url;
			checkoutCreationStatus = 'success';
		} catch (error) {
			customerPortalCreationStatus = 'error';
		}
	}

	function getAnchorLinkHTML(text: string, href: string) {
		return `<a href="${href}" target="_blank" class="hover:text-c-primary transition underline">${text}</a>`;
	}

	function getButtonHref(subscribedPriceId: string, card: TSubscriptionCard, pathname: string) {
		return subscribedPriceId && card.priceId
			? `/account/subscription/change?target_price_id=${
					card.priceId
				}&from=${encodeURIComponent(pathname)}`
			: subscribedPriceId && card.id === 'plan-free'
				? `/account/subscription/change?target_price_id=${'free'}&from=${encodeURIComponent(pathname)}`
				: undefined;
	}

	function getButtonOnClick(subscribedPriceId: string, card: TSubscriptionCard) {
		return !subscribedPriceId && card.priceId
			? createCheckoutSessionAndRedirect({
					priceId: card.priceId,
					currency: card.currency,
					promotionCodeId: card.promotionCodeId
				})
			: undefined;
	}
</script>

<MetaTag
	title="Pricing | Stablecog"
	description="Choose a plan that works for you and start using Stablecog. Free, multilingual and open-source AI image generator using Stable Diffusion, FLUX, and Kandinsky."
	image_url="{staticAssetBaseUrl}/previews{$page.url.pathname}-{previewImageVersion}.png"
/>

<PageWrapper>
	<DataProvider
		{data}
		{selectedBillingType}
		let:subscriptionCards
		let:creditPackCards
		let:isFirstPurchase30Off
	>
		<div class="my-auto flex w-full flex-col items-center justify-start">
			<section id="plans" class="flex w-full flex-col items-center justify-start">
				<h1 class="text-center text-4xl font-bold">{$LL.Pricing.PlansTitle()}</h1>
				<p class="mt-3 max-w-xl text-center leading-relaxed text-c-on-bg/75">
					{$LL.Pricing.PlansParagraph()}
				</p>
				<!-- <div class="relative mt-6 w-full sm:max-w-sm md:max-w-xs">
					<TabBar
						size="sm"
						class="w-full"
						textSizeClass="text-base"
						name="Billing Type"
						tabs={billingTypes}
						bind:value={selectedBillingType}
					/>
					<p
						class="pointer-events-none absolute -right-2 top-0 -translate-y-1/2 transform rounded-full bg-c-primary px-2.5 py-0.75 text-right text-xs font-bold text-c-bg"
					>
						{$LL.Pricing.Save20Percent()}
					</p>
				</div> -->
				<div
					class="mt-5 flex w-full max-w-7xl flex-wrap items-stretch justify-center lg:px-5 xl:px-0"
				>
					{#each subscriptionCards as card}
						{@const subscribedPriceId = $userSummary?.price_id}
						{@const subscribedAmount = subscriptionCards.find(
							(c) => c.productId === $userSummary?.product_id
						)?.amount}
						{@const isSubscribed =
							subscribedPriceId === card.priceId && $sessionStore?.user.id !== undefined}
						{@const isUpgrade =
							subscribedAmount !== undefined &&
							subscribedAmount < card.amount &&
							$sessionStore?.user.id !== undefined}
						{@const isDowngrade =
							subscribedAmount !== undefined &&
							subscribedAmount > card.amount &&
							$sessionStore?.user.id !== undefined}
						{@const accessToken = $sessionStore?.access_token}
						<PlanCard
							id={card.id}
							planTitle={card.title}
							ringClass={card.ringClass}
							isSelected={isSubscribed && $userSummary?.price_id !== undefined}
							badgeText={!isDowngrade ? card.badgeText : undefined}
							badgeClasses={card.badgeClasses}
							currencyAmount={card.amount}
							currencySymbol={card.currencySymbol}
							discountBadgeText={isFirstPurchase30Off && card.id === 'plan-free'
								? $LL.Pricing.FreeForeverTitle()
								: isFirstPurchase30Off
									? $LL.Pricing.Discounts.FirstMonth30OffParagraph()
									: undefined}
							discountRate={card.discountRate}
							discountBadgeType={card.id === 'plan-free' ? 'on-bg' : 'primary'}
							features={card.features}
							mainFeatures={card.mainFeatures}
							billingType={card.billingType}
						>
							<div slot="button" class="w-full">
								{#if $userSummary && accessToken}
									<Button
										withSpinner
										type={isSubscribed && card.id !== 'plan-free'
											? 'success'
											: isSubscribed && card.id === 'plan-free'
												? 'bg-secondary'
												: isDowngrade
													? 'bg-secondary'
													: 'primary'}
										noBorder={!isDowngrade}
										disabled={isSubscribed}
										loading={(card.priceId === selectedPriceId &&
											checkoutCreationStatus === 'loading') ||
											(card.id === 'plan-free' && customerPortalCreationStatus === 'loading')}
										href={isDowngrade && card.priceId
											? `/account/subscription/downgrade?price_id=${
													card.priceId
												}&from=${encodeURIComponent($page.url.pathname)}`
											: undefined}
										onClick={() =>
											!isDowngrade && card.priceId
												? createCheckoutSessionAndRedirect({
														priceId: card.priceId,
														currency: card.currency,
														promotionCodeId: card.promotionCodeId
													})
												: isDowngrade && card.id === 'plan-free'
													? createCustomerPortalSessionAndRedirect(accessToken)
													: null}
										class="w-full"
									>
										<p
											class="w-full {isSubscribed &&
											subscribedAmount === 0 &&
											card.id === 'plan-free'
												? 'opacity-60'
												: ''}"
										>
											{#if isSubscribed}
												{$LL.Pricing.SubscribedButton()}
												<!-- {:else if card.productId === $userSummary.product_id && selectedBillingType === 'yearly' && $userSummary.price_id !== card.priceId}
												{$LL.Pricing.SwitchToYearlyButton()} -->
											{:else if card.productId === $userSummary.product_id && selectedBillingType === 'monthly' && $userSummary.price_id !== card.priceId}
												{$LL.Pricing.SwitchToMonthtlyButton()}
											{:else if isUpgrade}
												{subscribedAmount === 0
													? $LL.Pricing.SubscribeButton()
													: $LL.Pricing.UpgradeButton()}
											{:else if isDowngrade}
												{$LL.Pricing.DowngradeButton()}
											{:else}
												{$LL.Pricing.SubscribeButton()}
											{/if}
										</p>
									</Button>
								{:else}
									<Button onClick={() => isSignInModalOpen.set(true)} class="w-full">
										{$LL.SignIn.GetStartedButton()}
									</Button>
								{/if}
							</div>
						</PlanCard>
					{/each}
				</div>
				<div class="h-[1vh] w-full" />
			</section>
			{#if $userSummary?.product_id && $sessionStore?.user.id !== undefined}
				<section id="credit-packs" class="flex w-full flex-col items-center justify-start pt-12">
					<h2 class="text-center text-4xl font-bold">{$LL.Pricing.CreditPacksTitle()}</h2>
					<p class="mt-3 max-w-xl text-center leading-relaxed text-c-on-bg/75">
						{$LL.Pricing.CreditPacksParagraph()}
					</p>
					<div class="mt-5 flex w-full max-w-7xl flex-wrap justify-center">
						{#each creditPackCards as card}
							<PlanCard
								id={card.id}
								planTitle={card.title}
								ringClass={card.ringClass}
								badgeText={card.badgeText}
								badgeClasses={card.badgeClasses}
								currencyAmount={card.amount}
								currencySymbol={card.currencySymbol}
								features={card.features}
								billingType={card.billingType}
								mainFeatures={card.mainFeatures}
							>
								<div slot="button" class="w-full">
									<Button
										withSpinner
										type={'primary'}
										loading={card.priceId === selectedPriceId &&
											checkoutCreationStatus === 'loading'}
										onClick={() =>
											createCheckoutSessionAndRedirect({
												priceId: card.priceId,
												currency: card.currency
											})}
										class="w-full"
									>
										{$LL.Pricing.PurchaseButton()}
									</Button>
								</div>
							</PlanCard>
						{/each}
					</div>
					<div class="h-[1vh] w-full" />
				</section>
			{/if}
			<div class="mt-5 w-full max-w-5xl md:mt-10 xl:max-w-7xl xl:px-4">
				<div class="h-2px w-full rounded-full bg-c-bg-secondary" />
			</div>
			<section id="faq" class="flex w-full flex-col items-center pt-5">
				<div class="flex max-w-5xl flex-wrap items-start justify-start xl:max-w-7xl xl:px-4">
					{#each faqItems as item}
						<div id={item.id} class="w-full px-0 py-4 md:w-1/2 md:px-5 xl:w-1/3">
							<h5 class="font-semibold">{item.question}</h5>
							{#if item.isHTML}
								<p class="mt-1 text-c-on-bg/75">{@html item.answer}</p>
							{:else}
								<p class="mt-1 text-c-on-bg/75">{item.answer}</p>
							{/if}
						</div>
					{/each}
				</div>
			</section>
			<div class="mt-5 w-full max-w-5xl md:mt-6 xl:max-w-7xl xl:px-4">
				<div class="h-2px w-full rounded-full bg-c-bg-secondary" />
			</div>
		</div>
	</DataProvider>
</PageWrapper>
