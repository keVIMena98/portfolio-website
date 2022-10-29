import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../components/Arrow';
import { Services } from '../../assets';

function ServicesSection() {
	return (
		<section className="border-black dark:border-gray-500 dark:bg-gray-800 border-t-2 px-4 py-12">
			<div className="container mx-auto dark:text-gray-300">
				<div className="text-center py-12">
					<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
						What I Can Do
					</h1>
					<p className="max-w-xl mx-auto text-lg">
						I've been developing websites for a while, but I also equally enjoy
						creating web2 and web3 applications.
					</p>
				</div>
				<div className="text-black dark:text-gray-300 py-12 grid lg:grid-cols-4 items-center">
					<div>
						<h3 className="text-3xl font-bold mb-4'">Web Development</h3>
						<p className="mb-4 text-lg">
							I specialize in designing and developing beautiful and elegant
							websites.
						</p>
						<Link
							to={'/'}
							className="flex gap-2 items-center font-bold mb-14 text-lg"
						>
							Read More
							<Arrow />
						</Link>
						<h3 className="text-3xl font-bold mb-4">Full-Stack Development</h3>
						<p className="mb-4 text-lg">
							As a jack of all trades, I can develop a full-stack web app from
							beginning to end using the PostreSQL, Express, React & NodeJS
							(PERN) Stack.
						</p>
						<Link
							to={'/'}
							className="flex gap-2 items-center font-bold mb-14 text-lg"
						>
							Read More
							<Arrow />
						</Link>
					</div>
					<div className="flex justify-center mb-12 md:mb-0 col-span-2">
						<img
							src={Services}
							alt="What I Can Do"
							width="611"
							height="764"
							loading="lazy"
							className="border-2 border-black dark:border-gray-500 rounded-full w-3/5 drop-shadow-[10px_-10_0_rgba(150,204,21,1)]"
						/>
					</div>
					<div>
						<h3 className="text-3xl font-bold mb-4">Ethereum Development</h3>
						<p className="mb-4 text-lg">
							I can build a decentralized application on the Ethereum blockchain
							using Hardat or Remix.
						</p>
						<Link
							to={'/'}
							className="flex gap-2 items-center font-bold mb-14 text-lg"
						>
							Read More
							<Arrow />
						</Link>
						<h3 className="text-3xl font-bold mb-4">
							Specific Software Solutions
						</h3>
						<p className="mb-4 text-lg">
							I build software that can solved from specific to a wide range on
							problems to automate processes.
						</p>
						<Link
							to={'/'}
							className="flex gap-2 items-center font-bold mb-14 text-lg"
						>
							Read More
							<Arrow />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesSection;
