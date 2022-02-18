

import React from 'react'
import { getProjects } from '../selectors/getProjects'

export const Projects = () => {

	const projects = getProjects();
	return (
		<div className="flex justify-center flex-wrap gap-32 mt-48">
			{
				projects.map( ( item ) => {
					return(
						<div className="group relative flex justify-center mb-8">
							<img className="animate__animated animate__slideInDown border-2" src={`assets/project${item.id}.png`}/>
							<a className="absolute grid justify-center items-end w-full h-full rounded-xl bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 cursor-pointer" href={`${item.website}`} target="_blank">
								<div>
									<a target="_blank" href={`${item.github}`}>
										<i class="lab la-github la-4x text-black bg-white rounded-lg mb-2"></i>
									</a>
								</div>
							</a>
						</div>
					)
				} )
			}
		</div>
	)
}