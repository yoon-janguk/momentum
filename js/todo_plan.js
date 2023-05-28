const inputToDo = document.querySelector('#input-todo');
const todoList = document.querySelector('.todo-list');
const closeToDo = document.querySelector('#close-todo');
function hideTodoList(){
    todoList.id='hidden';
}

function showTodoList(){
    todoList.removeAttribute('id');
    closeToDo.addEventListener("click",hideTodoList);
}

inputToDo.addEventListener("click",showTodoList);
