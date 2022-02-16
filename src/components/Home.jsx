
import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css";

export const Home = () => {
	return (
		<div className="text-slate-50 text-center mt-72 animate__animated animate__slideInDown ">
			<h1 className='font-monserrat text-4xl md:text-7xl'>
				<span className="font-bold">FRONT-END </span>
				<span className="font-light">DEVELOPER</span>
			</h1>
			<div className="mt-8 text-base md:text-xl tracking-wide">
				<p className="font-medium font-raleway">I'm Anderson Vallejo, self-taught front-end developer. 
				</p>
				<p className="font-medium font-raleway">I love coding and solving problems.</p>
			</div>
			<Link to='/projects'>
				<div className="text-slate-50 border-2 inline-block px-16 py-4 mt-12 text-base md:text-xl cursor-pointer hover:bg-white hover:text-black tracking-widest">
					PROJECTS
				</div>
			</Link>
		</div>
	)
}
