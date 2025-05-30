import { env } from '$env/dynamic/public';

export const freeDailyImageCount = 20;

export const STRIPE_CURRENCIES = ['usd', 'eur'] as const;

export const STRIPE_PRICE_IDS_SUBSCRIPTIONS_MO = [
	env.PUBLIC_STRIPE_PRICE_ID_STARTER_SUBSCRIPTION_MO,
	env.PUBLIC_STRIPE_PRICE_ID_PRO_SUBSCRIPTION_MO,
	env.PUBLIC_STRIPE_PRICE_ID_ULTIMATE_SUBSCRIPTION_MO
] as const;

export const STRIPE_PRICE_IDS_SUBSCRIPTIONS_YR = [
	env.PUBLIC_STRIPE_PRICE_ID_STARTER_SUBSCRIPTION_YR,
	env.PUBLIC_STRIPE_PRICE_ID_PRO_SUBSCRIPTION_YR,
	env.PUBLIC_STRIPE_PRICE_ID_ULTIMATE_SUBSCRIPTION_YR
] as const;

export const STRIPE_PRODUCT_IDS_SUBSCRIPTIONS = [
	env.PUBLIC_STRIPE_PRODUCT_ID_STARTER_SUBSCRIPTION,
	env.PUBLIC_STRIPE_PRODUCT_ID_PRO_SUBSCRIPTION,
	env.PUBLIC_STRIPE_PRODUCT_ID_ULTIMATE_SUBSCRIPTION
] as const;

export const STRIPE_PRICE_IDS_CREDIT_PACKS = [
	env.PUBLIC_STRIPE_PRICE_ID_MEDIUM_PACK,
	env.PUBLIC_STRIPE_PRICE_ID_LARGE_PACK,
	env.PUBLIC_STRIPE_PRICE_ID_MEGA_PACK
] as const;

export const STRIPE_PRODUCT_IDS_CREDIT_PACKS = [
	env.PUBLIC_STRIPE_PRODUCT_ID_MEDIUM_PACK,
	env.PUBLIC_STRIPE_PRODUCT_ID_LARGE_PACK,
	env.PUBLIC_STRIPE_PRODUCT_ID_MEGA_PACK
] as const;

export const STRIPE_HIGHEST_PRODUCT_ID_SUBSCRIPTIONS =
	STRIPE_PRODUCT_IDS_SUBSCRIPTIONS[STRIPE_PRODUCT_IDS_SUBSCRIPTIONS.length - 1];

export const STRIPE_CURRENCY_TO_SYMBOL: { [currency in TStripeSupportedCurrency]: string } = {
	usd: '$',
	eur: '€'
} as const;

export type TStripeSupportedPriceIdSubscriptionsMo =
	(typeof STRIPE_PRICE_IDS_SUBSCRIPTIONS_MO)[number];

export type TStripeSupportedPriceIdSubscriptionsYr =
	(typeof STRIPE_PRICE_IDS_SUBSCRIPTIONS_YR)[number];

export type TStripeSupportedProductIdSubscriptions =
	(typeof STRIPE_PRODUCT_IDS_SUBSCRIPTIONS)[number];
export type TStripeSupportedCurrency = (typeof STRIPE_CURRENCIES)[number];

export type TStripeSupportedPriceIdCreditPacks = (typeof STRIPE_PRICE_IDS_CREDIT_PACKS)[number];
export type TStripeSupportedProductIdCreditPacks = (typeof STRIPE_PRODUCT_IDS_CREDIT_PACKS)[number];

export const roleToProductId: Record<string, string> = {
	STARTER: env.PUBLIC_STRIPE_PRODUCT_ID_STARTER_SUBSCRIPTION,
	PRO: env.PUBLIC_STRIPE_PRODUCT_ID_PRO_SUBSCRIPTION,
	ULTIMATE: env.PUBLIC_STRIPE_PRODUCT_ID_ULTIMATE_SUBSCRIPTION
};

export const STRIPE_PRODUCT_ID_OBJECTS_SUBSCRIPTIONS: {
	[productId in TStripeSupportedProductIdSubscriptions]: {
		product_id: TStripeSupportedProductIdSubscriptions;
		monthly_images: number;
		parallel_generations: number;
		parallel_upscales: number;
		parallel_voiceovers: number;
		prices: {
			monthly: {
				[priceId in TStripeSupportedPriceIdSubscriptionsMo]: {
					currencies: {
						[currency in TStripeSupportedCurrency]: {
							amount: number;
						};
					};
				};
			};
			yearly: {
				[priceId in TStripeSupportedPriceIdSubscriptionsYr]: {
					currencies: {
						[currency in TStripeSupportedCurrency]: {
							amount: number;
						};
					};
				};
			};
		};
	};
} = {
	[env.PUBLIC_STRIPE_PRODUCT_ID_STARTER_SUBSCRIPTION]: {
		product_id: env.PUBLIC_STRIPE_PRODUCT_ID_STARTER_SUBSCRIPTION,
		monthly_images: 2000,
		parallel_generations: 2,
		parallel_upscales: 2,
		parallel_voiceovers: 1,
		prices: {
			monthly: {
				[env.PUBLIC_STRIPE_PRICE_ID_STARTER_SUBSCRIPTION_MO]: {
					currencies: {
						usd: {
							amount: 10
						},
						eur: {
							amount: 10
						}
					}
				}
			},
			yearly: {
				[env.PUBLIC_STRIPE_PRICE_ID_STARTER_SUBSCRIPTION_YR]: {
					currencies: {
						usd: {
							amount: 96
						},
						eur: {
							amount: 96
						}
					}
				}
			}
		}
	},
	[env.PUBLIC_STRIPE_PRODUCT_ID_PRO_SUBSCRIPTION]: {
		product_id: env.PUBLIC_STRIPE_PRODUCT_ID_PRO_SUBSCRIPTION,
		monthly_images: 6000,
		parallel_generations: 3,
		parallel_upscales: 3,
		parallel_voiceovers: 1,
		prices: {
			monthly: {
				[env.PUBLIC_STRIPE_PRICE_ID_PRO_SUBSCRIPTION_MO]: {
					currencies: {
						usd: {
							amount: 25
						},
						eur: {
							amount: 25
						}
					}
				}
			},
			yearly: {
				[env.PUBLIC_STRIPE_PRICE_ID_PRO_SUBSCRIPTION_YR]: {
					currencies: {
						usd: {
							amount: 240
						},
						eur: {
							amount: 240
						}
					}
				}
			}
		}
	},
	[env.PUBLIC_STRIPE_PRODUCT_ID_ULTIMATE_SUBSCRIPTION]: {
		product_id: env.PUBLIC_STRIPE_PRODUCT_ID_ULTIMATE_SUBSCRIPTION,
		monthly_images: 12000,
		parallel_generations: 4,
		parallel_upscales: 4,
		parallel_voiceovers: 1,
		prices: {
			monthly: {
				[env.PUBLIC_STRIPE_PRICE_ID_ULTIMATE_SUBSCRIPTION_MO]: {
					currencies: {
						usd: {
							amount: 50
						},
						eur: {
							amount: 50
						}
					}
				}
			},
			yearly: {
				[env.PUBLIC_STRIPE_PRICE_ID_ULTIMATE_SUBSCRIPTION_YR]: {
					currencies: {
						usd: {
							amount: 480
						},
						eur: {
							amount: 480
						}
					}
				}
			}
		}
	}
} as const;

export const STRIPE_PRODUCT_ID_OBJECTS_CREDIT_PACKS: {
	[prodcutId in TStripeSupportedProductIdCreditPacks]: {
		product_id: TStripeSupportedProductIdCreditPacks;
		images: number;
		prices: {
			[priceId in TStripeSupportedPriceIdCreditPacks]: {
				currencies: {
					[currency in TStripeSupportedCurrency]: {
						amount: number;
					};
				};
			};
		};
	};
} = {
	[env.PUBLIC_STRIPE_PRODUCT_ID_MEDIUM_PACK]: {
		product_id: env.PUBLIC_STRIPE_PRODUCT_ID_MEDIUM_PACK,
		images: 1750,
		prices: {
			[env.PUBLIC_STRIPE_PRICE_ID_MEDIUM_PACK]: {
				currencies: {
					usd: {
						amount: 10
					},
					eur: {
						amount: 10
					}
				}
			}
		}
	},
	[env.PUBLIC_STRIPE_PRODUCT_ID_LARGE_PACK]: {
		product_id: env.PUBLIC_STRIPE_PRODUCT_ID_LARGE_PACK,
		images: 5250,
		prices: {
			[env.PUBLIC_STRIPE_PRICE_ID_LARGE_PACK]: {
				currencies: {
					usd: {
						amount: 25
					},
					eur: {
						amount: 25
					}
				}
			}
		}
	},
	[env.PUBLIC_STRIPE_PRODUCT_ID_MEGA_PACK]: {
		product_id: env.PUBLIC_STRIPE_PRODUCT_ID_MEGA_PACK,
		images: 10500,
		prices: {
			[env.PUBLIC_STRIPE_PRICE_ID_MEGA_PACK]: {
				currencies: {
					usd: {
						amount: 50
					},
					eur: {
						amount: 50
					}
				}
			}
		}
	}
} as const;

export const getProductIdFromPriceId = (priceId: string) => {
	const productId = Object.keys(STRIPE_PRODUCT_ID_OBJECTS_SUBSCRIPTIONS).find(
		(productId) =>
			Object.keys(STRIPE_PRODUCT_ID_OBJECTS_SUBSCRIPTIONS[productId].prices.monthly).includes(
				priceId
			) ||
			Object.keys(STRIPE_PRODUCT_ID_OBJECTS_SUBSCRIPTIONS[productId].prices.yearly).includes(
				priceId
			)
	);
	if (productId) {
		return productId;
	}
	return Object.keys(STRIPE_PRODUCT_ID_OBJECTS_CREDIT_PACKS).find((productId) =>
		Object.keys(STRIPE_PRODUCT_ID_OBJECTS_CREDIT_PACKS[productId].prices).includes(priceId)
	);
};
