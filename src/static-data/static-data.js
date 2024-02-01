// import sprite from '../img/sprites/sprite.svg';
// import photo_1 from '../img/sections/our-blog/photo-1.webp';
// import photo_2 from '../img/sections/our-blog/photo-2.webp';
// import photo_3 from '../img/sections/our-blog/photo-3.webp';

// export const staticData = {
// 	cartData: [
// 		{
// 			path: `${sprite}#wireless`,
// 			title: 'Fully wireless hardware',
// 			content:
// 				'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
// 		},
// 		{
// 			path: `${sprite}#real_time_data`,
// 			title: 'Real-time data',
// 			content: `Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.`,
// 		},
// 		{
// 			path: `${sprite}#full_service`,
// 			title: 'Full service subscription',
// 			content:
// 				'One subscription for the cameras, installation, maintenance, implementation, software, and support.',
// 		},
// 	],

// 	hrefData: [
// 		{ title: 'technology', id: '1' },
// 		{ title: 'about-us', id: '2' },
// 		{ title: 'impact', id: '3' },
// 		{ title: 'portfolio', id: '4' },
// 		{ title: 'blog', id: '5' },
// 	],

// 	trustByData: [
// 		{ path: `${sprite}#releight` },
// 		{ path: `${sprite}#fdot` },
// 		{ path: `${sprite}#us_devis` },
// 		{ path: `${sprite}#cyty_of_aspen` },
// 		{ path: `${sprite}#walker` },
// 		{ path: `${sprite}#california` },
// 		{ path: `${sprite}#premium_parking` },
// 		{ path: `${sprite}#signature` },
// 	],

// 	ourBlogData: [
// 		{
// 			imgPath: `${photo_1}`,
// 			title: '2021 Mid-South Parking and Transportation (MSPTA) Conference',
// 			date: 'September 21, 2021',
// 		},
// 		{
// 			imgPath: `${photo_2}`,
// 			title: '2021 Parking Industry Expo (PIE)',
// 			date: 'September 21, 2021',
// 		},
// 		{
// 			imgPath: `${photo_3}`,
// 			title: '2021 International Parking & Mobility Institute (IPMI) Conference',
// 			date: 'September 16, 2021',
// 		},
// 	],

// 	footerData: {
// 		footerNavData: [
// 			{
// 				linkTitle: 'technology',
// 				href: `#${this.hrefData[0].id}`,
// 			},
// 			{
// 				linkTitle: 'impact',
// 				href: `#${this.hrefData[2].id}`,
// 			},
// 			{
// 				linkTitle: 'portfolio',
// 				href: `#${this.hrefData[3].id}`,
// 			},
// 			{
// 				linkTitle: 'blog',
// 				href: `#${this.hrefData[4].id}`,
// 			},
// 		],

// 		footerSocialNetworksData: [
// 			{
// 				link: 'https://www.facebook.com',
// 				svgSprite: `${sprite}#facebook`,
// 			},
// 			{
// 				link: 'https://www.instagram.com',
// 				svgSprite: `${sprite}#instagram`,
// 			},
// 			{
// 				link: 'https://www.twitter.com',
// 				svgSprite: `${sprite}#twitter`,
// 			},
// 			{
// 				link: 'https://www.linkedin.com',
// 				svgSprite: `${sprite}#linkedin`,
// 			},
// 		],
// 	},
// };





import sprite from '../img/sprites/sprite.svg';
import photo_1 from '../img/sections/our-blog/photo-1.webp';
import photo_2 from '../img/sections/our-blog/photo-2.webp';
import photo_3 from '../img/sections/our-blog/photo-3.webp';

class StaticData {
	constructor() {
		this.cartData = [
			{
				path: `${sprite}#wireless`,
				title: 'Fully wireless hardware',
				content:
					'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
			},
			{
				path: `${sprite}#real_time_data`,
				title: 'Real-time data',
				content: `Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.`,
			},
			{
				path: `${sprite}#full_service`,
				title: 'Full service subscription',
				content:
					'One subscription for the cameras, installation, maintenance, implementation, software, and support.',
			},
		];

		this.hrefData = [
			{ title: 'technology', id: '1' },
			{ title: 'about-us', id: '2' },
			{ title: 'impact', id: '3' },
			{ title: 'portfolio', id: '4' },
			{ title: 'blog', id: '5' },
		];

		this.trustByData = [
			{ path: `${sprite}#releight` },
			{ path: `${sprite}#fdot` },
			{ path: `${sprite}#us_devis` },
			{ path: `${sprite}#cyty_of_aspen` },
			{ path: `${sprite}#walker` },
			{ path: `${sprite}#california` },
			{ path: `${sprite}#premium_parking` },
			{ path: `${sprite}#signature` },
		];

		this.ourBlogData = [
			{
				imgPath: `${photo_1}`,
				title: '2021 Mid-South Parking and Transportation (MSPTA) Conference',
				date: 'September 21, 2021',
			},
			{
				imgPath: `${photo_2}`,
				title: '2021 Parking Industry Expo (PIE)',
				date: 'September 21, 2021',
			},
			{
				imgPath: `${photo_3}`,
				title: '2021 International Parking & Mobility Institute (IPMI) Conference',
				date: 'September 16, 2021',
			},
		];

		this.footerData = {
			footerNavData: [
				{
					linkTitle: 'technology',
					href: `#${this.hrefData[0].id}`,
				},
				{
					linkTitle: 'impact',
					href: `#${this.hrefData[2].id}`,
				},
				{
					linkTitle: 'portfolio',
					href: `#${this.hrefData[3].id}`,
				},
				{
					linkTitle: 'blog',
					href: `#${this.hrefData[4].id}`,
				},
			],

			footerSocialNetworksData: [
				{
					link: 'https://www.facebook.com',
					svgSprite: `${sprite}#facebook`,
				},
				{
					link: 'https://www.instagram.com',
					svgSprite: `${sprite}#instagram`,
				},
				{
					link: 'https://www.twitter.com',
					svgSprite: `${sprite}#twitter`,
				},
				{
					link: 'https://www.linkedin.com',
					svgSprite: `${sprite}#linkedin`,
				},
			],
		};
	}
}

export const staticData = new StaticData();
