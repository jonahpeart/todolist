import style from './styles.css';
import { addProject, getProjects } from './storage.js';
import { setCurrentProject } from './currentProjectState.js';

// localStorage.clear();

const projects = getProjects()

const todayProjectExists = projects.some(project => project.projectName === "Today");
if (!todayProjectExists){
    addProject("Today")
} else {
    setCurrentProject("Today")
}


