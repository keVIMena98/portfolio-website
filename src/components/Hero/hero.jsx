import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Arrow from '../../components/Arrow';
import { HeroSm, HeroMd, HeroLg } from '../../assets';

function Hero() {
	return (
		<section className="py-10 lg:py-36 xl:py-48 dark:bg-gray-800">
			<div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center">
				<div className="md:flex-1 md:order-2">
					<picture className="flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)] dark:drop-shadow-[10px_-10px_0_rgba(125,0,175,1)] rounded-tl-[150px] rounded-br-[150px] rounded-xl overflow-hidden border-black dark:border-gray-500">
						<source
							srcSet={HeroSm}
							width="363"
							height="222"
							media="(max-width: 400px)"
							type="image/png"
						/>
						<source
							srcSet={HeroMd}
							width="608"
							height=""
							media="(max-width: 400px)"
							type="image/png"
						/>
						<img
							src={HeroLg}
							width="870"
							height="532"
							alt="Me working hard on a computer"
							type="image/png"
						/>
					</picture>
				</div>
				<div className="md:flex-1 dark:text-gray-300">
					<h2 className="text-lg md:text-xl font-bold uppercase">
						Hi! I'm Ackermann.
					</h2>
					<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
						{' '}
						Web Developer<span className="text-yellow-400">. </span>
						<br />
						Full-Stack Engineer
						<span className="text-violet-900">.</span>
					</h1>
					<p className="text-lg max-w-xl mb-6">
						I am a self-taught Web Developer and Full-Stack Engineer with a keen
						interest in Web3 and Blockchain development. All coding projects are
						built from the ground up, from planning and designing all the way to
						solving real-life problems with code.
					</p>
					<div className="flex items-baseline gap-4">
						<HashLink
							to="#portfolio"
							className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white dark:text-gray-900"
						>
							Portfolio
						</HashLink>
						<Link
							// to="/contact"
							className="px-6 py-4 rounded-md text-black dark:text-gray-300 flex gap-2"
						>
							Let's Talk
							<Arrow />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
