const clock = document.querySelector("#clock");
let hours;
function getClock(){
    const date = new Date();
    if(date.getHours() > 12){
        hours = String(date.getHours()-12).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}  .`;
    }
    else{
        hours = String(date.getHours()).padStart(2,"0");  
        const minutes = String(date.getMinutes()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}`;
    }
    
}
getClock()
setInterval(getClock,1000);