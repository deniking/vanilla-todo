/*	Todo App vanillajs.

	@deniking.

	Does Programmer.
*/


window.onload = getToDo();

document.getElementById('submit').addEventListener('click', saveToDo);


function saveToDo(event){
	var d = new Date();
	event.preventDefault;
	var getId = d.getTime();
	var getInput = document.getElementById('todoinput').value;
	var todo = {id: getId, todo: getInput}

	if (localStorage.getItem('toDoList') === null) {
		var toDoList = [];
			toDoList.push(todo);
			localStorage.setItem('toDoList', JSON.stringify(toDoList));
	} else {
		var toDoList = JSON.parse(localStorage.getItem('toDoList'));
			toDoList.push(todo);
			localStorage.setItem('toDoList', JSON.stringify(toDoList));
	}
		document.getElementById('todoinput').value = "";
		getToDo();
}


function getToDo(){
	if (localStorage.getItem('toDoList') === null) {
		console.log('LOCAL STORAGE EMPTY')
	} else {
		console.log('ahaaaiii')
		var toDoList = JSON.parse(localStorage.getItem('toDoList'));
		var showToDo = document.getElementById('showtodolist');
			showToDo.innerHTML = "";

		for (var i = 0; i < toDoList.length; i++) {
			var todoId = toDoList[i].id;
			var toDoText = toDoList[i].todo;
			var node = '<li class ="list-group-item d-flex justify-content-between align-items-center">'+ toDoText +'<i class="far fa-check-circle"> <i class="far fa-times-circle" onclick="deleteToDo('+ todoId +')"></i></li>'

			// showToDo.append(
			// 	'<li class ="ist-group-item d-flex justify-content-between align-items-center">'+ toDoText +'<i class="far fa-check-circle" aria-hidden="true"></li>'
			// 	)
			showToDo.insertAdjacentHTML( 'afterbegin', node )
		}
	}
}

function deleteToDo(id){
	console.log(id)
	var toDoList = JSON.parse(localStorage.getItem('toDoList'));

	for (var i = 0; i < toDoList.length; i++) {
		console.log(toDoList[i].id)
		if (toDoList[i].id === id) {
			console.log('bener nih idnya ini = '+id)
			toDoList.splice(i,1)
		}
	}

	localStorage.setItem('toDoList', JSON.stringify(toDoList));
	getToDo();

}
