export default class TypeTodo {
  totalTasks: number;
	constructor() {
		this.totalTasks = document.getElementsByClassName('task').length;
	}

	addTask(taskText: string) {
		let template = document.querySelector('.task')!.cloneNode(true);
		(<HTMLElement>template).classList.remove('hide');

		let templateText = (<HTMLElement>template).querySelector('.task-title')!;
		templateText.textContent = taskText;

		let list = document.getElementById('tasks-container')!;
		list.appendChild(template);

		this.addEvents();
		this.checkTasks('add');
	}

	removeTask(task: HTMLElement) {
		let parentElement = task.parentElement;
		parentElement!.remove();
		this.checkTasks('remove');
	}

	completeTask(task: HTMLElement) {
		task.classList.add('done');
	}

	addEvents() {
		let removeButtons = document.querySelectorAll('.fa-trash');
		let removeButton = removeButtons[removeButtons.length - 1];

		let doneButtons = document.querySelectorAll('.fa-check');
		let doneButton = doneButtons[doneButtons.length - 1];

		removeButton.addEventListener('click', function () {
			tsTodo.removeTask(this);
		});

		doneButton.addEventListener('click', function () {
			tsTodo.completeTask(this);
		});
	}

	checkTasks(command: string) {
		let msg = document.getElementById('empty-tasks')!;

		if (command === 'add') {
			this.totalTasks += 1;
		} else if (command === 'remove') {
			this.totalTasks -= 1;
		}

		if (this.totalTasks == 1) {
			msg.classList.remove('hide');
		} else {
			msg.classList.add('hide');
		}
	}
}

let tsTodo = new TypeTodo();
