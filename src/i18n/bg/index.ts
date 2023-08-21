import type { Translation } from '../i18n-types';

const bg: Translation = {
	Language: 'Език',
	Landing: {
		Hero: { Title: 'Create amazing art in seconds with AI.' },
		Describe: {
			Title: 'Describe anything.',
			Paragraph:
				'Anything you like, in thousands of different styles. It’ll be generated by AI in seconds.',
			Prompt: 'majestic cat, psychedelic, violet tones, fantasy landscape'
		},
		InitImage: {
			Title: 'Or start with an image.',
			Paragraph: 'Give an input image, generate new art based on it.',
			Prompt: 'robot alien'
		},
		StartCreating: {
			Title: 'Start creating now!',
			Paragraph:
				'It’s free to try :) Give it a go, we think you’ll like it. Thousands of our users do.'
		},
		TryItNowButton: 'Try It Now',
		StartCreatingButton: 'Start Creating',
		GetStartedButton: 'Get Started'
	},
	Home: {
		GenerateButton: 'Създай',
		PromptInput: { Title: 'Prompt', Placeholder: 'Портрет на котка от Ван Гог' },
		WidthTabBar: {
			Title: 'Ширина',
			Paragraph: 'Ширина на изображението.'
		},
		HeightTabBar: {
			Title: 'Височина',
			Paragraph: 'Височина на изображението.'
		},
		InferenceStepsTabBar: {
			Title: 'Стъпки',
			Paragraph: 'Броя на стъпките за създаване (дифузия) на изображението.'
		},
		GuidanceScaleSlider: {
			Title: 'Насока',
			Paragraph:
				'Колко близко да се следват напътствията. По-високи стойности водят до по-буквално тълкуване.'
		},
		AspectRatioDropdown: {
			Title: 'Съотношение',
			Paragraph: 'Съотношението между размерите на изображението.',
			Options: {
				Square: 'Квадрат (1:1)',
				Portrait: 'Портрет (2:3)',
				Landscape: 'Пейзаж (3:2)',
				Mobile: 'Телефон (9:16)',
				Desktop: 'Настолен (16:9)',
				Anamorphic: 'Anamorphic (2.4:1)',
				Squarish: 'Правоъгълник (4:5)'
			}
		},
		AspectRatioTabBar: {
			Title: 'Съотношение',
			Paragraph: 'Съотношението между размерите на изображението.'
		},
		InitialImageTabBar: {
			Title: 'Първоначално изображение',
			Paragraph: 'Резултатът ще бъде базиран на това изображение.'
		},
		InitialImageStrengthTabBar: {
			TitleAlt: 'Image Strength',
			Title: 'Сила на въздействие',
			Paragraph:
				'Въздействието на първоначалното изображение. По-високи стойности оказват по-силно влияние на крайния резултат.'
		},
		NegativePromptInput: {
			Title: 'Отрицателни напътствия',
			Placeholder: 'Вето',
			PlaceholderAlt: 'Какво да се избегне',
			Paragraph: 'Премахва нежелани елементи при изработване. Напътствия които да се избягват.'
		},
		ImageInput: {
			Paragraph: 'Click or drop your image here',
			Title: 'Качи изображение'
		},
		SeedInput: {
			Title: 'Семе (Сийд)',
			Placeholder: 'Семе',
			Paragraph:
				'За повтарящи се резултати. Ключ, заедно с еднакви напътствия и настройки, ще създаде еднакви резултати.'
		},
		ModelDropdown: {
			Title: 'Модел',
			Paragraph: 'Моделът изкуствен интелект, който ще бъде използван за създаване на изображения.'
		},
		NumOutputsSlider: {
			Title: 'Брой изображения',
			Paragraph: 'Броят изображения за създаване наведнъж.'
		},
		ShowOnProfileToggle: {
			Title: 'Show on Profile',
			Paragraph: 'Whether to show the generated images on your profile.'
		},
		SchedulerDropdown: {
			Title: 'Аналитик',
			Paragraph:
				'Обезшумява изображението по определен начин. Може драстично да промени резултата. Различни аналитици изискват по-малко или повече стъпки за постигане на добри резултати.'
		},
		SubmitToGalleryQuestion: {
			Title: 'Качи изработките в галерията?',
			Paragraph: 'Можете по-късно да промените настройките си.'
		}
	},
	Generate: {
		ShowSettingsButton: 'Show Settings',
		HideSettingsButton: 'Hide Settings',
		Grid: {
			NotSignedIn: { Paragraph: 'Sign in to see your generations.' },
			NoGeneration: {
				Paragraph: 'Your generations will appear here.'
			}
		}
	},
	History: {
		GenerationsTitle: 'Изработки',
		GenerationsMaxSavedCountWarning: 'Само последните {count}',
		DownloadLegacyGenerationsButton: 'Изтегли неподдържани изработки',
		NoFavoritesYet: 'Все още нямате любими изображения.',
		Views: {
			AllTitle: 'Всички',
			FavoritesTitle: 'Любими'
		},
		NoGenerationsYet: 'Все още не сте създали никакви изображения.'
	},
	Live: {
		GenerationsTitle: 'Изработки',
		TotalDurationTitle: 'Общо време',
		UpscalesTitle: 'Уголемявания',
		VoiceoversTitle: 'Voiceovers',
		GenerationTooltip: {
			AspectRatioTitle: 'Съотношение',
			CountryTitle: 'Държава',
			Type: {
				Title: 'Тип',
				Generation: 'Изработка',
				Upscale: 'Уголемяване',
				Voiceover: 'Voiceover'
			},
			DimensionsTitle: 'Размери',
			StepsTitle: 'Стъпки',
			ScaleTitle: 'Насока',
			DurationTitle: 'Време',
			Status: {
				Title: 'Състояние',
				Started: 'Започнато',
				Succeeded: 'Успех',
				Failed: 'Провал'
			},
			Server: {
				Title: 'Сървър',
				Default: 'Основен',
				Custom: 'Избран'
			},
			UnknownTitle: 'Непознат',
			OutputsTitle: 'Резултати'
		},
		WaitingTitle: 'Изчакват се изработки',
		DurationStatusUnknown: 'Непознат'
	},
	Navbar: {
		HomeTab: 'Начало',
		GenerateTab: 'Generate',
		HistoryTab: 'История',
		GalleryTab: 'Галерия',
		AdminGalleryTab: 'Admin Gallery',
		PricingTab: 'Pricing',
		AccountTab: 'Account',
		VoiceoverTab: 'Voiceover',
		LiveTab: 'На живо'
	},
	Settings: {
		Title: 'Настройки',
		SwitchServerButton: 'Промени сървъра',
		SubmitToGalleryToggle: 'Качи в галерията',
		AdvancedModeToggle: 'Разширен режим',
		AdvancedOptionsDropdown: 'Разширени настройки',
		AdvancedDropdown: 'За напреднали',
		GenerationSettingsButton: 'Използвани настройки',
		GenerationSettingsTitle: 'Използвани настройки',
		DarkModeToggle: 'Тъмна тема'
	},
	GenerationFullscreen: {
		DownloadButton: 'Изтегли',
		DoneButtonState: 'Готово!',
		CopyPromptButton: 'Копирай заданието',
		CopyNegativePromptButton: 'Копирай отрицателното задание',
		CopiedButtonState: 'Копирано!',
		GenerateSimilarButton: 'Създай подобни',
		ExploreSimilarButton: 'Explore Similar',
		ExploreStyleButton: 'Explore Style',
		RerollButton: 'Превърти',
		RegenerateButton: 'Пресъздай',
		GenerateButton: 'Създай',
		UpscaleButton: 'Уголеми',
		SimilarTitle: 'Similar',
		ShowOnProfileButton: 'Show on Profile',
		SubmitToGalleryButton: 'Качи в галерията',
		SubmittedTitle: 'Качено',
		UpscaleTabBar: {
			UpscaledTitle: 'Уголемено',
			OriginalTitle: 'Оригинал'
		},
		Dimensions: {
			Title: 'Размери'
		},
		Duration: {
			Title: 'Време'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Задай сървър',
		SwitchServerTitle: 'Промяна на сървъра',
		Paragraph: 'Сървър за създаване на изображенията.',
		SetButton: 'Задай',
		DefaultButton: 'Основен'
	},
	Blog: {
		Title: 'Публикации',
		TitleAlt: 'Блог',
		ThanksForReading: 'Thanks for reading!',
		BackToBlogButton: 'Обратно към блога'
	},
	Redirect: {
		RedirectingToTitle: 'Пренасочване към {name}'
	},
	Shared: {
		StartGeneratingTitle: 'Започни да създаваш прекрасни картини!',
		StartGeneratingButton: 'Започни',
		JoinUsTitle: 'Присъедини се',
		GoHomeButton: 'Начало',
		SwitchToDefaultServerButton: 'Смени на основния съръвър',
		JoinOnDiscord: 'Елате в нашия Discord',
		JoinUsOnTitle: 'Елате на нашият {name}',
		ShareButton: 'Сподели',
		ShareOnButton: 'Споделяне по {name}',
		GoBackButton: 'Назад',
		YesButton: 'Да',
		NoButton: 'Не',
		EnableButton: 'Включи',
		DoneButton: 'Done',
		CancelButton: 'Cancel',
		ClearAllButton: 'Изчисти всички',
		DisableButton: 'Изключи',
		DownloadButton: 'Download',
		AddButton: 'Добави',
		CopyLinkButton: 'Копирай линк',
		CopiedButton: 'Copied!',
		CopyButton: 'Копирай',
		DeleteButton: 'Изтрий',
		LoadingTitle: 'Зареждане',
		ContinueButton: 'Продължи',
		ProfileButton: 'Profile',
		VisitProfileButton: 'Visit Profile',
		YourProfileButton: 'Your Profile',
		LoadingParagraph: 'Зареждане...',
		InsufficientCreditsTitle: 'Липса на кредит ({remainingCredits}/{neededCredits})',
		AllTitle: 'Всички',
		ConfirmButton: 'Потвърди',
		SimilarToTitle: 'Similar to: {item}',
		ResourcesTitle: 'Resources',
		ResourcesButton: 'Resources',
		On: 'On',
		Off: 'Off',
		BetaTitle: 'Beta',
		ConfirmQuestionMarkButton: 'Потвърди?',
		Credits: {
			CreditsTable: {
				CreditTypeTitle: 'Тип кредит',
				RemainingCreditsTitle: 'Остават',
				ExpiryTitle: 'Изтича',
				LastReplenish: 'Последно възобновяване'
			}
		},
		BatchEditBar: {
			PauseEditingButton: 'Готово',
			DeselectButton: 'Изчисти ({selectedCount})',
			DeleteButton: 'Изтрий ({selectedCount})',
			FavoriteButton: 'Харесай ({selectedCount})',
			ApproveButton: 'Одобри ({selectedCount})',
			RejectButton: 'Отхвърли ({selectedCount})',
			UnfavoriteButton: 'Премахни ({selectedCount}) харесан(и)',
			ConfirmationModal: {
				CancelButton: 'Отмяна',
				Deselect: {
					Title: 'Изчисти {selectedCount} избор(а)?',
					Paragraph: 'Сигурни ли сте, че искате да изчистите {selectedCount} избор(а)?',
					ConfirmButton: 'Изчисти'
				},
				Delete: {
					Title: 'Изтрий {selectedCount} избор(а)?',
					Paragraph: 'Сигурни ли сте, че искате да изчистите {selectedCount} избор(а)?',
					ConfirmButton: 'Изтрий'
				},
				Favorite: {
					Title: 'Харесай {selectedCount} избор(а)?',
					Paragraph: 'Сигурни ли сте, че искате да харесате {selectedCount} избор(а)?',
					ConfirmButton: 'Харесай'
				},
				Unfavorite: {
					Title: 'Премахни {selectedCount} харесан(и)?',
					Paragraph: 'Сигурни ли сте, че искате да премахнете {selectedCount} харесан(и)?',
					ConfirmButton: 'Премахни'
				}
			}
		},
		ServerUrlInput: {
			Placeholder: 'Сървърен адрес (URL)'
		},
		EmailInput: {
			Placeholder: 'Имейл'
		},
		PasswordInput: {
			Placeholder: 'Парола'
		},
		ProFeatures: {
			SubscribeTitle: 'Subscribe!',
			ChangeVisibilityFeatureParagraph:
				'Changing the visibility of this generation requires a subscription.'
		},
		ModelTags: {
			GoodAtTitle: 'Good at',
			Tags: {
				General: 'General',
				Realism: 'Realism',
				Anime: 'Anime',
				Render: 'Render',
				Drawing: 'Drawing',
				ThreeDArt: '3D',
				Abstract: 'Abstract'
			}
		},
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				realName: 'Stable Diffusion 1.5'
			},
			'8acfe4c8-751d-4aa6-8c3c-844e3ef478e0': {
				realName: 'Openjourney'
			},
			'36d9d835-646f-4fc7-b9fe-98654464bf8e': {
				realName: 'Arcane Diffusion'
			},
			'48a7031d-43b6-4a23-9f8c-8020eb6862e4': {
				realName: 'Ghibli Diffusion'
			},
			'790c80e1-65b1-4556-9332-196344389572': {
				realName: 'Mo-Di Diffusion'
			},
			'eaa438e1-dbf9-48fd-be71-206f0f257617': {
				realName: 'Redshift Diffusion'
			},
			'f7f3d973-ac6f-4a7a-9db8-e89e4fba03a9': {
				realName: 'Waifu Diffusion'
			},
			'fc06f6ab-ed14-4186-a7c0-aaec288d4f38': {
				realName: '22h Diffusion'
			},
			'b6c1372f-31a7-457c-907c-d292a6ffef97': {
				realName: 'Luna Diffusion'
			},
			'22b0857d-7edc-4d00-9cd9-45aa509db093': {
				realName: 'Kandinsky'
			},
			'9fa49c00-109d-430f-9ddd-449f02e2c71a': { realName: 'Kandinsky 2.2' },
			'8002bc51-7260-468f-8840-cf1e6dbe3f8a': { realName: 'SDXL' },
			'3fb1f6d9-c0d3-4ae4-adf4-77f8da78a6f7': { realName: 'Waifu Diffusion XL' },
			'a3636543-91cc-4290-b1a4-9d506457b9be': {
				realName: 'Freedom'
			}
		},
		SchedulerOptions: {
			'55027f8b-f046-4e71-bc51-53d5448661e0': {
				realName: 'LMS'
			},
			'6fb13b76-9900-4fa4-abf8-8f843e034a7f': {
				realName: 'Euler'
			},
			'af2679a4-dbbb-4950-8c06-c3bb15416ef6': {
				realName: 'Euler A.'
			},
			'9d175114-9a26-4371-861c-729ba9ecb4da': {
				realName: 'DPM Многостъпков'
			},
			'7e98751f-e135-4206-b855-48b141e7b98f': {
				realName: 'DPM Едностъпков'
			},
			'82cf78dd-6afb-48cc-aca6-14224cca6950': {
				realName: 'DDIM'
			},
			'01e94c28-501d-4c6d-8f00-079f3230bf58': { realName: 'UniPC' },
			'cc1b8dbf-0aec-4e52-8110-8082506fb7ba': { realName: 'DDPM' },
			'b7224e56-1440-43b9-ac86-66d66f9e8c91': {
				realName: 'P Sampler'
			}
		},
		UnknownTitle: 'Непознат',
		AdvancedSettingsButton: 'Разширени настройки',
		MoreOptionsTitle: 'Още опции',
		LessOptionsTitle: 'По-малко опции',
		TryAgainButton: 'Опитайте отново',
		RefreshButton: 'Опресни',
		LoadMoreButton: 'Зареди повече',
		BackToProfile: 'Back to Profile',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Търсене',
		NoResultsFoundTitle: 'Не бяха открити резултати'
	},
	Error: {
		SomethingWentWrong: 'Нещо се обърка :(',
		PromptWasNSFW: 'This prompt might produce sensitive content :(',
		ImageWasNSFW: 'Неподходящо изображение :(',
		NSFW: 'Съдържа неподходящи елементи, опитайте отново :(',
		ServerSeemsOffline:
			'Сървърът не е на линия. Опреснете странницата или изберете друг сървър от настройките.',
		ServerSetNotWorking: 'Сървърът е несъвместим или не отговаря.',
		NotFound: 'Не намерен',
		SupabaseNotFoundCantListen:
			'Инстанцията "Supabase" не бе намерена. Невъзножно е слушането за изработки.',
		InvalidEmail: 'Въведете валиден имейл.',
		PasswordTooShort: 'Паролата трябва да е поне 8 символа.',
		SomethingWentWrongTryAgain: 'Нещо се обърка, опитайте отново.',
		InvalidCredentials: 'Невалидни данни.',
		InvalidCode: 'Грешен код.',
		TryAnotherImage: 'Опитайте различно изображение :(',
		OnceEvery60Seconds: 'Може да поискате линк само на всеки 60 секунди.',
		LinkExpired: {
			Title: 'Линкът ви изтече',
			Paragraph: 'Този еднократен линк изтича след 24 часа.'
		},
		UpdateAvailable: {
			Title: 'Налично е обновление',
			Paragraph: 'Обновление! Опреснете странницата.'
		},
		EmailProviderNotAllowed: 'Този имейл доставчик е забранен.',
		EmailNotAllowed: "This email isn't allowed.",
		EmailAlreadyInUse: 'Имейлът вече се използва.'
	},
	UpcomingCredits: {
		MorePaidPlanCreditsTooltip: {
			Title: 'More on the way!',
			Paragraph: 'Your credits will refresh:'
		},
		MoreFreeCreditsTooltip: {
			Title: 'More on the way!',
			Paragraph: "You'll receive more free credits:"
		}
	},
	Admin: {
		AdminPanelTitle: 'Администратор',
		DeleteButton: 'Изтрий',
		ApproveButton: 'Одобри',
		RejectButton: 'Отхвърли',
		EditButton: 'Промени',
		EditViewButton: 'Изглед',
		NormalViewButton: 'Нормален изглед',
		StopEditButton: 'Прекрати редактирането',
		NoGenerationsToReview: 'Няма изработки за преглеждане.',
		ServersButton: 'Сървъри',
		AdminGalleryButton: 'Галерия',
		UsersButton: 'Потребители',
		AdminTab: 'Администратор',
		ServersTab: 'Сървъри',
		AdminGalleryTab: 'Галерия',
		UsersTab: 'Потребители',
		Users: {
			ConfirmAction: {
				ConfirmActionReferenceText: 'I confirm the action',
				ConfirmActionParagraph: 'Type "{confirmActionText}" to confirm.',
				ConfirmActionInput: { Placeholder: 'Confirm' }
			},
			DataDeletedAtTitle: 'Data Deleted',
			WillBeDeletedTitle: 'Will Be Deleted',
			BannedAtTitle: 'Banned',
			BannedTitle: 'Banned',
			UnbanUserButton: 'Unban User',
			BanDomainButton: 'Ban Domain',
			UnbanDomainButton: 'Unban Domain',
			BanUserButton: 'Ban User',
			GiftCreditsButton: 'Дари кредити'
		},
		Gallery: {
			TotalTitle: 'Общо',
			ApprovedTitle: 'Одобрени',
			DeletedTitle: 'Изтрити',
			StatusDropdown: {
				All: 'Всички',
				ManuallySubmitted: 'Ръчно качени',
				Submitted: 'Качени',
				Approved: 'Одобрени',
				Rejected: 'Отхвърлени',
				Deleted: 'Изтрити',
				Private: 'Частни'
			},
			NoGenerationsToReview: 'Няма изработки за преглеждане'
		}
	},
	SignUp: {
		PageTitle: 'Регистрация',
		PageParagraph:
			'Присъдедини се към "Stablecog" и стани платен потребител за да отключиш пълния му потенциал.',
		PageTitleConfirm: 'Потвърди',
		PageTitleConfirmAlt: 'Проверете си имейла',
		PageParagraphConfirm: 'Изпратихме ви 6-цифрен код за потвърждения на акаунта ви.',
		SignUpButton: 'Регистрирай се',
		AllTitle: 'Всички',
		ConfirmButton: 'Потвърди',
		AlreadyHaveAnAccountTitle: 'Вече имате профил?',
		LoginInsteadButton: 'Вместо това Влизане',
		WantsEmailCheckbox: {
			Paragraph: 'Get product updates, deals or news.',
			NoSpamParagraph: 'No spam, we promise.'
		},
		SixDigitCodeInput: {
			Placeholder: '6-цифрен код'
		}
	},
	SignIn: {
		PageTitleGetStarted: 'Да започнем',
		GetStartedButton: 'Започнете',
		PageTitle: 'Вход',
		PageParagraph: 'Влезте в "Stablecog" и се възползвайте от всичките му възможности.',
		PageParagraphV2: 'Създайте уникални картини за секунди, напълно безплатно.',
		PageTitleCreateAccountOrSignIn: 'Създай профил или влез',
		PageParagraphCreateAccountOrSignIn:
			'Влезте в "Stablecog" и се възползвайте от всичките му възможности.',
		PageTitleSentLink: 'Проверете си имейла',
		PageParagraphSentLink:
			'Изпратихме ви връзка за влизане. Проверети папката спам, в случай че не я виждате.',
		ContinueButton: 'Продължи',
		ContinueWithProviderButton: 'Продължи през {provider}',
		SignInWithProviderButton: 'Влез през {provider}',
		OrContinueWithEmailTitle: 'Или продължете с имейл',
		DontHaveAnAccountTitle: 'Нямате профил?',
		SignUpInsteadButton: 'Вместо това Регистрация',
		SignInButton: 'Вход',
		EnterCodeManuallyButton: 'Enter code manually',
		SignOutButton: 'Излез'
	},
	ChangeUsername: {
		ChangeUsernameTitle: 'Change Username',
		ChangeUsernameButton: 'Change Username',
		UsernameInput: { Title: 'Username' },
		Error: {
			MinimumCharacters: 'Must be at least {count} characters.',
			MaximumCharacters: 'Must be at most {count} characters.',
			InvalidCharacters: 'Can only contain letters, numbers, and dashes.',
			NotAvailable: "This username isn't available."
		}
	},
	Pro: {
		PageTitle: 'Станете платен потребител',
		PageParagraph:
			'Отключете всички възможности и помогнете на проекта. Без дарители, не би било възможно да останем отворен-код и да предоставяме безплатни услуги на всеки.',
		PageTitleAlreadyPro: 'Вече сте платили!',
		PageParagraphAlreadyPro:
			'Вече сте платен потребител. Благодарим ви, че подпомагате на проекта! Забавлявайте се, а може би споделете и с приятели.',
		ProPlanTitle: 'Платен',
		Features: {
			FullSpeed: 'Пълна скорост, без граници',
			ImageDimensions: 'Различни размери',
			Upscale: 'Уголеми изображения',
			Steps: 'Различен брой стъпки',
			MoreModels: 'Повече модели',
			MoreSchedulers: 'Повече аналитици',
			SavedToCloud: 'Автоматично запазване в облака',
			Upcoming: 'Предстоящи обновления',
			CommercialUse: 'Търговски приложения'
		},
		Soon: '(скоро)',
		Month: '/месец',
		BecomeProButton: 'Стани платен потребител',
		Success: {
			PageTitle: 'Вече сте платен потребител!',
			PageParagraph:
				'Вече имате достъп до всички възможности на "Stablecog". Ако имате въпроси, свържете се с нас през {platform}.'
		},
		Cancel: {
			PageTitle: 'Отказахте покупката',
			PageParagraph: 'Успешно прекратихте планът. Ако е било грешка, опитайте отново.'
		},
		Reason: {
			ParagraphWidth: 'Тази ширина е недостъпна на безплатен план.',
			ParagraphHeight: 'Тази височина е недостъпна на безплатен план.',
			ParagraphDimensions: 'Тези размери са недостъпни на безплатен план.',
			ParagraphUpscale: 'Уголемяването е недостъпно на безплатен план.',
			ParagraphInferenceSteps: 'Този брой стъпки е недостъпен на безплатен план.',
			ParagraphModel: 'Този модел е недостъпен на безплатен план.',
			ParagraphScheduler: 'Този аналитик е недостъпен на безплатен план.',
			ParagraphWidthGeneration:
				'Тази изработка бе създадена от друга, със ширина, недостъпна на безплатен план.',
			ParagraphHeightGeneration:
				'Тази изработка бе създадена от друга, с височина, недостъпна на безплатен план.',
			ParagraphDimensionsGeneration:
				'Тази изработка бе създадена от друга, с размери, недостъпни на безплатен план.',
			ParagraphInferenceStepsGeneration:
				'Тази изработка бе създадена от друга, с брой стъпки, недостъпни на безплатен план.',
			ParagraphModelGeneration:
				'Тази изработка бе създадена от друга, с модел, недостъпен на безплатен план.',
			ParagraphSchedulerGeneration:
				'Тази изработка бе създадена от друга, с аналитик, недостъпен на безплатен план.'
		},
		Tier: {
			Title: {
				Free: 'Безплатен',
				Pro: 'Платен'
			},
			Badge: {
				Free: 'БЕЗПЛАТЕН',
				Pro: 'ПЛАТЕН'
			}
		}
	},
	Account: {
		PageTitle: 'Профил',
		ManageSubscriptionButton: 'Управление на абонамента',
		ComparePlansButton: 'Сравнете планове',
		ManageAccountButton: 'Управление на профила',
		AccountButton: 'Account',
		MyAccountButton: 'Моят профил',
		SubscriptionPlanTitle: 'План',
		RemainingImagesTitle: 'Оставащи изработки',
		RemainingCreditsTitle: 'Оставащ кредит',
		RemainingTitle: 'Кредит',
		Subscription: {
			UpdateSubscriptionTitle: 'Актуализирай абонамента',
			ChangePlanTitle: 'Промяна на плана',
			CurrentPlanTitle: 'Текущ план',
			NewPlanTitle: 'Нов план',
			Downgrade: {
				DowngradingToTitle: 'Понижава се на',
				Explanation: 'Оставащият кредит ще се запази.'
			},
			Upgrade: {
				UpgadingToTitle: 'Повишава се на',
				Explanation: 'Оставащият кредит ще се запази.'
			},
			Failed: {
				PageTitle: 'Неуспешна промяна',
				PageParagraph: 'Нещо се обърка при промяната. Моля опитайте отново.'
			},
			Succeeded: {
				PageTitle: 'Успех',
				PageParagraph: 'Успешно сменихте плана.'
			}
		},
		Tabs: { Account: 'Account', Usage: 'Usage', APIKeys: 'API Keys' },
		Meta: {
			AccountCreationTitle: 'Създай',
			LastSignInTitle: 'Последно влизане',
			LastSeenTitle: 'Последна активност'
		},
		ChangeEmail: {
			PageTitle: 'Промяна на имейл',
			PageParagraph: 'Въведете нов имейл адрес.',
			ChangeEmailButton: 'Промяна на имейл',
			NewEmailInput: {
				Placeholder: 'Нов имейл'
			},
			PageTitleSentLink: 'Проверете си имейла',
			PageParagraphSentLink:
				'Изпратихме връзки до двата адреса. Потвърдете и на двата за успешна промяна.',
			PageTitleConfirmOtherEmail: 'Потвърдете друг имейл',
			PageParagraphConfirmOtherEmail:
				'Изпратили сме също и връзка на другия ви адрес. Потвърдете и него за да завършите.'
		},
		Usage: {
			PageTitle: 'Usage',
			PageParagraph: 'You can see your recent usage below.',
			RecentUsageTitle: 'Recent Usage',
			UsageTable: {
				ID: 'ID',
				Type: 'Type',
				Duration: 'Duration',
				Source: 'Source',
				RunTime: 'Run Time',
				Cost: 'Cost',
				Operation: 'Operation',
				Process: 'Process',
				Platform: 'Platform'
			},
			UsageType: {
				Voiceover: 'Voiceover',
				Generate: 'Generate',
				Generation: 'Generation',
				Upscale: 'Upscale'
			},
			SourceType: {
				Web: 'Web',
				WebApp: 'Web App',
				DiscordBot: 'Discord Bot',
				API: 'API'
			},
			NoUsageYet: "You don't have any usage yet."
		},
		APIKeys: {
			PageTitle: 'API Keys',
			PageParagraph:
				'Your secret API keys are listed below. They are only shown once when you first generate them. Make sure to save them somewhere safe.',
			NoKeysYet: "You don't have any API keys yet.",
			CreateAPIKeyButton: 'Create API Key',
			CreateNewKeyButton: 'Create New Key',
			DeleteKeyButton: 'Delete Key',
			KeyTable: {
				NameTitle: 'Name',
				KeyTitle: 'Key',
				CreatedAtTitle: 'Created',
				UsageTitle: 'Usage',
				LastUsedTitle: 'Last Used',
				LastUsedNeverDescription: 'Never'
			},
			KeyModal: {
				Create: {
					Title: 'Create New Key',
					Paragraph:
						'You can optionally give this key a name. This name can be used for identifying the key.',
					Input: {
						Title: 'Name',
						TitleAlt: 'Name (optional)'
					},
					CreateKeyButton: 'Create Key'
				},
				Created: {
					Title: 'New Key',
					Paragraph:
						"Please save this secret key somewhere safe. For security reasons, you won't be able to view it again.",
					Input: {
						Title: 'Secret Key'
					}
				},
				Delete: {
					Title: 'Revoke Key',
					Paragraph:
						"This key will disabled immediately. Requests made using this key will be rejected. Once revoked, you won't be able to view this key again.",
					RevokeKeyButton: 'Revoke Key'
				}
			}
		}
	},
	ForgotPassword: {
		PageTitle: 'Нулиране на парола',
		PageParagraph: 'Изпратихме ви 6-цифрен код на вашия имейл адрес за възобновяване на паролата.',
		SendResetCodeButton: 'Изпрати код',
		PageTitleConfirmCode: 'Потвърждаване',
		PageTitleConfirmCodeAlt: 'Проверете имейла си',
		PageParagraphConfirmCode: 'Изпратихме ви 6-цифрен код. Впишете го за да продължите.',
		ConfirmCodeButton: 'Потвърди',
		PageTitleNewPassword: 'Нова парола',
		PageParagraphNewPassword: 'Въведете нова парола.',
		NewPasswordInput: {
			Placeholder: 'Нова парола'
		},
		SetNewPasswordButton: 'Задайте нова парола',
		PageTitleSuccess: 'Готово!',
		PageParagraphSuccess: 'Парлоата ви бе успешно сменена.',
		ForgotPasswordButton: 'Забравена парола?'
	},
	FeaturedOn: {
		PageTitle: 'Представени сме на'
	},
	Gallery: {
		PageTitle: 'Галерия',
		PageParagraph: 'Вижте какво създават други със "Stablecog".',
		SearchInput: {
			Title: 'Потърси'
		},
		BackToProfile: 'Back to Profile',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Търсене',
		NoMatchingGenerationTitle: 'Няма съответствия'
	},
	Pricing: {
		PlansTitle: 'Планове',
		PlansParagraph: 'Изберете правилния план за вас.',
		CreditPacksTitle: 'Кредит пакети',
		CreditPacksParagraph: 'Нужда от повече? Може да купите кредит по всяко време.',
		SubscribeButton: 'Абонирай се',
		SubscribedButton: 'Абониран',
		UpgradeButton: 'Повиши',
		DowngradeButton: 'Понижи',
		PurchaseButton: 'Купи',
		BuyCreditsButton: 'Купи кредит',
		MonthlyTitle: 'Месечно',
		YearlyTitle: 'Годишно',
		SlashMonth: '/месец',
		Plans: {
			FreeTitle: 'Безплатен',
			StarterTitle: 'Начален',
			ProTitle: 'Платен',
			UltimateTitle: 'Професионален'
		},
		CreditPacks: {
			MediumTitle: 'Среден пакет',
			LargeTitle: 'Голям пакет',
			MegaTitle: 'Огромен пакет'
		},
		Features: {
			MonthlyCredits: '{count} кредит на месец.',
			MonthlyImages: '{count} изображения на месец.',
			MonthlyGenerations: '{count} изработки на месец.',
			ParallelGenerations: '{count} parallel generations.',
			Images: '{count} изображения.',
			Generations: '{count} изработки.',
			NeverExpires: 'Постоянен.',
			CommercialUse: 'Търговски приложими.',
			ImagesArePublic: 'Изображенията са публични.',
			ImagesArePrivate: 'Изображенията са частни.'
		},
		Badges: {
			Recommended: 'Препоръчано',
			MostPopular: 'Най-популярен',
			BestValue: 'Най-стойностно'
		},
		Purchase: {
			Succeeded: {
				PageTitle: 'Всичко е готово!',
				PageParagraph:
					'Благодарим ви за покупката. Ако имате въпроси, не се притеснявайте да ни потърсите на {platform}.'
			},
			Cancelled: {
				PageTitle: 'Покупката е отменена',
				PageParagraph: 'Успешно прекратихте покупката. Ако е било грешка, опитайте отново.'
			}
		}
	},
	FAQ: {
		Title: 'FAQ',
		TitleAlt: 'Frequently Asked Questions',
		Questions: {
			CommercialUse: {
				Question: 'Can I use the images commercially?',
				Answer:
					'If you create an image while you are subscribed to a plan (Starter, Pro or Ultimate), you can use that image commercially even if you cancel your plan afterwards at some point. If you are on the free plan, the images you create are for personal use only.'
			},
			MoreCredits: {
				Question: 'Can I buy more credits?',
				Answer:
					'Yes, you can buy more credits anytime as long as you have an active subscription. You can visit the account or the pricing page to buy more credits.'
			},
			CreditRollOver: {
				Question: 'Do credits roll over to the next month?',
				Answer:
					'No, credits do not roll over to the next month. Your credits will reset every month on your billing date.'
			},
			PlanUpgradeOrDowngrade: {
				Question: 'Can I upgrade or downgrade my plan?',
				Answer:
					"Yes, you can upgrade or downgrade your plan anytime. If you upgrade your plan, you'll keep the remaining credits from your previous plan too until they expire. The upgraded plan will be charged immediately, and fully."
			},
			PlanCancellation: {
				Question: 'Can I cancel my plan anytime?',
				Answer:
					'Yes, you can cancel your plan anytime and billing will stop at the end of that billing cycle. You will also keep your credits until the billing cycle ends.'
			},
			MoreQuestions: {
				Question: 'Where can I ask more questions?',
				Answer:
					'You can join our {Discord} to ask us anything. We are happy to help. You can also reach out via {Twitter} or {email}.',
				Parts: {
					Discord: 'Discord community',
					Email: 'email',
					Twitter: 'Twitter'
				}
			}
		}
	},
	LowOnCreditsCard: {
		Title: 'Вашият кредит привършва ({remainingCredits})',
		FreeParagraph:
			'Всеки ден даваме безплатен кредит на активни потребители. Може да закупите чрез платен план, или чрез участие в наши събития.',
		HighestPlanParagraph: 'Може да закупите кредит пакет.',
		OtherPlansParagraph: 'Повишете вашия план или закупете кредит пакет.'
	},
	Contact: {
		PageTitle: 'Contact',
		PageParagraph:
			"If you have any inquiries or a questions, don't hesitate to reach out to us using the links below. We'll answer as soon as possible."
	},
	Support: {
		PageTitle: 'Поддръжка',
		PageParagraph:
			'В случай на въпроси, свържете се чрез връзките по-долу и ще ви отговорим възможно най-скоро.'
	},

	Guide: {
		PageTitle: 'Ръководство',
		GuideButton: 'Упътване',
		PreviousTitle: 'Назад',
		EndpointsTitle: 'Endpoints',
		EndpointTitle: 'Endpoint',
		NextTitle: 'Напред',
		ChaptersTitle: 'Съдържание',
		ChapterTitle: 'Глава'
	},
	Try: { PageTitle: 'Try' },
	Legal: {
		PageTitle: 'Legal',
		PageParagraph: 'Our terms and policies are listed below.',
		TermsOfServiceTitle: 'Условия на ползване',
		PrivacyPolicyTitle: 'Поверителност',
		RefundPolicyTitle: 'Връщане на плащания',
		ContentPolicyTitle: 'Съдържателни норми'
	},
	Documentation: {
		PageTitle: 'Documentation',
		PageTitleAlt: 'API Reference',
		APIReferenceButton: 'API Reference',
		DocumentationButton: 'Documentation',
		ForDevelopersTitle: 'For Developers'
	},
	Scl: {
		Discord: 'Discord',
		Email: 'Email',
		Twitter: 'Twitter',
		Instagram: 'Instagram',
		YouTube: 'YouTube',
		LinkedIn: 'LinkedIn',
		Reddit: 'Reddit',
		GitHub: 'GitHub',
		Telegram: 'Telegram',
		Facebook: 'Facebook',
		ProductHunt: 'Product Hunt'
	},
	Voiceover: {
		ModelOptions: { '0f442a3e-cf53-490b-b4a9-b0dda63e9523': { Name: 'Bark' } },
		SpeakerOptions: {
			'82bc1e69-2aa3-4317-9bc9-d9ed2afad0ff': {
				Name: 'Paul'
			},
			'39f7fc5d-9031-4932-a4d5-b196bb06e203': {
				Name: 'Jony'
			},
			'0140c5dc-af12-4643-bfec-650d3cd03c56': { Name: 'Bryan' },
			'4a19f17c-eedc-4cf8-a45d-1f9d69547125': { Name: 'Rachel' },
			'2e4e9572-2ea6-48a3-b134-381c68c9d516': { Name: 'Ella' },
			'2364bfb5-cdce-4a30-b979-a12f9f49cd39': { Name: 'Alice' },
			'91bf1331-a234-4478-a2a5-4dba4ac647fc': { Name: 'Olivia' },
			'3aebf12b-a7b8-41cf-9411-5808a231138e': { Name: 'Daniel' },
			'b8e5e45b-4fe3-4a0f-9fa6-5893c67287c0': { Name: 'Thomas' },
			'aad61bf9-0710-40f6-8050-8c412852f717': { Name: 'Henry' },
			'37c069ec-f124-4be8-9d4c-e74157738877': { Name: 'Liam' },
			'38f9bd69-fa4c-4e53-b398-9a0f5865e927': { Name: 'Dan' },
			'5bd0610f-f073-487e-a74c-2a89105ce282': { Name: 'Gamze' },
			'7c3f8e30-9957-4d5e-a70e-c8269ff5f550': { Name: 'Mert' },
			'0188871e-c4d1-4ad9-ab3d-ec958c443822': { Name: 'Halit' },
			'4802af70-6d40-429d-8b9d-8df591e30743': { Name: 'Leyla' },
			'e10d4dac-7c39-4e96-9622-6d4e46fc384b': { Name: 'Murat' },
			'9354180b-9735-412c-947f-9d15af6edfe0': { Name: 'Mia' },
			'bcb7ac57-fd61-4630-82f0-ae3f836bb7c2': { Name: 'Eizo' },
			'b7542bad-e5fc-4c02-89ce-0ec22f6deceb': { Name: 'Ai' },
			'2cdb9e2c-42c1-49d0-959b-43d4bfc1828f': { Name: 'Shinya' },
			'37bb1326-d83e-425a-b21a-1a03ffea4d05': { Name: 'Emi' },
			'1eca6e55-53fb-4d70-995f-7e4da9266574': { Name: 'Emika' },
			'4f5c8c3e-0a17-4a68-8be7-1a126fda9a0f': { Name: 'Adriana' },
			'9206e75b-2b28-47f0-899e-76ab476e1c3f': { Name: 'Jorge' },
			'573c37c7-f741-4d36-80dc-f126131c6343': { Name: 'Carmen' },
			'b06d6333-1e35-45a6-b18b-3187d34cc387': { Name: 'Pedro' },
			'90ba9324-476b-48ae-b88e-aed1975a51fd': { Name: 'David' },
			'babbbc15-5040-4e97-a89f-8309b13d7785': { Name: 'Annika' },
			'cafafcaa-45bf-45e0-901c-8ca63575ad2a': { Name: 'Leonie' },
			'31d7c264-b674-422b-9b8f-13195c3289b6': { Name: 'Fritz' },
			'b349543b-c727-4934-9f4f-249aa2a6b184': { Name: 'Wilhelm' },
			'c4796108-0e8a-4a7a-9a8a-bb66ff21e215': { Name: 'Hans' },
			'83c0ee48-c8ef-4a4c-bca8-9dae843d25da': { Name: 'Boris' },
			'947786c1-810d-44ce-808f-cdcf732d97fd': { Name: 'Alisa' },
			'2885a060-badc-4896-a4fa-f3656a58bb82': { Name: 'Ivan' },
			'92929922-0608-4b62-8a0d-f9d87a4ca2f5': { Name: 'Oleg' },
			'cb8a2dc4-fce9-4f17-b977-050aa78d8101': { Name: 'Xin' },
			'5001a3c9-557c-4775-ad6f-b71c47c3b4f1': { Name: 'Ming' },
			'd45f479f-42e5-4f15-b1a0-c9feabcdb3aa': { Name: 'Hu' },
			'56714211-532c-479b-ac8f-f2449af2310a': { Name: 'Shuang' },
			'052b721a-da7e-4614-b352-826411c262e2': { Name: 'Wan' }
		},
		List: {
			NotSignedIn: { Paragraph: 'Sign in to see your voiceovers.' },
			NoVoiceovers: { Paragraph: 'Your voiceovers will appear here.' }
		},
		Generate: {
			SpeakerParagraph: '{speakerName} will be speaking in {languageName}.',
			VoiceoverParagraph: 'The voiceover will appear here.'
		},
		PromptBar: {
			GenerateButton: 'Generate',
			CreditCost: '{creditCost} credit(s)',
			PromptInput: {
				Placeholder: 'Technology is a bridge between imagination and reality.'
			}
		},
		Settings: {
			Speaker: {
				Title: 'Speaker',
				Paragraph: 'The speaker for the voiceover.'
			},
			Language: {
				Title: 'Language',
				Paragraph: 'The language for the voiceover.'
			},
			VoiceStability: {
				Title: 'Voice Stability',
				Paragraph:
					'The stability level of the voice. Higher values make the voice more stable, lower values make it more variable.',
				Slider: {
					MoreStable: 'More stable',
					MoreVariable: 'More variable'
				}
			},
			DenoiseAudio: {
				Title: 'Denoise',
				Paragraph: 'Remove background noise from the audio.'
			},
			RemoveSilence: {
				Title: 'Remove Silence',
				Paragraph: 'Remove silent parts from the audio.'
			}
		},
		PlayButton: 'Play',
		PauseButton: 'Pause',
		MuteButton: 'Mute',
		UnmuteButton: 'Unmute'
	},
	Connect: {
		PageTitle: 'Connect',
		PageParagraph:
			'Click the button below to connect your {platform} account to your Stablecog account.',
		PageSuccessTitle: 'Connected!',
		ConnectButton: 'Connect',
		ReturnBackToParagraph: 'You can return back to {platform} now.',
		NoPlatformTokenParagraph:
			"This link doesn't contain a {platform} token. Please request a new link.",
		NoPlatformIDParagraph: "This link doesn't contain a {platform} ID. Please request a new link.",
		NoPlatformUsernameParagraph:
			"This link doesn't contain a {platform} username. Please request a new link.",
		Platform: {
			Discord: 'Discord',
			Stablecog: 'Stablecog'
		},
		ConnectToTitle: 'Connect to {platform}',
		ConnectToParagraph:
			'Create an account or sign in to connect your {platform} account to your Stablecog account.',
		Error: {
			InvalidToken: 'The token is invalid. Please request a new link via {platform}.',
			AlreadyLinked: 'Your account already has a {platform} account associated with it.'
		}
	},
	ShareCard: {
		Title: 'Share',
		Message: 'Check out this generation on Stablecog!',
		MessageUsersOwn: 'Check out my generation on Stablecog!'
	},
	UnderDevelopment: {
		PageTitle: 'Скоро ще се върнем!',
		PageParagraph: 'Обновяваме системите си. Ще се върнем след няколко часа.'
	}
};

export default bg;
