

import React from 'react'
import { getProjects } from '../selectors/getProjects'

export const Projects = () => {

	const projects = getProjects();
	return (
		<div className="flex justify-center flex-wrap gap-32 mx-8 mt-48">
			{
				projects.map( ( item ) => {
					return(
						<div className="animate__animated animate__slideInDown shadow-inner">
							<p className="text-white text-center text-lg font-medium tracking-widest bg-gray-500">{item.name}</p>
							<div className="group relative flex justify-center mb-8">
								<img className="border-2" src={`assets/project${item.id}.png`}/>
								<a className="absolute grid justify-center items-center w-full h-full rounded-xl bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 cursor-pointer" href={`${item.website}`} target="_blank">
								<div className="animate__animated animate__bounceInLeft flex flex-wrap gap-4 justify-center">
									{
										(Object.values(item.technical__sheet)).map( ( skill ) => {
											return(
												<div className="bg-white/90 text-black px-4 rounde font-bold tracking-wider shadow-2xl">{skill}</div>
											)
										})
									}
									<div className="bg-sky-900 text-white px-4 py-2 rounde font-bold tracking-wider shadow-2xl mt-12">More...</div>
								</div>
								</a>
							</div>
						</div>
					)
				} )
			}
		</div>
	)
}