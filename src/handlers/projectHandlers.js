import { elements } from '../elements.js';
import {editProjectModalHandler, newProjectModalHandler} from './projectModals.js';
import { setCurrentProject } from '../currentProjectState.js';

export default function projectHandlers() {
//////////NEW PROJECT EVENT////////////////////////////////////////////////
    elements.sidebar.newProject.addEventListener('click', () => {
        newProjectModalHandler()
    });
//////////EDIT PROJECT EVENT///////////////////////////////////////////////
        elements.editProject.addEventListener('click', () => {
                editProjectModalHandler()
        });   
/////////PROJECT LIST ITEM CLICK EVENT/////////////////////////////////////
    elements.sidebar.projectContainer.addEventListener('click', e => {
        if (e.target.matches(".project-sidebar-li")){
            setCurrentProject(e.target.textContent)
        }
    });
}