class Todo {
    constructor() {
        this.totalTasks = document.getElementsByClassName('task').length;
    }

    addTask(taskText) {

        // template clone
        let template = document.querySelector('.task').cloneNode(true);

        // remove 'hide class' to show template
        template.classList.remove('hide');
        
        // text manage
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        let list = document.getElementById('tasks-container');

        // insert template task in list
        list.appendChild(template);

        // add tasks event
        this.addEvents();

        // hide or show 'no tasks' message
        this.checkTasks('add');
    }
    
    removeTask(task) {
        
        // find the element
        let parentElement = task.parentElement;
        
        // remove from tasks list
        parentElement.remove();
        
        // check if does need to remove 'no tasks' message
        this.checkTasks('remove');
    }

    completeTask(task) {

        // add done class
        task.classList.add('done');
    }

    addEvents() {

        // show and hide trash buttons
        let removeButtons = document.querySelectorAll('.fa-trash');
        let removeButton = removeButtons[removeButtons.length - 1];

        // handle check button color green
        let doneButtons = document.querySelectorAll('.fa-check');
        let doneButton = doneButtons[doneButtons.length - 1];

        // add remove event
        removeButton.addEventListener('click', function() {
            todo.removeTask(this);
        });

        // add complete task event
        doneButton.addEventListener('click', function() {
            todo.completeTask(this);
        });
    }

    checkTasks(command) {

        let msg = document.getElementById('empty-tasks');

        // add or remove tasks 
        if(command === 'add') {
            this.totalTasks += 1;
        } else if (command === 'remove') {
            this.totalTasks -= 1;
        }

        // check if has one or more classes to hide 'no tasks'
        if(this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }
    }
}


let todo = new Todo();

// events
let addButton = document.getElementById('add');

addButton.addEventListener('click', function(event) {

    // cancel submit event
    event.preventDefault();

    let taskText = document.getElementById('task');
    if(taskText.value != '') {
        todo.addTask(taskText.value);
    }

    // clean text box
    taskText.value = '';  
}); 