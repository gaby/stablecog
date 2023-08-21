import type { Translation } from '../i18n-types';

const ko: Translation = {
	Language: '한국어',
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
		GenerateButton: '생성하기',
		PromptInput: { Title: 'Prompt', Placeholder: '반 고흐가 그린 고양이 초상화' },
		WidthTabBar: {
			Title: '너비',
			Paragraph: '이미지의 너비를 의미합니다.'
		},
		HeightTabBar: {
			Title: '높이',
			Paragraph: '이미지의 높이를 의미합니다.'
		},
		InferenceStepsTabBar: {
			Title: '생성 스텝 수',
			Paragraph: '이미지를 만들기까지 수행할 생성(diffuse) 스텝의 수를 의미합니다.'
		},
		GuidanceScaleSlider: {
			Title: '유사한 정도',
			Paragraph:
				'입력한 문구와 이미지가 유사한 정도를 의미합니다. 값이 높을 수록 이미지가 입력 문구와 비슷해집니다.'
		},
		AspectRatioDropdown: {
			Title: 'Aspect Ratio',
			Paragraph: 'Aspect ratio of the image.',
			Options: {
				Square: 'Square (1:1)',
				Portrait: 'Portrait (2:3)',
				Landscape: 'Landscape (3:2)',
				Mobile: 'Mobile (9:16)',
				Desktop: 'Desktop (16:9)',
				Anamorphic: 'Anamorphic (2.4:1)',
				Squarish: 'Squarish (4:5)'
			}
		},
		AspectRatioTabBar: {
			Title: 'Aspect Ratio',
			Paragraph: 'Aspect ratio of the image.'
		},
		InitialImageTabBar: {
			Title: 'Initial Image',
			Paragraph: 'The generation will be created based on this image.'
		},
		InitialImageStrengthTabBar: {
			TitleAlt: 'Image Strength',
			Title: 'Initial Image Strength',
			Paragraph:
				'Controls the influence of the initial image. The bigger the value, the more influence the initial image has.'
		},
		NegativePromptInput: {
			Title: '포함하지 않을 문구',
			Placeholder: '포함하지 않을 문구',
			PlaceholderAlt: 'Enter things to avoid',
			Paragraph:
				'원하지 않는 결과를 없애기 위한 문구입니다. 원하는 문구를 입력하는 것과 반대되는 역할을 합니다.'
		},
		ImageInput: { Paragraph: 'Click or drop your image here', Title: 'Upload Image' },
		SeedInput: {
			Title: '난수 시드',
			Placeholder: '난수 시드 값',
			Paragraph:
				'난수 시드 값을 바꾸면, 동일한 문구와 동일한 옵션에서 다른 이미지를 생성할 수 있습니다.'
		},
		ModelDropdown: {
			Title: 'AI 모델',
			Paragraph: '이미지를 생성하기 위한 AI 모델을 의미합니다.'
		},
		NumOutputsSlider: {
			Title: 'Number of Images',
			Paragraph: 'The number of images that will be generated.'
		},
		ShowOnProfileToggle: {
			Title: 'Show on Profile',
			Paragraph: 'Whether to show the generated images on your profile.'
		},
		SchedulerDropdown: {
			Title: '스케쥴러',
			Paragraph:
				'이미지에 노이즈를 넣거나 샘플을 업데이트 하는 방법을 의미합니다. 스케쥴러의 변화는 생성된 이미지의 큰 변화로 이어집니다. 스케쥴러에 따라 더 적은 생성 스텝을 써야 좋은 이미지를 생성할 수 있습니다.'
		},
		SubmitToGalleryQuestion: {
			Title: '생성한 이미지를 갤러리에 전시할까요?',
			Paragraph: '갤러리에 전시하는 옵션은 설정을 통해 언제든 키거나 끌 수 있어요.'
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
		GenerationsTitle: '생성한 이미지',
		GenerationsMaxSavedCountWarning: '최근 {count}개',
		DownloadLegacyGenerationsButton: 'Download Legacy Generations',
		NoFavoritesYet: "You don't have any favorites yet.",
		Views: {
			AllTitle: 'All',
			FavoritesTitle: 'Favorites'
		},
		NoGenerationsYet: '아직 생성한 이미지가 없어요.'
	},
	Live: {
		GenerationsTitle: '생성된 이미지',
		TotalDurationTitle: '총 생성 시간',
		UpscalesTitle: '화질 개선 횟수',
		VoiceoversTitle: 'Voiceovers',
		GenerationTooltip: {
			AspectRatioTitle: 'Aspect Ratio',
			CountryTitle: '국가',
			Type: {
				Title: '타입',
				Generation: '이미지 생성',
				Upscale: '화질 개선',
				Voiceover: 'Voiceover'
			},
			DimensionsTitle: '해상도',
			StepsTitle: '생성 스텝 수',
			ScaleTitle: '유사한 정도',
			DurationTitle: '걸린 시간',
			Status: {
				Title: '현재 상태',
				Started: '시작됨',
				Succeeded: '완료',
				Failed: '실패'
			},
			Server: {
				Title: '서버',
				Default: '일반',
				Custom: '커스텀'
			},
			UnknownTitle: '알 수 없음',
			OutputsTitle: 'Outputs'
		},
		WaitingTitle: '이미지 생성을 기다리는 중',
		DurationStatusUnknown: '알 수 없음'
	},
	Navbar: {
		HomeTab: '홈 화면',
		GenerateTab: 'Generate',
		HistoryTab: '생성 기록',
		GalleryTab: '갤러리',
		AdminGalleryTab: 'Admin Gallery',
		PricingTab: 'Pricing',
		AccountTab: 'Account',
		VoiceoverTab: 'Voiceover',
		LiveTab: '실시간 통계'
	},
	Settings: {
		Title: '설정',
		SwitchServerButton: '서버 변경하기',
		SubmitToGalleryToggle: '갤러리에 전시하기',
		AdvancedModeToggle: '고급 옵션 보기',
		AdvancedOptionsDropdown: '고급 옵션',
		AdvancedDropdown: '고급 옵션',
		GenerationSettingsButton: '생성 이미지 설정',
		GenerationSettingsTitle: '생성 이미지 설정',
		DarkModeToggle: '다크모드'
	},
	GenerationFullscreen: {
		DownloadButton: '다운로드',
		DoneButtonState: '완료!',
		CopyPromptButton: '문구 복사하기',
		CopyNegativePromptButton: '미포함 문구 복사하기',
		CopiedButtonState: '복사 완료!',
		GenerateSimilarButton: 'Generate Similar',
		ExploreSimilarButton: 'Explore Similar',
		ExploreStyleButton: 'Explore Style',
		RerollButton: '다시하기',
		RegenerateButton: '다시 생성하기',
		GenerateButton: '나도 생성해보기',
		UpscaleButton: '고화질 이미지로 만들기',
		SimilarTitle: 'Similar',
		ShowOnProfileButton: 'Show on Profile',
		SubmitToGalleryButton: 'Submit to Gallery',
		SubmittedTitle: 'Submitted',
		UpscaleTabBar: {
			UpscaledTitle: '고화질',
			OriginalTitle: '원본'
		},
		Dimensions: {
			Title: '해상도'
		},
		Duration: {
			Title: '걸린 시간'
		}
	},
	SetServerModal: {
		SetServerTitle: '서버 설정',
		SwitchServerTitle: '서버 변경하기',
		Paragraph: '이미지를 생성하기 위한 서버를 변경합니다.',
		SetButton: '확인',
		DefaultButton: '기본값 사용'
	},
	Blog: {
		Title: '블로그',
		TitleAlt: '블로그',
		ThanksForReading: 'Thanks for reading!',
		BackToBlogButton: '되돌아가기'
	},
	Redirect: {
		RedirectingToTitle: '{name}으로 이동 중...'
	},
	Shared: {
		StartGeneratingTitle: '아름다운 이미지를 만들어 보세요!',
		StartGeneratingButton: '이미지 만들러 가기',
		JoinUsTitle: '함께 해요!',
		GoHomeButton: '홈페이지로 가기',
		SwitchToDefaultServerButton: '기본 설정된 서버를 사용하기',
		JoinOnDiscord: 'Join on Discord',
		JoinUsOnTitle: '{name}에서 더보기',
		ShareButton: '공유하기',
		ShareOnButton: '{name}에 공유하기',
		GoBackButton: 'Go Back',
		YesButton: '좋아요',
		NoButton: '괜찮아요',
		EnableButton: '활성화',
		DoneButton: 'Done',
		CancelButton: 'Cancel',
		ClearAllButton: 'Clear All',
		DisableButton: '비활성화',
		DownloadButton: 'Download',
		AddButton: '추가하기',
		CopyLinkButton: '링크 복사하기',
		CopiedButton: 'Copied!',
		CopyButton: '복사하기',
		DeleteButton: '삭제하기',
		LoadingTitle: '로딩 중',
		ContinueButton: 'Continue',
		ProfileButton: 'Profile',
		VisitProfileButton: 'Visit Profile',
		YourProfileButton: 'Your Profile',
		LoadingParagraph: '조금만 기다려주세요...',
		InsufficientCreditsTitle: 'Insufficient credits ({remainingCredits}/{neededCredits})',
		AllTitle: 'All',
		ConfirmButton: 'Confirm',
		SimilarToTitle: 'Similar to: {item}',
		ResourcesTitle: 'Resources',
		ResourcesButton: 'Resources',
		On: 'On',
		Off: 'Off',
		BetaTitle: 'Beta',
		ConfirmQuestionMarkButton: 'Confirm?',
		Credits: {
			CreditsTable: {
				CreditTypeTitle: 'Credit Type',
				RemainingCreditsTitle: 'Remaining',
				ExpiryTitle: 'Expiry',
				LastReplenish: 'Last Replenish'
			}
		},
		BatchEditBar: {
			PauseEditingButton: 'Pause Editing',
			DeselectButton: 'Deselect ({selectedCount})',
			DeleteButton: 'Delete ({selectedCount})',
			FavoriteButton: 'Favorite ({selectedCount})',
			ApproveButton: 'Approve ({selectedCount})',
			RejectButton: 'Reject ({selectedCount})',
			UnfavoriteButton: 'Unfavorite ({selectedCount})',
			ConfirmationModal: {
				CancelButton: 'Cancel',
				Deselect: {
					Title: 'Deselect {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to deselect {selectedCount} item(s)?',
					ConfirmButton: 'Deselect'
				},
				Delete: {
					Title: 'Delete {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to delete {selectedCount} item(s)?',
					ConfirmButton: 'Delete'
				},
				Favorite: {
					Title: 'Favorite {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to favorite {selectedCount} item(s)?',
					ConfirmButton: 'Favorite'
				},
				Unfavorite: {
					Title: 'Unfavorite {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to unfavorite {selectedCount} item(s)?',
					ConfirmButton: 'Unfavorite'
				}
			}
		},
		ServerUrlInput: {
			Placeholder: '커스텀 서버 주소'
		},
		EmailInput: {
			Placeholder: '이메일 주소'
		},
		PasswordInput: {
			Placeholder: '비밀번호'
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
				realName: 'DPM Multistep'
			},
			'7e98751f-e135-4206-b855-48b141e7b98f': {
				realName: 'DPM Singlestep'
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
		UnknownTitle: '알 수 없음',
		AdvancedSettingsButton: 'Advanced Settings',
		MoreOptionsTitle: '더 많은 옵션 보기',
		LessOptionsTitle: '옵션 숨기기',
		TryAgainButton: '다시 시도하기',
		RefreshButton: 'Refresh',
		LoadMoreButton: 'Load More',
		BackToProfile: 'Back to Profile',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Searching',
		NoResultsFoundTitle: 'No results found'
	},
	Error: {
		SomethingWentWrong: '웁스.. 뭔가 잘못됐어요. :(',
		PromptWasNSFW: 'This prompt might produce sensitive content :(',
		ImageWasNSFW: 'This image was NSFW :(',
		NSFW: '부적절한 단어가 포함된 것 같아요, 새로운 문구를 입력해주세요 :(',
		ServerSeemsOffline:
			'서버와 연결이 끊긴 것 같아요. 웹사이트를 새로고침하거나 설정 화면을 통해 다른 서버를 지정해주세요.',
		ServerSetNotWorking: '입력한 서버와 호환되지 않거나 요청에 대한 응답을 받지 못하고 있어요.',
		NotFound: '요청한 페이지를 찾지 못했어요.',
		SupabaseNotFoundCantListen: '데이터베이스를 찾을 수 없어요.',
		InvalidEmail: '이메일이 올바르지 않습니다.',
		PasswordTooShort: '비밀번호는 8글자 이상이어야 합니다.',
		SomethingWentWrongTryAgain: '무언가 잘못되었습니다. 다시 시도해주세요.',
		InvalidCredentials: '이메일과 비밀번호를 다시 확인해주세요.',
		InvalidCode: '올바르지 않은 코드입니다. 다시 시도해주세요.',
		TryAnotherImage: 'Try another image :(',
		OnceEvery60Seconds: 'You can only request a link once every 60 seconds.',
		LinkExpired: {
			Title: 'Link Expired',
			Paragraph: 'The link can only be used once and expires after 24 hours.'
		},
		UpdateAvailable: {
			Title: 'Update Available',
			Paragraph: 'There is an update! Refresh the page to get it.'
		},
		EmailProviderNotAllowed: "This email provider isn't allowed.",
		EmailNotAllowed: "This email isn't allowed.",
		EmailAlreadyInUse: 'This email is already in use.'
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
		AdminPanelTitle: '관리자',
		DeleteButton: '삭제하기',
		ApproveButton: '확인됨',
		RejectButton: 'Reject',
		EditButton: 'Edit',
		EditViewButton: 'Edit View',
		NormalViewButton: 'Normal View',
		StopEditButton: 'Stop Editing',
		NoGenerationsToReview: '확인할 이미지 없음',
		ServersButton: '서버 관리',
		AdminGalleryButton: '갤러리',
		UsersButton: '사용자',
		AdminTab: '관리자',
		ServersTab: '서버',
		AdminGalleryTab: '갤러리',
		UsersTab: '사용자',
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
			GiftCreditsButton: 'Gift Credits'
		},
		Gallery: {
			TotalTitle: '전체',
			ApprovedTitle: '승인됨',
			DeletedTitle: '삭제됨',
			StatusDropdown: {
				All: 'All',
				ManuallySubmitted: 'Manually Submitted',
				Submitted: 'Submitted',
				Approved: 'Approved',
				Rejected: 'Rejected',
				Deleted: 'Deleted',
				Private: 'Private'
			},
			NoGenerationsToReview: 'No generations to review'
		}
	},
	SignUp: {
		PageTitle: '회원 가입',
		PageParagraph: 'Stablecog에 가입한 뒤 Pro 멤버가 되면 더 많은 기능을 쓸 수 있어요!',
		PageTitleConfirm: '이메일 인증',
		PageTitleConfirmAlt: '이메일 인증',
		PageParagraphConfirm:
			'가입한 이메일로 6자리 인증코드를 발송했어요. 아래에 인증코드를 입력해주세요.',
		SignUpButton: '가입하기',
		AllTitle: 'All',
		ConfirmButton: '이메일 인증하기',
		AlreadyHaveAnAccountTitle: '이미 계정이 있으신가요?',
		LoginInsteadButton: '다음으로 로그인하기',
		WantsEmailCheckbox: {
			Paragraph: 'Get product updates, deals or news.',
			NoSpamParagraph: 'No spam, we promise.'
		},
		SixDigitCodeInput: {
			Placeholder: '인증번호 6자리'
		}
	},
	SignIn: {
		PageTitleGetStarted: 'Get Started',
		GetStartedButton: 'Get Started',
		PageTitle: '로그인',
		PageParagraph: '로그인을 통해 Stablecog의 모든 기능을 사용해보세요!',
		PageParagraphV2: 'Start creating amazing art in seconds for free, no credit card required.',
		PageTitleCreateAccountOrSignIn: 'Create an account or sign in',
		PageParagraphCreateAccountOrSignIn:
			'Start using Stablecog with all features that are available to your account.',
		PageTitleSentLink: 'Check your email',
		PageParagraphSentLink:
			"We've emailed you a sign-in link. If you don't see it, check your spam folder.",
		ContinueButton: 'Continue',
		ContinueWithProviderButton: 'Continue with {provider}',
		SignInWithProviderButton: 'Sign in with {provider}',
		OrContinueWithEmailTitle: 'Or continue with email',
		DontHaveAnAccountTitle: '아직 계정이 없으신가요?',
		SignUpInsteadButton: '가입하기',
		SignInButton: '로그인하기',
		EnterCodeManuallyButton: 'Enter code manually',
		SignOutButton: '로그아웃하기'
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
		PageTitle: '더 많은 기능을 사용해보세요!',
		PageParagraph:
			'프로 멤버에 가입해서 Stablecog의 모든 기능을 사용해보세요. Stablecog가 제공하는 오픈소스와 무료 기능은 프로 멤버들의 지원을 통해 유지될 수 있습니다.',
		PageTitleAlreadyPro: '이미 프로 멤버에 가입하셨네요!',
		PageParagraphAlreadyPro:
			'이미 프로 멤버에 가입해 주셨네요. Stablecog 프로젝트가 유지될 수 있도록 도와주셔서 고맙습니다. Stablecog가 마음에 드신다면 주변에도 많이 소개해주세요!',
		ProPlanTitle: 'Pro',
		Features: {
			FullSpeed: '가장 빠른 속도의 이미지 생성',
			ImageDimensions: '다양한 이미지 생성 옵션',
			Upscale: '고해상도 이미지 생성 기능',
			Steps: '다양한 생성 스텝 설정',
			MoreModels: '더 많은 AI 모델',
			MoreSchedulers: '다양한 스케쥴러 사용',
			SavedToCloud: '클라우드에 보관되는 이미지 생성 결과',
			Upcoming: '향후 출시될 기능 모두!',
			CommercialUse: '상업적 사용 가능'
		},
		Soon: '(출시 예정)',
		Month: '월',
		BecomeProButton: '프로 멤버 가입하기',
		Success: {
			PageTitle: '프로 멤버가 되어주셔서 감사합니다!',
			PageParagraph:
				'이제부터 Stablecog에서 제공하는 모든 기능을 사용할 수 있습니다. 궁금한 점이 있을 때면 {platform}을 통해 문의해주세요.'
		},
		Cancel: {
			PageTitle: '프로 멤버 가입이 중단됐어요.',
			PageParagraph: '결제 과정에서 취소된 것 같아요. 실수로 취소했다면 다시 한번 시도해주세요.'
		},
		Reason: {
			ParagraphWidth: '선택하신 이미지 너비는 프로 멤버만 사용할 수 있어요.',
			ParagraphHeight: '선택하신 이미지 높이는 프로 멤버만 사용할 수 있어요.',
			ParagraphDimensions: '선택하신 이미지 유사 정도는 프로 멤버만 사용할 수 있어요.',
			ParagraphUpscale: '고해상도 이미지 생성 기능은 프로 멤버만 사용할 수 있어요.',
			ParagraphInferenceSteps: '선택하신 이미지 생성 스텝은 프로 멤버만 사용할 수 있어요.',
			ParagraphModel: '선택하신 AI 모델은 프로 멤버만 사용할 수 있어요.',
			ParagraphScheduler: '선택하신 스케쥴러는 프로 멤버만 사용할 수 있어요.',
			ParagraphWidthGeneration:
				'선택하신 이미지는 프로 멤버만 사용할 수 있는 이미지 너비 값으로 생성됐어요.',
			ParagraphHeightGeneration:
				'선택하신 이미지는 프로 멤버만 사용할 수 있는 이미지 높이 값으로 생성됐어요.',
			ParagraphDimensionsGeneration:
				'선택하신 이미지는 프로 멤버만 사용할 수 있는 "유사한 정도" 값으로 생성됐어요.',
			ParagraphInferenceStepsGeneration:
				'선택하신 이미지는 프로 멤버만 사용할 수 있는 생성 스텝 값으로 생성됐어요.',
			ParagraphModelGeneration:
				'선택하신 이미지는 프로 멤버만 사용할 수 있는 AI 모델을 통해 생성됐어요.',
			ParagraphSchedulerGeneration:
				'선택하신 이미지는 프로 멤버만 사용할 수 있는 스케쥴러를 통해 생성됐어요.'
		},
		Tier: {
			Title: {
				Free: '무료 체험',
				Pro: '프로'
			},
			Badge: {
				Free: '무료 체험',
				Pro: 'PRO'
			}
		}
	},
	Account: {
		PageTitle: '로그인 계정',
		ManageSubscriptionButton: '구독 설정',
		ComparePlansButton: 'Compare Plans',
		ManageAccountButton: '계정 설정',
		AccountButton: 'Account',
		MyAccountButton: '로그인 계정',
		SubscriptionPlanTitle: '가입 요금제',
		RemainingImagesTitle: 'Remaining Images',
		RemainingCreditsTitle: 'Remaining Credits',
		RemainingTitle: 'Remaining',
		Subscription: {
			UpdateSubscriptionTitle: 'Update Subscription',
			ChangePlanTitle: 'Change Plan',
			CurrentPlanTitle: 'Current Plan',
			NewPlanTitle: 'New plan',
			Downgrade: {
				DowngradingToTitle: 'Downgrading to',
				Explanation: 'Your existing credits will remain.'
			},
			Upgrade: {
				UpgadingToTitle: 'Upgrading to',
				Explanation: 'Your existing credits will remain.'
			},
			Failed: {
				PageTitle: 'Failed to update',
				PageParagraph: 'Something went wrong while changing your plan. Please try again.'
			},
			Succeeded: {
				PageTitle: 'Changed plan',
				PageParagraph: 'Your plan has been changed successfully.'
			}
		},
		Tabs: { Account: 'Account', Usage: 'Usage', APIKeys: 'API Keys' },
		Meta: {
			AccountCreationTitle: 'Creation',
			LastSignInTitle: 'Last Sign-in',
			LastSeenTitle: 'Last Seen'
		},
		ChangeEmail: {
			PageTitle: 'Change Email',
			PageParagraph: 'Enter a new email address for your account.',
			ChangeEmailButton: 'Change Email',
			NewEmailInput: {
				Placeholder: 'New Email'
			},
			PageTitleSentLink: 'Check your email',
			PageParagraphSentLink:
				"We've sent links to both addresses. Confirm both to change your account's email address.",
			PageTitleConfirmOtherEmail: 'Confirm Other Email',
			PageParagraphConfirmOtherEmail:
				"We've also sent a link to your other email address. Confirm that one as well to complete the process."
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
		PageTitle: '비밀번호 재설정',
		PageParagraph: '비밀번호 재설정을 위해 가입한 이메일로 인증코드를 발송합니다.',
		SendResetCodeButton: '인증코드 받기',
		PageTitleConfirmCode: '이메일 인증',
		PageTitleConfirmCodeAlt: '이메일을 확인해주세요!',
		PageParagraphConfirmCode:
			'가입한 이메일로 6자리 인증코드를 발송했어요. 아래에 인증코드를 입력해주세요.',
		ConfirmCodeButton: '이메일 인증하기',
		PageTitleNewPassword: '새로운 비밀번호 설정',
		PageParagraphNewPassword: '새로운 비밀번호를 설정해주세요.',
		NewPasswordInput: {
			Placeholder: '새로운 비밀번호'
		},
		SetNewPasswordButton: '새로운 비밀번호 설정하기',
		PageTitleSuccess: '완료!',
		PageParagraphSuccess: '새로운 비밀번호가 성공적으로 설정됐어요.',
		ForgotPasswordButton: '비밀번호를 잊으셨나요?'
	},
	FeaturedOn: {
		PageTitle: 'Stablecog가 알려지고 있어요!'
	},
	Gallery: {
		PageTitle: 'Gallery',
		PageParagraph: 'Check out what others have created with Stablecog.',
		SearchInput: {
			Title: 'Search'
		},
		BackToProfile: 'Back to Profile',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Searching',
		NoMatchingGenerationTitle: 'No matching generation'
	},
	Pricing: {
		PlansTitle: 'Plans',
		PlansParagraph: 'Choose a plan that works for you.',
		CreditPacksTitle: 'Credit Packs',
		CreditPacksParagraph: 'Need more? You can purchase additional credits anytime.',
		SubscribeButton: 'Subscribe',
		SubscribedButton: 'Subscribed',
		UpgradeButton: 'Upgrade',
		DowngradeButton: 'Downgrade',
		PurchaseButton: 'Purchase',
		BuyCreditsButton: 'Buy Credits',
		MonthlyTitle: 'Monthly',
		YearlyTitle: 'Yearly',
		SlashMonth: '/month',
		Plans: {
			FreeTitle: 'Free',
			StarterTitle: 'Starter',
			ProTitle: 'Pro',
			UltimateTitle: 'Ultimate'
		},
		CreditPacks: {
			MediumTitle: 'Medium Pack',
			LargeTitle: 'Large Pack',
			MegaTitle: 'Mega Pack'
		},
		Features: {
			MonthlyCredits: '{count} credits per month.',
			MonthlyImages: '{count} images per month.',
			MonthlyGenerations: '{count} generations per month.',
			ParallelGenerations: '{count} parallel generations.',
			Images: '{count} images.',
			Generations: '{count} generations.',
			NeverExpires: 'Never expires.',
			CommercialUse: 'Commercial use.',
			ImagesArePublic: 'Images are public.',
			ImagesArePrivate: 'Images are private.'
		},
		Badges: {
			Recommended: 'Recommended',
			MostPopular: 'Most Popular',
			BestValue: 'Best Value'
		},
		Purchase: {
			Succeeded: {
				PageTitle: "You're all set!",
				PageParagraph:
					'Thank you for your purchase. If you have any questions, feel free to reach out to us on {platform}.'
			},
			Cancelled: {
				PageTitle: 'Purchase Cancelled',
				PageParagraph:
					'You have cancelled the purchase process. If it was a mistake, you can try again.'
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
		Title: "You're low on credits ({remainingCredits})",
		FreeParagraph:
			'We give all active users free credits daily. You can get more by subscribing to a plan or by participating in our events.',
		HighestPlanParagraph: 'You can buy a credit pack.',
		OtherPlansParagraph: 'You can upgrade to a higher plan or buy a credit pack.'
	},
	Contact: {
		PageTitle: 'Contact',
		PageParagraph:
			"If you have any inquiries or a questions, don't hesitate to reach out to us using the links below. We'll answer as soon as possible."
	},
	Support: {
		PageTitle: 'Support',
		PageParagraph:
			"If you have any questions, please reach out to us using the links below and we'll answer them as soon as possible."
	},

	Guide: {
		PageTitle: 'Guide',
		GuideButton: 'Guide',
		PreviousTitle: 'Previous',
		EndpointsTitle: 'Endpoints',
		EndpointTitle: 'Endpoint',
		NextTitle: 'Next',
		ChaptersTitle: 'Chapters',
		ChapterTitle: 'Chapter'
	},
	Try: { PageTitle: 'Try' },
	Legal: {
		PageTitle: 'Legal',
		PageParagraph: 'Our terms and policies are listed below.',
		TermsOfServiceTitle: 'Terms of Service',
		PrivacyPolicyTitle: 'Privacy Policy',
		RefundPolicyTitle: 'Refund Policy',
		ContentPolicyTitle: 'Content Policy'
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
		PageTitle: "We'll be back soon!",
		PageParagraph: "We're upgrading our systems. We'll be back in a couple of hours."
	}
};
export default ko;
