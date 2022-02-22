

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../selectors/getProjects'

export const Projects = () => {

	const projects = getProjects();
	let navigate = useNavigate();
	return (
		<div className="flex justify-center flex-wrap gap-32 mx-8 mt-48">
			{
				projects.map( ( item ) => {
					return(
						<div key={ item.id }
								 className="animate__animated animate__slideInDown shadow-inner"
								 onClick = { () => navigate(`${item.id}`) }
						>
							<p className="text-white text-center text-lg font-medium tracking-widest bg-gray-500">{item.name}</p>
							<div className="group relative flex justify-center mb-8">
								<img className="border-2" src={`assets/project${item.id}.png`}/>
								<a className="absolute grid justify-center items-center w-full h-full rounded-xl bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 cursor-pointer">
								<div className="flex flex-col">
									<div className="animate__animated animate__bounceInLeft flex flex-wrap gap-4 justify-center">
										{
											(Object.values(item.technical__sheet)).map( ( skill ) => {
												return(
													<div key={item.id + skill}
															className="bg-white/90 text-black px-2 rounde font-bold tracking-wide shadow-xl">{skill}
													</div>
												)
											})
										}
									</div>
									<div className="bg-sky-900 w-1/4 text-center text-white px-2 rounde font-bold tracking-wider shadow-2xl	mx-auto mt-16">More...</div>
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