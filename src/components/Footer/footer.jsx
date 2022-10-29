import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, LogoDark } from '../../assets';
import Arrow from '../Arrow';

function Footer() {
	return (
		<footer className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black dark:border-gray-500 border-2 bg-white dark:bg-gray-800 dark:text-gray-300 sticky">
			<Link
				to="/"
				className="flex py-4 align-middle justify-center border-black dark:border-gray-500 border-r-2"
			>
				<img
					src={Logo}
					className="block dark:hidden"
					alt="Ackermann"
					width="150"
					height="24"
				/>
				<img
					src={LogoDark}
					className="hidden dark:block"
					alt="Ackermann"
					width="150"
					height="24"
				/>
			</Link>
			<Link
				to="/contact"
				className="md:col-start-3 border-black dark:border-gray-500 md:vorder-1-2 flex gap-2 items-center justify-center text-lg bg-yellow-300 dark:bg-purple-900 hover:bg-yellow-500 ease-in-out duration-75"
			>
				<Arrow />
				Let's Talk
			</Link>
			<div className="col-span-2  md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center justify-center text-center">
				&copy; Copyright {new Date().getUTCFullYear()} Ackermann &#9679; Built
				with ReactJS &#9679; Hosted on GitHub
			</div>
		</footer>
	);
}

export default Footer;
