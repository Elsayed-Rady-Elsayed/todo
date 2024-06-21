const addBtn = document.querySelector(".row button");
const inputBox = document.querySelector(".row input");
const listContainer = document.querySelector("#list-container");
function AddTask(){
    if(inputBox.value === ""){
        alert("please enter the title of the task");
    }else{
        let li = document.createElement("li");
        let text = document.createTextNode(inputBox.value);
        li.appendChild(text);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    window.localStorage.setItem("data",listContainer.innerHTML);
}
function showSavedDate(){
    listContainer.innerHTML = window.localStorage.getItem("data");
}
showSavedDate();