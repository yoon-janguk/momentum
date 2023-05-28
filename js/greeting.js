const longinForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const afterLogin = document.querySelector('.after-login');
const clockChange = document.querySelector('#clock');
const HIDDEN_ID= "hidden";
const USERNAME = "username";
function onLoginSubmit(event){
    event.preventDefault();
    longinForm.id=HIDDEN_ID;
    const username = loginInput.value;
    localStorage.setItem(USERNAME,username);
    paintGreetings(username)
    
    
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.removeAttribute('id');
    afterLogin.removeAttribute('id');
    clockChange.classList.replace('clock-small','clock-big');

}

const saveUsername = localStorage.getItem(USERNAME);

if (saveUsername === null){
    longinForm.removeAttribute('id');
    longinForm.addEventListener("submit", onLoginSubmit); 
}  else{
    longinForm.removeAttribute('id');
    paintGreetings(saveUsername)
}