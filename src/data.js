import { Portfolio1, Portfolio2 } from './assets';
import { Github, LinkedIn, Twitter } from './assets';
import { SimlabsCover } from './assets';

export const portfolioData = [
	{
		title: 'Sim Labs',
		thumbnail: Portfolio1,
		alt: 'A showcase of my own Web3 agency.',
		category: 'Web3',
		link: '/',
	},
	{
		title: 'CryptoPresis',
		thumbnail: Portfolio2,
		alt: 'I co-founded my own NFT collection.',
		category: 'Web3',
		link: '/',
	},
];

export const socials = [
	{
		name: 'GitHub',
		icon: Github,
		alt: 'Fork me on GitHub',
		link: 'https://github.com/ackermann721',
	},
	{
		name: 'LinkedIn',
		icon: LinkedIn,
		alt: 'Send me a connection on LinkedIn',
		link: 'https://twitter.com/ackermann721',
	},
	{
		name: 'Twitter',
		icon: Twitter,
		alt: 'Follow me on Twitter',
		link: 'https://github.com/ackermann721',
	},
];

export const portfolioPage = [
	{
		title: 'Sim Labs',
		backgroundImage: "{{ backgroundImage: 'url(' + SimlabsCover + ')'}}",
		role: 'Website Design',
		link: 'https://simlabs.vercel.app',
		linkText: 'www.simlabs.io',
		title2: 'Involvment',
		paragraph1:
			'In 2021 during the cryptocurrency bull market and the newly-found asset class of NFTs (Non-Fungible Tokens), I Co-Founded Sim Labs, a software agency empowering artists and creators through web3 with a group of colleagues from El Salvador. My Involvement with Sim Labs encompassed serving as the lead developer and being directly involved with creature decentralized products for our clients.',
		alt: 'Sim Labs Website',
		title3: 'Involvment',
		paragraph2:
			'In 2021 during the cryptocurrency bull market and the newly-found asset class of NFTs (Non-Fungible Tokens), I Co-Founded Sim Labs, a software agency empowering artists and creators through web3 with a group of colleagues from El Salvador. My Involvement with Sim Labs encompassed serving as the lead developer and being directly involved with creature decentralized products for our clients.',
		stat1: '10%',
		statText1: 'Increase in Sales',
		stat2: '20%',
		statText2: 'Increase in websote engagement',
	},
	{
		title: 'CryptoPresis',
		backgroundImage: 'url(' + SimlabsCover + ')',
		role: 'Website Design',
		link: 'https://simlabs.vercel.app',
		linkText: 'www.simlabs.io',
		title2: 'Involvment',
		paragraph1:
			'In 2021 during the cryptocurrency bull market and the newly-found asset class of NFTs (Non-Fungible Tokens), I Co-Founded Sim Labs, a software agency empowering artists and creators through web3 with a group of colleagues from El Salvador. My Involvement with Sim Labs encompassed serving as the lead developer and being directly involved with creature decentralized products for our clients.',
		alt: 'Sim Labs Website',
		title3: 'Involvment',
		paragraph2:
			'In 2021 during the cryptocurrency bull market and the newly-found asset class of NFTs (Non-Fungible Tokens), I Co-Founded Sim Labs, a software agency empowering artists and creators through web3 with a group of colleagues from El Salvador. My Involvement with Sim Labs encompassed serving as the lead developer and being directly involved with creature decentralized products for our clients.',
		stat1: '10%',
		statText1: 'Increase in Sales',
		stat2: '20%',
		statText2: 'Increase in websote engagement',
	},
];
