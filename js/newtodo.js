const nameInput = document.querySelector('#name-input');
const longinForm = document.querySelector('.login-form');
const greeting = document.querySelector(".greeting");
const afterLogin = document.querySelector('.after-login');
const clockChange = document.querySelector('#clock');
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list")
const nameRequired = document.querySelector(".name-required");
const HIDDEN_ID= "hidden";
const DATA_KEY = 'data';
const TODOS_KEY = "todos";
let data = [];
let userToDos = {};
let toDos = [];
let cheak = 0;
let userName;
let listText;
let i;

function saveToDos(){
    data[i]['list'] = toDos;
    localStorage.setItem(DATA_KEY,JSON.stringify(data));
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


function paintGreetings(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.removeAttribute('id');
    afterLogin.removeAttribute('id');
    clockChange.classList.replace('clock-small','clock-big');
    data = localStorage.getItem(DATA_KEY);
    data = JSON.parse(data)
    toDoForm.addEventListener("submit",handleToDoSubmit);
    const savedToDos = data[i];
    if(savedToDos.hasOwnProperty('list')){
        const pasedToDos = savedToDos['list'];
        pasedToDos.forEach(paintToDo);
    }
}

function handleNameSubmit(event){
    if(nameInput.value === ""){
        event.preventDefault();
        nameRequired.removeAttribute('id');
    }
    else{
        nameRequired.id = "hidden";
        if(localStorage.getItem('username') === null){
            event.preventDefault();
            userName = nameInput.value;
            localStorage.setItem('username',userName);
        }
        else{
            userName = localStorage.getItem('username');
        }
        
        for(i = 0; i<data.length;i++){
            if(userName === data[i]['username']){
                cheak = 1;
                longinForm.id=HIDDEN_ID;
                paintGreetings(userName);
                break;
            }
        }
        if(cheak === 0){
        userToDos['username'] = userName;
        longinForm.id=HIDDEN_ID;
        data.push(userToDos);
        localStorage.setItem(DATA_KEY,JSON.stringify(data));
        paintGreetings(userName);
        }
    }
    
}
function handleNameSubmitNULL(event){
    event.preventDefault();
    if(nameInput.value === ""){
        nameRequired.removeAttribute('id');
    }
    else{
        nameRequired.id = "hidden";
        userName = nameInput.value;
        localStorage.setItem('username',userName);
        userToDos['username'] = userName;
        longinForm.id=HIDDEN_ID;
        data.push(userToDos);
        localStorage.setItem(DATA_KEY,JSON.stringify(data));
        paintGreetings(userName);
    }
}






data = localStorage.getItem(DATA_KEY);

if (data === null){
    data = [];
    longinForm.removeAttribute('id');
    longinForm.addEventListener("submit",handleNameSubmitNULL);
}
else{
    data = JSON.parse(data);
    if(localStorage.getItem('username') === null){
        longinForm.removeAttribute('id');
        longinForm.addEventListener("submit",handleNameSubmit);
    }
    else{
        nameInput.value = "none";
        handleNameSubmit('none');
    }
}
