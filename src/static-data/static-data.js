import sprite from '../img/sprites/sprite.svg';

export const staticData = {
	cartData: [
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
	],

	hrefData: [
		{ title: 'technology', id: '1' },
		{ title: 'about-us', id: '2' },
		{ title: 'impact', id: '3' },
		{ title: 'portfolio', id: '4' },
		{ title: 'blog', id: '5' },
	],

	trustByData: [
		{ path: `${sprite}#releight` },
		{ path: `${sprite}#fdot` },
		{ path: `${sprite}#us_devis` },
		{ path: `${sprite}#cyty_of_aspen` },
		{ path: `${sprite}#walker` },
		{ path: `${sprite}#california` },
		{ path: `${sprite}#premium_parking` },
		{ path: `${sprite}#signature` },
	],
};
