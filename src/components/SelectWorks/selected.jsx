import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../Arrow';
import { portfolioData } from '../../data';
import { PortfolioPattern } from '../../assets';

function SelectedWorks() {
	return (
		<section
			id="work"
			className="px-4 pb-12 border-black border-t-2 bg-teal-600 bg-fixed"
			style={{ backgroundImage: 'url(' + PortfolioPattern + ')' }}
		>
			<div className="container mx-auto">
				<div className="text-white text-center py-12">
					<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
						Selected Work
					</h1>
					<p className="max-w-xl mx-auto text-lg">
						I've been developing website for a while, but I also equally enjoy
						creating web2 and web3 applications.
					</p>
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-8 md-28">
				{portfolioData.map((item, index) => (
					<Link
						to={item.link}
						key={index}
						className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
					>
						<div className="border-2 border-black rounded-xl overflow-hidden bg-black">
							<img src={item.thumbnail} alt={item.alt} loading="lazy" />
						</div>
						<div className="bg-white border-x-2 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center">
							<div>
								<span className="font-bold ">{item.title}</span>
								<span className="text-zinc-400"> &#9679; {item.category}</span>
							</div>
							<Arrow />
						</div>
					</Link>
				))}
			</div>
			<Link
				to={'/portfolio'}
				className="flex text-xl gap-4 font-bold text-white justify-center my-8"
			>
				View my portfolio
				<Arrow />
			</Link>
		</section>
	);
}

export default SelectedWorks;
