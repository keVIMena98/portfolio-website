import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo, LogoDark } from '../../assets';
import Arrow from '../Arrow';
import useDarkMode from '../../hooks/darkMode';
import { FaSun, FaMoon } from 'react-icons/fa';

const activeClassName =
	'relative before:content-[' *
	'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400';

const ThemeIcon = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);
	return (
		<span onClick={handleMode}>
			{darkTheme ? (
				<FaSun size="24" className="top-navigation-icon" />
			) : (
				<FaMoon size="24" className="top-navigation-icon" />
			)}
		</span>
	);
};

function Header() {
	return (
		<header className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white sticky dark:border-gray-500 dark:bg-gray-800">
			<Link
				to="/"
				className="flex py-4 align-middle justify-center border-black border-r-2 dark:border-gray-500"
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
				className="md:col-start-3  md:vorder-1-2 flex gap-2 items-center justify-center text-lg ease-in-out duration-75 border-black bg-yellow-300  hover:bg-yellow-500 dark:border-gray-500 dark:bg-purple-900 dark:text-gray-300"
			>
				<Arrow />
				Let's Talk
			</Link>
			<nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 md:border-t-0 flex items-center justify-center border-black dark:border-gray-500 dark:text-gray-300">
				<ul className="flex gap-6 max-w-md overflow-auto snap-always p-4 text-lg font-bold">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li>
						<ThemeIcon />
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
