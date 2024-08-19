import { render } from "./render";
import { getProjects, saveProjects } from "./storage";

let currentProjectName = null;

export function setCurrentProject(projectName) {
    const projects = getProjects();
    // Find the project by its name
    const project = projects.find(p => p.projectName === projectName);

    if (project) {
        currentProjectName = projectName;
        render(getProjects(), getCurrentProject())
        return project; // Return the reference to the actual project object
    } else {
        return null;
    }
}

export function getCurrentProject() {
    const projects = getProjects();
    return projects.find(p => p.projectName === currentProjectName) || null;
}