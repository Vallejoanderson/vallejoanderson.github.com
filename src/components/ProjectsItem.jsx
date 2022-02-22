
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProjectById } from '../selectors/getProjectById';

export const ProjectsItem = () => {
	let navigate = useNavigate();
	let { projectId } = useParams();
	const { id,
					name,
					description,
					technical__sheet,
					website,
					github } = getProjectById(projectId);
	const goBack = () => {
		navigate(-1);
	}
	return (
		<div className="text-white mx-8 mt-8 text-center animate__animated animate__pulse">
				<div onClick = { goBack } className="text-left cursor-pointer">
					<i class="las la-angle-left la-2x"></i>
				</div>
				<h2 className="text-center font-medium mb-1 text-xl">{name}</h2>
				<h3 className="italic text-center text-sm mb-2 text-gray-300">{description}</h3>
				<a href={website} target="blank" className="flex justify-center gap-44 mb-2 mt-8 mx-auto">
					<div className="flex bg-gray-500 rounded px-2 cursor-pointer">
						<i class="las la-share-square la-2x"></i>
						<p className="mt-1 ml-2 text-sm pt-1">VISIT THE WEBSITE</p>
					</div>
					<a href={github} target="_blank" className="cursor-pointer">
						<i class="lab la-github la-2x"></i>
					</a>
				</a>
				<img className="border-2 border-white rounded mx-auto" src={`/assets/project${id}.png`} />
				<h2 className="text-xl font-medium mt-8 mb-4">Technical Sheet</h2>
				<h3 className="text-sm text-gray-200 text-gray-300 mb-4">Code Technologies I got involved while working on this project.</h3>
				<ul className="mt-2">
				{
					(Object.values(technical__sheet)).map( ( skill ) => {
						return(
							<li className="list-disc list-inside text-gray-300" key={id + skill}
								>{skill}
							</li>
						)
					})
				}
				</ul>
		</div>
	)
}
