import { elements } from '../elements.js';
import newProjectModalHandler from './newProjectModalHandler.js';
import { getProjects } from '../storage.js';
import { setCurrentProject } from '../currentProjectState.js';

export default function projectHandlers() {
//////////NEW PROJECT EVENT////////////////////////////////////////////////
    elements.sidebar.newProject.addEventListener('click', () => {
        newProjectModalHandler()
    });
//////////EDIT PROJECT EVENT///////////////////////////////////////////////
    elements.editProject.addEventListener('click', () => {
        elements.editProjectModal.editProjectModalTrigger.style.display="block"
        console.log('Edit Project clicked');
    });
/////////PROJECT LIST ITEM CLICK EVENT/////////////////////////////////////
        Array.prototype.forEach.call(elements.sidebar.projectListItem.projectTitle, function (node){
            node.addEventListener('click', () => {
            setCurrentProject(node.textContent)
            });
        })
    }