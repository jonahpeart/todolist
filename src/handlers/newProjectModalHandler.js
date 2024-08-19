import { elements, initializeElements } from '../elements.js';
import { projectValidations } from '../formValidation.js'
import {addProject} from '../storage.js';

export default function newProjectModalHandler() {
    elements.formError[0].innerHTML = '' // Clear error div
    elements.newProjectModal.newProjectModalTrigger.style.display="block" // show modal

/////////////// SUBMIT EVENT //////////////////////////////////////////////////////
    elements.newProjectModal.newProjectForm.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        const validations = projectValidations(); /////Import Validation function
        let errorMessages = []
        const value = elements.newProjectModal.newProjectNameInput.value;
        errorMessages = validations
            .filter(validation => validation.test(value))
            .map(validation => validation.message);

        if (errorMessages.length > 0) {
            elements.formError[0].innerText = errorMessages.join("\r\n");
        } else if (errorMessages.length === 0) {
            addProject(elements.newProjectModal.newProjectNameInput.value)
            elements.newProjectModal.newProjectNameInput.value = '';
            elements.newProjectModal.newProjectModalTrigger.style.display="none" 
        }
    }
    /////////////// CANCEL BUTTON ///////////////////////////////////////////////////
    elements.newProjectModal.newProjectCancel.addEventListener('click', function(e) {
        elements.newProjectModal.newProjectForm.removeEventListener('submit', handleSubmit);
        elements.newProjectModal.newProjectNameInput.value = '';
        elements.newProjectModal.newProjectModalTrigger.style.display = 'none';
    });


}