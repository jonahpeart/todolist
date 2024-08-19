import { getCurrentProject, setCurrentProject } from './currentProjectState.js';
import { elements, initializeElements } from './elements.js';
import { render} from './render.js';

// Utility functions for localStorage operations
function getProjects() {

    const projects = localStorage.getItem('projects');
    if (!projects || projects === "undefined") {
        return [];
    }
    return projects ? JSON.parse(projects) : [];
}

function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to add a project
function addProject(newProjectName) {
    const newProject = {
        projectName: newProjectName,
        tasks: []
    };

    const projects = getProjects();
    projects.push(newProject);
    saveProjects(projects);

    setCurrentProject(newProject.projectName)
}


// Function to add a task to the current project (you can expand this as needed)
function newTask() {
    const newTask = {
        title: elements.newTaskModal.newTaskNameInput.value,
        notes: elements.newTaskModal.newTaskNotesInput.value,
        dueDate: elements.newTaskModal.newTaskDueInput.value,
        urgent: elements.newTaskModal.newTaskUrgentInput.checked
    };

    let currentProject = getCurrentProject();

    currentProject.tasks.push(newTask);

    const projects = getProjects();

    const projectIndex = projects.findIndex(project => project.projectName === currentProject.projectName);

    if (projectIndex !== -1) {
        projects[projectIndex] = currentProject;
    }

    saveProjects(projects);
    setCurrentProject(currentProject.projectName) // re set current project to render with new task
}

function deleteTask(currentProject, taskIndex) {
    taskIndex = Number(taskIndex)

    let projects = getProjects()
    const projectIndex = projects.findIndex(project => project.projectName === currentProject.projectName);

    if (projectIndex !== -1) {
        const project = projects[projectIndex];
        project.tasks.splice(taskIndex, 1);
        saveProjects(projects);

        setCurrentProject(project.projectName) // reset current project to render
    }

}

export { getProjects, saveProjects, addProject, newTask, deleteTask };