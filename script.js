const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

getData();

const addTask = () => {
    if(inputBox.value === ""){
        alert("Task Title must not be empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

inputBox.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
