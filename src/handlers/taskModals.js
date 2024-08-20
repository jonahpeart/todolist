import { getCurrentProject } from '../currentProjectState.js';
import { elements } from '../elements.js';
import { editTaskValidations, taskValidations } from '../formValidation.js'
import { newTask, editTask } from '../storage.js';

export function newTaskModalHandler() {
    elements.formError[1].innerHTML = '' // Clear error div
    elements.newTaskModal.newTaskModalTrigger.style.display="block" // show modal


/////////////// SUBMIT EVENT //////////////////////////////////////////////////////
    elements.newTaskModal.newTaskForm.addEventListener('submit', handleSubmit)
        
        function handleSubmit(e) {
        e.preventDefault();
        const validations = taskValidations(); /////Import Validation function
        const errorMessages = validations
            .filter(validation => validation.test(elements.newTaskModal[validation.field].value))
            .map(validation => validation.message);
        if (errorMessages.length > 0) {
            elements.formError[1].innerText = errorMessages.join("\r\n");
        } else if (errorMessages.length === 0) {
            elements.newTaskModal.newTaskModalTrigger.style.display="none" 
            newTask()
            elements.newTaskModal.newTaskForm.reset();
        }
    }; 
/////////////// CANCEL BUTTON ///////////////////////////////////////////////////
elements.newTaskModal.newTaskCancel.addEventListener('click', function(e) {
    e.preventDefault()
    elements.newTaskModal.newTaskForm.reset();
    elements.newTaskModal.newTaskForm.removeEventListener('submit', handleSubmit);
    elements.newTaskModal.newTaskModalTrigger.style.display="none" 
}); 
}

export function editTaskModalHandler(taskIndex) {
    taskIndex = Number(taskIndex)
    elements.formError[3].innerHTML = '' // Clear error div
    elements.editTaskModal.editTaskModalTrigger.style.display="block" // show modal

    const currentProjet = getCurrentProject()

    fillFields(currentProjet.tasks[taskIndex])



///////////// SUBMIT EVENT //////////////////////////////////////////////////////
    elements.editTaskModal.editTaskForm.addEventListener('submit', handleSubmit)
        
        function handleSubmit(e) {
        e.preventDefault();
        const validations = editTaskValidations(); /////Import Validation function
        const errorMessages = validations
            .filter(validation => validation.test(elements.editTaskModal[validation.field].value))
            .map(validation => validation.message);
        if (errorMessages.length > 0) {
            elements.formError[2].innerText = errorMessages.join("\r\n");
        } else if (errorMessages.length === 0) {
            elements.editTaskModal.editTaskModalTrigger.style.display="none" 

            editTask(taskIndex)
        }
    }; 
/////////////// CANCEL BUTTON ///////////////////////////////////////////////////
elements.editTaskModal.editTaskCancel.addEventListener('click', function(e) {
    e.preventDefault()
    elements.editTaskModal.editTaskModalTrigger.style.display="none" 
}); 
}


function fillFields(task){
    elements.editTaskModal.editTaskNameInput.value = task.title
    elements.editTaskModal.editTaskNotesInput.value = task.notes
    elements.editTaskModal.editTaskDueInput.value = task.dueDate
    elements.editTaskModal.editTaskUrgentInput.checked = task.urgent
}