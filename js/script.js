class Todo {

    constructor() {
        this.totalTasks = document.getElementsByClassName('task').length;
    }

    addTask(taskText) {

        // template clone
        let template = document.querySelector('.task').cloneNode(true);

        // hide class remove
        template.classList.remove('hide');
        
        // text manage
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        let list = document.getElementById('tasks-container');

        // task list insert
        list.appendChild(template);

        // add tasks event
        this.addEvents();

        // check if does need to show 'no tasks' message
        this.checkTasks('add');
    }
    
    removeTask(task) {
        
        // find the element
        let parentEl = task.parentElement;
        
        // remove from list
        parentEl.remove();
        
        // check if does need to remove 'no tasks' message
        this.checkTasks('remove');
    }

    completeTask(task) {

        // add done class
        task.classList.add('done');
    }

    addEvents() {

        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        // add remove event
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this);
        });

        // add complete task event
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this);
        });
    }

    checkTasks(command) {

        let msg = document.getElementById('empty-tasks');

        // add or remove tasks system logic
        if(command === 'add') {
            this.totalTasks += 1;
        } else if (command === 'remove') {
            this.totalTasks -= 1;
        }

        // check if has two or more class
        if(this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }
    }
}


let todo = new Todo();

// events
let addBtn = document.getElementById('add');

addBtn.addEventListener('click', function(e) {

    e.preventDefault();

    let taskText = document.getElementById('task');

    if(taskText.value != '') {
        todo.addTask(taskText.value);
    }

    // clean text box
    taskText.value = '';  
}); 