import React from 'react';
import { portfolioPage } from '../../data';

function Portfolio() {
	return (
		<>
			{portfolioPage.map((item, index) => (
				<>
					<section
						className="text-white dark:text-gray-300 py-28 bg-center bg-cover"
						key={index}
						style={item.backgroundImage}
					>
						<div className="container mx-auto px-4">
							<h2 className="text-lg font-bold uppercase">Customer</h2>
							<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">
								{item.title}
							</h1>

							<div className="text-lg md:flex gap-12">
								<div className="mb-4  md:mb-0">
									<span className="font-bold block mb-4">Role</span>
									{item.role}
								</div>

								<div>
									<span className="font-bold block mb-4">Visit Website</span>
									<a
										target="_blank"
										href={item.link}
										rel="noopener noreferrer"
										className="hover:underline"
									>
										{item.linkText}
									</a>
								</div>
							</div>
						</div>
					</section>
					<section className="border-black dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 border-t-2 py-16">
						<div className="container mx-auto px-4">
							<h1 className="text-3xl font-bold mb-4">{item.title2}</h1>
							<p className="text-lg max-w-xl mb-16">{item.paragraph1}</p>
							<img
								src={Portfolio1}
								alt={item.alt}
								width="1125"
								height="669"
								loading="lazy"
								className="mx-auto mb-16"
							/>

							<h1 className="text-3xl font-bold mb-4">{item.title3}</h1>
							<p className="text-lg max-w-xl mb-16">{item.paragraph2}</p>
							<ul className="text-lg flex gap-8">
								<li className="flex flex-col text-center border-black dark:border-gray-500 border-2 rounded-lg p-4">
									<span className="font-bold text-2xl">{item.stat1}</span>
									<span>{item.statText1}</span>
								</li>
								<li className="flex flex-col text-center border-black dark:border-gray-500 border-2 rounded-lg p-4">
									<span className="font-bold text-2xl">{item.stat2}</span>
									<span>{item.statText2}</span>
								</li>
							</ul>
						</div>
					</section>
				</>
			))}
		</>
	);
}

export default Portfolio;
