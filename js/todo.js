const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list")
let listText;
const TODOS_KEY = "todos";

let toDos = []
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function noDeleteToDo(listText,oriListText){
    listText.innerText = oriListText;
}
function askDeleteToDo(event){
    listText = event.target;
    const oriListText = listText.innerText;
    listText.innerText = "DELETE";
    listText.addEventListener("mouseleave", function(){noDeleteToDo(listText,oriListText)});
    listText.addEventListener("click",deleteToDo);
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text ;
    span.id="todo-list-in";
    span.addEventListener("mouseenter",askDeleteToDo);
    li.appendChild(span);
    toDoList.insertBefore(li,document.querySelector("#close-todo"));

}

function handleToDoSubmit(event){
event.preventDefault()
const newTodo = toDoInput.value;
toDoInput.value = "";
const newTodoObj = {
    text: newTodo,
    id: Date.now()
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();

}
toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const pasedToDos = JSON.parse(savedToDos); 
    toDos = pasedToDos
    pasedToDos.forEach(paintToDo);
}