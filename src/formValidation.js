export function projectValidations() {
    return [
        {
            test: (value) => value === '' || value == null,
            field: 'newProjectNameInput',
            message: 'Project name required',
        },
        {
            test: (value) => value.length >= 20,
            field: 'newProjectNameInput',
            message: 'Project name too long',
        },
        {
            test: (value) => /[`@$%^&*()_\-=\[\]{};':"\\|,.<>\/~]/.test(value),
            field: 'newProjectNameInput',
            message: 'Please only use letters',
        }
    ];
}

export function taskValidations() {
    return [
        {
            test: (value) => value === '' || value == null,
            field: 'newTaskNameInput',
            message: 'Task name required',
        },
        {
            test: (value) => value.length >= 20,
            field: 'newTaskNameInput',
            message: 'Task name too long',
        },
        {
            test: (value) => /[`@$%^&*()_\-=\[\]{};':"\\|,.<>\/~]/.test(value),
            field: 'newTaskNameInput',
            message: 'Please only use letters for task name',
        },
        {
            test: (value) => /[`@$%^&*()_\-=\[\]{};':"\\|,.<>\/~]/.test(value),
            field: 'newTaskNotesInput',
            message: 'Please only use letters for task notes',
        },
        {
            test: (value) => value.length >= 100,
            field: 'newTaskNotesInput',
            message: 'Task notes too long',
        },
        {
            test: (value) => value === '' || value == null,
            field: 'newTaskDueInput',
            message: 'Task due date required',
        }
    ];
}