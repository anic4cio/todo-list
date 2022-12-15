import TypeTodo from "./script";

let tsTodo = new TypeTodo();
let addBtns = (<HTMLElement>document.getElementById('add'));

addBtns.addEventListener('click', function (event) {
	event.preventDefault();

	let taskText = (<HTMLInputElement>document.getElementById('task'));
	if (taskText.value != '') {
		tsTodo.addTask(taskText.value);
	}
	taskText.value = '';
});
