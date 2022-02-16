

import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<div className="font-raleway tracking-wider">
			<ul className="flex justify-center lg:justify-start gap-16 lg:pl-28 pt-16 text-slate-50 text-sm md:text-base">
				<Link to="/" className="font-extrabold cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150">AV</Link>
				<Link to="/projects" className="font-medium cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150">PROJECTS</Link>
				<Link to="/contact" className="font-medium cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150">CONTACT</Link>	
			</ul>
		</div>
	)
}