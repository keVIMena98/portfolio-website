import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Scroller({ text }) {
	return (
		<section>
			<Link to="/contact">
				<Marquee
					pauseonHover
					gradient={false}
					className="bg-yellow-300 dark:bg-purple-900 border-t-2 border-black dark:border-gray-500 dark:text-gray-300 py-2 font-bold text-4xl"
				>
					{text}
				</Marquee>
			</Link>
		</section>
	);
}

export default Scroller;
