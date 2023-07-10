import type { Translation } from '../i18n-types';

const vi: Translation = {
	Language: 'Ngôn ngữ',
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
		GenerateButton: 'Khởi tạo',
		PromptInput: { Title: 'Prompt', Placeholder: 'Tranh chân dung một con mèo vẽ bởi Van Gogh' },
		WidthTabBar: {
			Title: 'Chiều rộng',
			Paragraph: 'Chiều rộng của hình ảnh.'
		},
		HeightTabBar: {
			Title: 'Chiều cao',
			Paragraph: 'Chiều cao của hình ảnh.'
		},
		InferenceStepsTabBar: {
			Title: 'Số bước suy luận',
			Paragraph: 'Bao nhiêu bước sẽ được thực hiện để tạo ra ảnh.'
		},
		GuidanceScaleSlider: {
			Title: 'Mức độ hướng dẫn',
			Paragraph:
				'Hình ảnh sẽ theo sát lời mô tả đến đâu. Giá trị cao hơn khiến hình ảnh dược tạo ra sát với lời mô tả hơn.'
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
			Title: 'Mô tả nghịch đảo',
			Placeholder: 'Mô tả nghịch đảo',
			PlaceholderAlt: 'Enter things to avoid',
			Paragraph:
				'Để xóa những thứ không mong muốn xuất hiện trong hình ảnh. Nó có tác dụng ngược so với lời mô tả.'
		},
		ImageInput: { Paragraph: 'Click or drop your image here', Title: 'Upload Image' },
		SeedInput: {
			Title: 'Số khởi tạo',
			Placeholder: 'Số khởi tạo',
			Paragraph:
				'Nhận được kết quả lặp lại giống nhau. Một số khởi tạo kết hợp với cùng một lời mô tả và các tùy chọn giống nhau sẽ tạo ra cùng một hình ảnh giống nhau.'
		},
		ModelDropdown: {
			Title: 'Mẫu',
			Paragraph: 'Kiểu mẫu AI sẽ được dùng để tạo hình ảnh.'
		},
		NumOutputsSlider: {
			Title: 'Number of Images',
			Paragraph: 'The number of images that will be generated.'
		},
		SchedulerDropdown: {
			Title: 'Bộ lấy mẫu',
			Paragraph:
				'Tạo ảnh theo từng cách nhất định. Dùng bộ lấy mẫu khác nhau sẽ thay đổi hình ảnh đáng kể. Có những bộ lấy mẫu cần ít bước suy luận hơn để cho ra hình ảnh tốt.'
		},
		SubmitToGalleryQuestion: {
			Title: 'Gửi hình ảnh tới thư viện công cộng?',
			Paragraph: 'Bạn có thể thay đổi thiết lập này sau trong phần cài đặt.'
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
		GenerationsTitle: 'Các hình ảnh',
		GenerationsMaxSavedCountWarning: 'Chỉ hiện thị {count}',
		DownloadLegacyGenerationsButton: 'Download Legacy Generations',
		NoFavoritesYet: "You don't have any favorites yet.",
		Views: {
			AllTitle: 'All',
			FavoritesTitle: 'Favorites'
		},
		NoGenerationsYet: 'Bạn chưa tạo hình ảnh nào cả.'
	},
	Live: {
		GenerationsTitle: 'Số lượng hình ảnh',
		TotalDurationTitle: 'Tổng thời gian',
		UpscalesTitle: 'Số lệnh phóng to',
		VoiceoversTitle: 'Voiceovers',
		GenerationTooltip: {
			AspectRatioTitle: 'Aspect Ratio',
			CountryTitle: 'Quốc gia',
			Type: {
				Title: 'Kiểu',
				Generation: 'Tạo ảnh',
				Upscale: 'Phóng to',
				Voiceover: 'Voiceover'
			},
			DimensionsTitle: 'Kích thước',
			StepsTitle: 'Số bước',
			ScaleTitle: 'Tỉ lệ',
			DurationTitle: 'Thời gian',
			Status: {
				Title: 'Trạng thái',
				Started: 'Đã bắt đầu',
				Succeeded: 'Thành công',
				Failed: 'Thất bại'
			},
			Server: {
				Title: 'Máy chủ',
				Default: 'Mặc định',
				Custom: 'Tùy chỉnh'
			},
			UnknownTitle: 'Không xác định',
			OutputsTitle: 'Outputs'
		},
		WaitingTitle: 'Chờ khởi tạo',
		DurationStatusUnknown: 'Không xác định'
	},
	Navbar: {
		HomeTab: 'Trang chủ',
		GenerateTab: 'Generate',
		HistoryTab: 'Lịch sử',
		GalleryTab: 'Thư viện',
		AdminGalleryTab: 'Admin Gallery',
		PricingTab: 'Pricing',
		AccountTab: 'Account',
		VoiceoverTab: 'Voiceover',
		LiveTab: 'Trực tiếp'
	},
	Settings: {
		Title: 'Cài đặt',
		SwitchServerButton: 'Đổi Máy chủ',
		SubmitToGalleryToggle: 'Lưu vào Thư viện',
		AdvancedModeToggle: 'Chế độ nâng cao',
		AdvancedOptionsDropdown: 'Tùy chọn nâng cao',
		AdvancedDropdown: 'Nâng cao',
		GenerationSettingsButton: 'Cài đặt chung',
		GenerationSettingsTitle: 'Cài đặt tạo ảnh',
		DarkModeToggle: 'Chế độ tối'
	},
	GenerationFullscreen: {
		DownloadButton: 'Tải về',
		DoneButtonState: 'Hoàn thành!',
		CopyPromptButton: 'Sao chép mô tả',
		CopyNegativePromptButton: 'Sao chép mô tả nghịch đảo',
		CopiedButtonState: 'Đã sao chép!',
		GenerateSimilarButton: 'Generate Similar',
		ExploreSimilarButton: 'Explore Similar',
		ExploreStyleButton: 'Explore Style',
		RerollButton: 'Tái tạo ngẫu nhiên',
		RegenerateButton: 'Tái tạo',
		GenerateButton: 'Khởi tạo',
		UpscaleButton: 'Phóng to',
		SimilarTitle: 'Similar',
		SubmitToGalleryButton: 'Submit to Gallery',
		SubmittedTitle: 'Submitted',
		UpscaleTabBar: {
			UpscaledTitle: 'Phóng to',
			OriginalTitle: 'Nguyên bản'
		},
		Dimensions: {
			Title: 'Kích thước'
		},
		Duration: {
			Title: 'Thời gian'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Nhập máy chủ',
		SwitchServerTitle: 'Đổi máy chủ',
		Paragraph: 'Máy chủ sẽ được dùng để tạo hình ảnh.',
		SetButton: 'Chọn',
		DefaultButton: 'Mặc định'
	},
	Blog: {
		Title: 'Bài đăng trên blog',
		TitleAlt: 'Nhật ký',
		ThanksForReading: 'Thanks for reading!',
		BackToBlogButton: 'Quay lại nhật ký'
	},
	Redirect: {
		RedirectingToTitle: 'Đang chuyển hướng đến {name}'
	},
	Shared: {
		StartGeneratingTitle: 'Sẵn sàng tạo ra những bức ảnh đẹp đẽ!',
		StartGeneratingButton: 'Khởi tạo ảnh',
		JoinUsTitle: 'Gia nhập',
		GoHomeButton: 'Về trang chủ',
		SwitchToDefaultServerButton: 'Chuyển sang máy chủ mặc định',
		JoinOnDiscord: 'Join on Discord',
		JoinUsOnTitle: 'Gia nhập tại {name}',
		ShareButton: 'Chia sẻ',
		ShareOnButton: 'Chia sẻ trên {name}',
		GoBackButton: 'Go Back',
		YesButton: 'Có',
		NoButton: 'Không',
		EnableButton: 'Cho phép',
		DoneButton: 'Done',
		CancelButton: 'Cancel',
		ClearAllButton: 'Clear All',
		DisableButton: 'Vô hiệu hóa',
		DownloadButton: 'Download',
		AddButton: 'Thêm',
		CopyLinkButton: 'Sao chép liên kết',
		CopyButton: 'Sao chép',
		DeleteButton: 'Xóa',
		LoadingTitle: 'Đang tải',
		ContinueButton: 'Continue',
		LoadingParagraph: 'Đang tải...',
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
			Placeholder: 'Đường dẫn máy chủ'
		},
		EmailInput: {
			Placeholder: 'Địa chỉ email'
		},
		PasswordInput: {
			Placeholder: 'Mật khẩu'
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
			'8002bc51-7260-468f-8840-cf1e6dbe3f8a': { realName: 'SDXL' },
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
			'b7224e56-1440-43b9-ac86-66d66f9e8c91': {
				realName: 'P Sampler'
			}
		},
		UnknownTitle: 'Không xác định',
		AdvancedSettingsButton: 'Advanced Settings',
		MoreOptionsTitle: 'Tuỳ chọn khác',
		LessOptionsTitle: 'Tùy chọn ít hơn',
		TryAgainButton: 'Thử lại',
		RefreshButton: 'Refresh',
		LoadMoreButton: 'Load More',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Searching',
		NoResultsFoundTitle: 'No results found'
	},
	Error: {
		SomethingWentWrong: 'Đã xảy ra lỗi :(',
		PromptWasNSFW: 'This prompt might produce sensitive content :(',
		ImageWasNSFW: 'This image was NSFW :(',
		NSFW: 'Phát hiện nội dung không lành mạnh, hãy viết lời mô tả khác :(',
		ServerSeemsOffline:
			'Máy chủ có lẽ ngoại tuyến. Bạn thử F5 hoặc chọn máy chủ khác trong phần cài đặt.',
		ServerSetNotWorking: 'Máy chủ này không tương thích hoặc không phản hồi.',
		NotFound: 'Không tìm thấy',
		SupabaseNotFoundCantListen:
			'Không tìm thấy phiên Supabase. Không thể nhận được các lệnh khởi tạo.',
		InvalidEmail: 'Nhập địa chỉ email hợp lệ.',
		PasswordTooShort: 'Mật khẩu phải có ít nhất 8 ký tự.',
		SomethingWentWrongTryAgain: 'Có sự cố. Xin vui lòng thử lại.',
		InvalidCredentials: 'Thông tin dùng để xác thực không hợp lệ.',
		InvalidCode: 'Mã không hợp lệ.',
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
		EmailAlreadyInUse: 'This email is already in use.'
	},
	Admin: {
		AdminPanelTitle: 'Quản trị',
		DeleteButton: 'Xóa',
		ApproveButton: 'Phê duyệt',
		RejectButton: 'Reject',
		EditButton: 'Edit',
		EditViewButton: 'Edit View',
		NormalViewButton: 'Normal View',
		StopEditButton: 'Stop Editing',
		NoGenerationsToReview: 'Chưa có ảnh để duyệt.',
		ServersButton: 'Máy chủ',
		AdminGalleryButton: 'Thư viện',
		UsersButton: 'Người dùng',
		AdminTab: 'Quản trị',
		ServersTab: 'Máy chủ',
		AdminGalleryTab: 'Thư viện',
		UsersTab: 'Người dùng',
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
			BanUserButton: 'Ban User',
			GiftCreditsButton: 'Gift Credits'
		},
		Gallery: {
			TotalTitle: 'Tổng',
			ApprovedTitle: 'Đã duyệt',
			DeletedTitle: 'Đã xóa',
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
		PageTitle: 'Đăng ký',
		PageParagraph:
			'Tham gia và trở thành người dùng trả phí để khai mở hết tiềm năng của Stablecog.',
		PageTitleConfirm: 'Xác nhận',
		PageTitleConfirmAlt: 'Kiểm tra Email của bạn',
		PageParagraphConfirm:
			'Chúng tôi đã gửi cho bạn mã gồm 6 chữ số qua email. Nhập nó phía dưới để xác nhận tài khoản.',
		SignUpButton: 'Đăng ký',
		AllTitle: 'All',
		ConfirmButton: 'Xác nhận',
		AlreadyHaveAnAccountTitle: 'Đã có một tài khoản?',
		LoginInsteadButton: 'Đăng Nhập',
		WantsEmailCheckbox: {
			Paragraph: 'Get product updates, deals or news.',
			NoSpamParagraph: 'No spam, we promise.'
		},
		SixDigitCodeInput: {
			Placeholder: 'Mã 6 chữ số'
		}
	},
	SignIn: {
		PageTitleGetStarted: 'Get Started',
		GetStartedButton: 'Get Started',
		PageTitle: 'Đăng nhập',
		PageParagraph:
			'Bắt đầu dùng Stablecog với tất cả các tính năng sẵn có trong tài khoản của bạn.',
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
		DontHaveAnAccountTitle: 'Bạn không có tài khoản?',
		SignUpInsteadButton: 'Đăng ký mới',
		SignInButton: 'Đăng nhập',
		EnterCodeManuallyButton: 'Enter code manually',
		SignOutButton: 'Đăng xuất'
	},
	Pro: {
		PageTitle: 'Trở thành người dùng trả phí',
		PageParagraph:
			'Mở khóa tất cả các tính năng của Stablecog và hỗ trợ dự án. Nếu không có các thành viên trả phí, Stablecog sẽ không thể duy trì nguồn mở hoàn toàn và tiếp tục miễn phí cho mọi người.',
		PageTitleAlreadyPro: 'Đã là người dùng trả phí!',
		PageParagraphAlreadyPro:
			'Bạn đã là thành viên trả phí. Cảm ơn bạn đã ủng hộ dự án! Hãy tận hưởng Stablecog và chia sẻ với bạn bè của bạn.',
		ProPlanTitle: 'Trả phí',
		Features: {
			FullSpeed: 'Tốc độ đầy đủ không giới hạn',
			ImageDimensions: 'Đa dạng kích thước ảnh',
			Upscale: 'Phóng to ảnh',
			Steps: 'Đa dạng số bước suy luận',
			MoreModels: 'Nhiều mẫu (mô hình AI) hơn',
			MoreSchedulers: 'Nhiều bộ lấy mẫu hơn',
			SavedToCloud: 'Ảnh tạo ra được lưu lên mây',
			Upcoming: 'Các tính năng sắp xuất hiện',
			CommercialUse: 'Thương mại'
		},
		Soon: '(sắp có)',
		Month: '/tháng',
		BecomeProButton: 'Trở thành người dùng trả phí',
		Success: {
			PageTitle: 'Bạn là người dùng trả phí!',
			PageParagraph:
				'Bây giờ bạn có quyền truy cập vào mọi thứ mà Stablecog cung cấp. Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi tại {platform}.'
		},
		Cancel: {
			PageTitle: 'Bạn đã hủy bỏ',
			PageParagraph: 'Bạn đã hủy quá trình đăng ký. Nếu đó là một nhẫm lẫn, bạn hãy thử lại.'
		},
		Reason: {
			ParagraphWidth: 'Chế độ miễn phí không hỗ trợ kích thước chiều rộng này.',
			ParagraphHeight: 'Chế độ miễn phí không hỗ trợ kích thước chiều cao này.',
			ParagraphDimensions: 'Chế độ miễn phí không hỗ trợ kích thước hình ảnh này.',
			ParagraphUpscale: 'Chế độ miễn phí không hỗ trợ chức năng phóng to.',
			ParagraphInferenceSteps: 'Chế độ miễn phí không hỗ trợ số bước suy luận này.',
			ParagraphModel: 'Chế độ miễn phí không hỗ trợ mô hình AI này.',
			ParagraphScheduler: 'Chế độ miễn phí không hỗ trợ bộ lấy mẫu này.',
			ParagraphWidthGeneration:
				'Chế độ miễn phí không hỗ trợ kích thước chiều rộng mà hình ảnh này được khởi tạo.',
			ParagraphHeightGeneration:
				'Chế độ miễn phí không hỗ trợ kích thước chiều cao mà hình ảnh này được khởi tạo.',
			ParagraphDimensionsGeneration:
				'Chế độ miễn phí không hỗ trợ kích thước mà hình ảnh này được khởi tạo.',
			ParagraphInferenceStepsGeneration:
				'Chế độ miễn phí không hỗ trợ số bước suy luận mà hình ảnh này được khởi tạo.',
			ParagraphModelGeneration:
				'Chế độ miễn phí không hỗ trợ mô hình AI đã dùng để khởi tạo hình ảnh này.',
			ParagraphSchedulerGeneration:
				'Chế độ miễn phí không hỗ trợ số bước suy luận đã dùng để khởi tạo hình ảnh này.'
		},
		Tier: {
			Title: {
				Free: 'Miễn phí',
				Pro: 'Trả phí'
			},
			Badge: {
				Free: 'MIỄN PHÍ',
				Pro: 'TRẢ PHÍ'
			}
		}
	},
	Account: {
		PageTitle: 'Tài khoản',
		ManageSubscriptionButton: 'Quản lý gói đăng ký',
		ComparePlansButton: 'Compare Plans',
		ManageAccountButton: 'Quản lý tài khoản',
		AccountButton: 'Account',
		MyAccountButton: 'Tài khoản của tôi',
		SubscriptionPlanTitle: 'Gói',
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
				Generate: 'Generate',
				Generation: 'Generation',
				Upscale: 'Upscale'
			},
			SourceType: {
				Web: 'Web',
				WebApp: 'Web App',
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
		PageTitle: 'Đặt lại mật khẩu',
		PageParagraph: 'Chúng tôi sẽ gửi mã số gồm 6 chữ số đến email của bạn để đặt lại mật khẩu.',
		SendResetCodeButton: 'Gửi mã',
		PageTitleConfirmCode: 'Xác nhận',
		PageTitleConfirmCodeAlt: 'Kiểm tra Email của bạn',
		PageParagraphConfirmCode:
			'Chúng tối đã gửi bạn mã số gồm 6 chữ số qua email. Nhập nó phía dưới để tiếp tục.',
		ConfirmCodeButton: 'Xác nhận',
		PageTitleNewPassword: 'Mật khẩu mới',
		PageParagraphNewPassword: 'Nhập mật khẩu mới cho tài khoản của bạn.',
		NewPasswordInput: {
			Placeholder: 'Mật khẩu mới'
		},
		SetNewPasswordButton: 'Đặt mật khẩu mới',
		PageTitleSuccess: 'Hoàn thành!',
		PageParagraphSuccess: 'Mật khẩu đã được đặt lại thành công.',
		ForgotPasswordButton: 'Quân mật khẩu?'
	},
	FeaturedOn: {
		PageTitle: 'Chúng tôi nổi bật trên'
	},
	Gallery: {
		PageTitle: 'Gallery',
		PageParagraph: 'Check out what others have created with Stablecog.',
		SearchInput: {
			Title: 'Search'
		},
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
	UnderDevelopment: {
		PageTitle: "We'll be back soon!",
		PageParagraph: "We're upgrading our systems. We'll be back in a couple of hours."
	}
};
export default vi;
