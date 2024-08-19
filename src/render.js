import { getCurrentProject } from './currentProjectState.js';
import { initializeElements, elements } from './elements.js';
import projectHandlers from './handlers/projectHandlers.js';
import taskHandlers from './handlers/taskHandlers.js';

export const render = (savedProjects, currentProject) => {
    initializeElements();
    // Render projects
    const projectContainer = document.getElementsByClassName("projects-ul")[0];
    clearContainer(projectContainer);

    savedProjects.forEach((project, index) => {
        const projectHTML = `<li class="project-sidebar-li ${index}">${project.projectName}</li>`;
        insertHTML(projectContainer, projectHTML);
    });

        displayCurrentProjectName(currentProject.projectName);

        const taskListContainer = document.getElementsByClassName("task-list-container")[0];
        clearContainer(taskListContainer);

        if (currentProject.tasks.length > 0) {
            currentProject.tasks.forEach((task, index) => {
                const taskHTML = generateTaskHTML(task, index);
                insertHTML(taskListContainer, taskHTML);

                if (task.urgent) {
                    addUrgentClass(index);
                }
            });
        }

    // projectHandlers(); // Re-attach project handlers if needed
    taskHandlers(); // Adds event listeners to tasks
};

// Utility functions
const clearContainer = (container) => {
    container.innerHTML = '';
};

const insertHTML = (container, html) => {
    container.insertAdjacentHTML('beforeend', html);
};

const displayCurrentProjectName = (projectName) => {
    const currentProject = getCurrentProject()

    if (currentProject.projectName === "Today"){
        elements.editProject.style.display = "none"
        elements.header.currentProjectTitle.innerHTML = `<span class="current-project-inner-title ${1}">// ${projectName} // </span> <br> Project`;
    } else {
        elements.editProject.style.display = "block"
        elements.header.currentProjectTitle.innerHTML = `<span class="current-project-inner-title ${1}">// ${projectName} // </span> <br> Project`;
    }
};

const generateTaskHTML = (task, index) => `
    <li class="task-item-container">
        <div class="round"></div>
        <p class="task-title task-title-${index}">${task.title}</p>
        <span class="material-symbols-outlined task-item edit-task">edit</span>
        <span id="${index}" class="material-symbols-outlined task-item delete-task ${index}">delete</span>
        <div class="notes-div">
            <p class="subscript task-notes-${index}">Notes:</p>
            <p class="task-notes">${task.notes}</p>
        </div>
        <p class="task-due">Due: ${task.dueDate}</p>
    </li>
`;

const addUrgentClass = (index) => {
    const urgentFlag = document.getElementsByClassName(`task-title-${index}`)[0];
    urgentFlag.classList.add("urgent");
};







// import { initializeElements, elements } from './elements.js';
// import projectHandlers from './handlers/projectHandlers.js';
// import taskHandlers from './handlers/taskHandlers.js';
// import { getCurrentProject } from './currentProjectState.js';

// export const renderProjects = (savedProjects) => {

//     const defaultProjectContainer = document.getElementsByClassName("projects-ul")[0];

//     clearContainer(defaultProjectContainer);

//     savedProjects.forEach((project, index) => {
//         const projectHTML = `<li class="project-sidebar-li ${index}">${project.projectName}</li>`;
//         insertHTML(defaultProjectContainer, projectHTML);
//     });

//     initializeElements();

// };

// export const renderTasks = (project) => {


//     displayCurrentProjectName(project.projectName);

//     const taskListContainer = document.getElementsByClassName("task-list-container")[0];
//     clearContainer(taskListContainer);

//     if (project.tasks.length > 0) {
//         project.tasks.forEach((task, index) => {
//             const taskHTML = generateTaskHTML(task, index);
//             insertHTML(taskListContainer, taskHTML);

//             if (task.urgent) {
//                 addUrgentClass(index);
//             }
//         });
//     }
//     initializeElements();
//     taskHandlers(); // Adds event listeners to tasks
//     projectHandlers(); // Re-attach project handlers if needed
// };

// const clearContainer = (container) => {
//     container.innerHTML = '';
// };

// const insertHTML = (container, html) => {
//     container.insertAdjacentHTML('beforeend', html);
// };

// const displayCurrentProjectName = (projectName) => {
//     elements.header.currentProjectTitle.innerHTML = `<span class="current-project-inner-title">// ${projectName} // </span> <br> Project`;
// };

// const generateTaskHTML = (task, index) => `
//     <li class="task-item-container">
//         <div class="round"></div>
//         <p class="task-title task-title-${index}">${task.title}</p>
//         <span class="material-symbols-outlined task-item edit-task">edit</span>
//         <span id="${index}" class="material-symbols-outlined task-item delete-task">delete</span>
//         <div class="notes-div">
//             <p class="subscript task-notes-${index}">Notes:</p>
//             <p class="task-notes">${task.notes}</p>
//         </div>
//         <p class="task-due">Due: ${task.dueDate}</p>
//     </li>
// `;

// const addUrgentClass = (index) => {
//     const urgentFlag = document.getElementsByClassName(`task-title-${index}`)[0];
//     urgentFlag.classList.add("urgent");
// };