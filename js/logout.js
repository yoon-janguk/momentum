const logOut = document.querySelector(".log-out");
function ClickOnLogOut(event){
    localStorage.removeItem('username');
    location.reload();
}
logOut.addEventListener("click",ClickOnLogOut);