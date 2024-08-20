import style from './styles.css';
import { addProject, getProjects } from './storage.js';
import { setCurrentProject } from './currentProjectState.js';
import projectHandlers from './handlers/projectHandlers.js';
import { initializeElements } from './elements.js';


// localStorage.clear();


const projects = getProjects()
initializeElements()
projectHandlers();

const todayProjectExists = projects.some(project => project.projectName === "Today");
if (!todayProjectExists){
    addProject("Today")
} else {
    setCurrentProject("Today")
    
}


