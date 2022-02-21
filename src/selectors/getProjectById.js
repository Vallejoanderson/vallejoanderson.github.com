
import { projects } from '../data/projects'

export const getProjectById = ( id = '' ) => {
	console.log('You called getProjectById with id: ', id);
	return projects.find( project => project.id === id );
}