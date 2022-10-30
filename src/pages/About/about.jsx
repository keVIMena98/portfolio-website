import React from 'react';
import { socials } from '../../data';
import { HeroMd } from '../../assets';
import Scroller from '../../components/Scroller';
import ContactButton from '../../components/ContactButton';

function About() {
	return (
		<>
			<section className="py-12 border-x-2 border-black dark:border-gray-500 dark:bg-gray-800">
				<div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
					<div className="dark:text-gray-300">
						<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
							My Story
						</h1>
						<p className="mb-2 text-lg">
							Hi! I'm Ackermann, A Full-Stack Engineer and Web Developer from
							Latin America. Venturing into the tech industry and bringing my
							talents along with me.
						</p>
						<p className="mb-2 text-lg">
							I mainly work with front-end frameworks like React, Vite and Vue.
							For back-end frameworks I focus on ExpressJs and NodeJS libraries
							with MongoDB and PostreSQL.
						</p>
						<div className="text-lg font-bold">Find me on:</div>
						<div className="mb-8">
							<ul className="flex gap-6">
								{socials.map((item, index) => (
									<li key={index}>
										<a
											target="_blank"
											href={item.link}
											rel="noopener noreferrer"
											className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
										>
											{item.name}
											<img
												src={item.icon}
												alt={item.alt}
												width="48px"
												height="48px"
											/>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<img
							src={HeroMd}
							alt="Me programming"
							className="border-black dark:border-gray-500 border-2 rounded-xl mb-8"
						/>
					</div>
				</div>
			</section>
			<Scroller />
			<ContactButton />
		</>
	);
}

export default About;
