import { getCurrentProject, setCurrentProject } from './currentProjectState.js';
import { elements } from './elements.js';

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

    projects[projectIndex] = currentProject;


    saveProjects(projects);
    setCurrentProject(currentProject.projectName) // re set current project to render with new task
}

function deleteTask(currentProject, taskIndex) {
    taskIndex = Number(taskIndex)

    let projects = getProjects()
    const projectIndex = projects.findIndex(project => project.projectName === currentProject.projectName);

    const project = projects[projectIndex];
    project.tasks.splice(taskIndex, 1);
    saveProjects(projects);

    setCurrentProject(project.projectName) // reset current project to render


}

function editProject(newName){
    const projects = getProjects()
    const currentProject = getCurrentProject()

    const projectIndex = projects.findIndex(project => project.projectName === currentProject.projectName);

    projects[projectIndex].projectName = newName
    saveProjects(projects)
    setCurrentProject(newName)

    elements.editProjectModal.editProjectModalTrigger.style.display = "none"  
}

function deleteProject(){
    const currentProject = getCurrentProject()

    let projects = getProjects()
    const projectIndex = projects.findIndex(project => project.projectName === currentProject.projectName);
    

    projects.splice(projectIndex, 1);
    saveProjects(projects);
    setCurrentProject("Today") // reset current project to rtoday after a project is delete
    
}

function editTask(taskIndex){
    const edittedTask = {
        title: elements.editTaskModal.editTaskNameInput.value,
        notes: elements.editTaskModal.editTaskNotesInput.value,
        dueDate: elements.editTaskModal.editTaskDueInput.value,
        urgent: elements.editTaskModal.editTaskUrgentInput.checked
    };

    const currentProject = getCurrentProject()
    let projects = getProjects()
    const projectIndex = projects.findIndex(project => project.projectName === currentProject.projectName);
    projects[projectIndex].tasks[taskIndex] = edittedTask
    saveProjects(projects);
    setCurrentProject(currentProject.projectName)

}

export { getProjects, saveProjects, addProject, newTask, deleteTask, editProject, deleteProject, editTask };