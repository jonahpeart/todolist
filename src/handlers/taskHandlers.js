import { getCurrentProject } from '../currentProjectState.js';
import { elements } from '../elements.js';
import { completeState, deleteTask, getProjects } from '../storage.js';
import {newTaskModalHandler, editTaskModalHandler} from './taskModals.js';

export default function taskHandlers() {
///////////NEW TASK LIST ITEM EVENT////////////////////////////////////////////////////
    elements.addTask.addEventListener('click', () => {
        newTaskModalHandler()
    });
///////////TASK LIST ITEM CHECKMARK EVENT////////////////////////////////////////////////////
    Array.prototype.forEach.call(elements.taskListItem.taskChecks, function (node){
        node.addEventListener('click', () => {
            completeState(node)
        });
    })
///////////TASK LIST ITEM EDIT EVENT////////////////////////////////////////////////////
    Array.prototype.forEach.call(elements.taskListItem.editTasks, function (node){
        node.addEventListener('click', () => {
            editTaskModalHandler(node.classList[3])
        });
    })
///////////TASK LIST ITEM DELETE EVENT////////////////////////////////////////////////////
    Array.prototype.forEach.call(elements.taskListItem.deleteTasks, function (node){
        node.addEventListener('click', () => { deleteTask(getCurrentProject(), node.classList[3])});
    })
}
