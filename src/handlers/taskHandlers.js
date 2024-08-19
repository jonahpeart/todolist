import { getCurrentProject } from '../currentProjectState.js';
import { elements } from '../elements.js';
import { deleteTask } from '../storage.js';
import newTaskModalHandler from './newTaskModalHandler.js';

export default function taskHandlers() {
///////////NEW TASK LIST ITEM EVENT////////////////////////////////////////////////////
    elements.addTask.addEventListener('click', () => {
        newTaskModalHandler()
    });
///////////TASK LIST ITEM CHECKMARK EVENT////////////////////////////////////////////////////
    Array.prototype.forEach.call(elements.taskListItem.taskChecks, function (node){
        node.addEventListener('click', () => {
            node.classList.contains("checked") ? node.classList.remove("checked") : node.classList.add("checked");
        });
    })
///////////TASK LIST ITEM EDIT EVENT////////////////////////////////////////////////////
    Array.prototype.forEach.call(elements.taskListItem.editTasks, function (node){
        node.addEventListener('click', () => {
            elements.editTaskModal.editTaskModalTrigger.style.display="block"
            console.log(`task you want to edit: ${node.parentNode.childNodes[3].childNodes[0].textContent}`)
        });
    })
///////////TASK LIST ITEM DELETE EVENT////////////////////////////////////////////////////
    Array.prototype.forEach.call(elements.taskListItem.deleteTasks, function (node){
        node.addEventListener('click', () => { 
            const currentProject = getCurrentProject()

            // console.log(node.classList[3])
            deleteTask(currentProject, node.classList[3])

        });
    })
}
