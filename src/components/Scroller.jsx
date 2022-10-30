import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Scroller() {
	return (
		<section>
			<Link to="/contact">
				<Marquee
					pauseonHover
					gradient={false}
					className="bg-yellow-300 dark:bg-purple-900 border-t-2 border-black dark:border-gray-500 dark:text-gray-300 py-2 font-bold text-4xl"
				>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
						width="100px"
						height="100px"
						alt="HTML"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
						width="100px"
						height="100px"
						alt="CSS"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
						width="100px"
						height="100px"
						alt="JavaScript"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
						width="100px"
						height="100px"
						alt="Typescript"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
						width="100px"
						height="100px"
						alt="Solidity"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="PostreSQL"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="SQLite"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="Tailwind CSS"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="React"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="Express"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="NodeJS"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="Git"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="GitHub"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="MongoDB"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
						width="100px"
						height="100px"
						alt="Python"
						style={{ margin: '0px 40px' }}
					/>
				</Marquee>
			</Link>
		</section>
	);
}

export default Scroller;
