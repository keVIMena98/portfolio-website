import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../../assets';
import Arrow from '../Arrow';

const activeClassName =
	'relative before:content-[' *
	'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400';

function Header() {
	return (
		<header className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white sticky">
			<Link
				to="/"
				className="flex py-4 align-middle justify-center border-black border-r-2"
			>
				<img src={Logo} alt="Kevin" width="150" height="24" />
			</Link>
			<Link
				to="/contact"
				className="md:col-start-3 border-black md:vorder-1-2 flex gap-2 items-center justify-center text-lg bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-75"
			>
				<Arrow />
				Let's Talk
			</Link>
			<nav className="col-span-2  md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center justify-center">
				<ul className="flex gap-6 max-w-sm overflow-auto snap-always p-4 text-lg font-bold">
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
				</ul>
			</nav>
		</header>
	);
}

export default Header;
