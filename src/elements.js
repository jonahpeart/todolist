let elements
export function initializeElements(){ 
elements = {
    formError: document.querySelectorAll(".error-message"),
    addTask: document.querySelector(".add-task"),
    editProject: document.querySelector(".edit-project"),
    sidebar:{
        newProject: document.querySelector(".add-project"),
        projectContainer: document.querySelector(".projects-ul"),
        projectListItem:{
            get projectTitle() { 
                return document.querySelectorAll(".project-sidebar-li");
            },
        }
    },
    header: {
        currentProjectTitle: document.querySelector(".current-project-text"),
        newTask: document.querySelector(".add-task"),
        editProject: document.querySelector(".edit-project"),
    },
    taskListItem: {
        get taskChecks() { 
            return document.querySelectorAll(".round");
        },
        get editTasks() { 
            return document.querySelectorAll(".edit-task");
        },
        get deleteTasks() { 
            return document.querySelectorAll(".delete-task");
        },
    },
    newProjectModal:{
        newProjectForm: document.querySelector(".new-project-form"),
        newProjectModalTrigger: document.querySelector(".modal-project-trigger"),
        newProjectNameInput: document.querySelector(".new-project-modal-input"),
        newProjectCancel: document.querySelector(".cancel-project"),
        newProjectCreate: document.querySelector(".create-project"),
    },
    editProjectModal:{
        editProjectForm: document.querySelector(".edit-project-form"),
        editProjectModalTrigger: document.querySelector(".modal-edit-project-trigger"),
        editProjectNameInput: document.querySelector(".edit-project-modal-input"),
        editProjectCancel: document.querySelector(".edit-cancel-project"),
        editProjectDelete: document.querySelector(".delete-project"),
        editProjectSave: document.querySelector(".save-project"),
    },
    newTaskModal:{
        newTaskForm: document.querySelector(".new-task-form"),
        newTaskModalTrigger: document.querySelector(".modal-task-trigger"),
        newTaskNameInput: document.querySelector(".new-task-modal-input-name"),
        newTaskNotesInput: document.querySelector(".create-task-notes-input"),
        newTaskDueInput: document.querySelector(".due-create"),
        newTaskUrgentInput: document.querySelector(".urgent-checkbox-create"),
        newTaskCancel: document.querySelector(".cancel-task"),
        newTaskCreate: document.querySelector(".create-task"),
    },
    editTaskModal:{
        editTaskForm: document.querySelector(".edit-task-form"),
        editTaskModalTrigger: document.querySelector(".modal-edit-task-trigger"),
        editTaskNameInput: document.querySelector(".edit-task-modal-input-name"),
        editTaskNotesInput: document.querySelector(".edit-task-notes-input"),
        editTaskDueInput: document.querySelector(".due-edit"),
        editTaskUrgentInput: document.querySelector(".urgent-checkbox-edit"),
        editTasCancel: document.querySelector(".cancel-task-edit"),
        editTasCreate: document.querySelector(".save-task"),
    }
}
}

export { elements };