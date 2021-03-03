const form = document.querySelector(".operation");
const todoInput = document.getElementById("add-input")
const todoList = document.querySelector('#to-do-section');
const firstCardBody = document.querySelectorAll('.operation');
const secondCardBody = document.querySelector('#to-do-section');
const clearButton = document.querySelector('#empty-list');
const cardBody = document.querySelectorAll(".main")[1];
const check = document.querySelector("#autosave");
const allsave = document.querySelector('#save-list');
const clearCompleted = document.querySelector("#clear-completed");

eventListeners();

function eventListeners(){
    document.getElementById("add-btn").addEventListener("click",addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    clearButton.addEventListener("click",clearAllTodos);
    allsave.addEventListener("click",saveAllStorage);
    clearCompleted.addEventListener("click",clearAllCompleted)
    secondCardBody.addEventListener("dblclick",complete);
    

}
function tooDoList(){
    var listed = document.querySelector("#listed");
    for(var i = 1; i<=todoList.childElementCount;i++){
        if(i > 14){
            return;
        }
        else{
            listed.innerText = `My Todo-List (${i}/14)`;
        }
    }
}


function clearAllCompleted(){
    var select = document.querySelectorAll("#completed");
    select.forEach(function(s){
        s.remove();
        deleteTodoFromStorage(s.textContent);
    })
    tooDoList();
}

function saveAllStorage(){
    var todos = getTodosFromStorage();

    for(var i = 0; i < todoList.childElementCount; i++){
        
        if(todos.includes(todoList.children[i].innerText)){
            return;
        }
        else{
           addTodoToStorage(todoList.children[i].innerText);
        }
    }
}

function clearAllTodos(e){  
    if (confirm("Tümünü silmek istediğine emin misin?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
    var listed = document.querySelector("#listed");
    listed.innerText = `My Todo-List (0/14)`
    todoInput.value = "";
    
}

function complete(e){
    if(e.target.className === "list"){
        if(e.target.id === "completed"){
            e.target.id = "not-completed";
        }
        else{
            e.target.id = "completed";
        }
    }
}

function deleteTodo(e){
    if(e.target.className === "fas fa-trash-alt"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo başarıyla silindi..");
    }
}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}




function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
    tooDoList();
}

function addTodo(e){
    const newTodo = document.getElementById("add-input").value.trim();
    var todos = getTodosFromStorage();
    tooDoList();
    if(todoList.childElementCount > 13){
        showAlert("danger","Maksimum to-do");
        return;
    }
    else{
        if(check.checked == true){
        
            if (newTodo === ""){
                showAlert("danger","Lütfen bir todo girin...");
            }
            else{
                if(todos.includes(newTodo)){
                    todoInput.value = "";
                    return;
                }
                else{
                    addTodoToUI(newTodo);
                    addTodoToStorage(newTodo);
                    
                }
                
            }
            
        }
        else{
            if (newTodo === ""){
                showAlert("danger","Lütfen bir todo girin...");
            }
            else{
                for(var j = 0; j < todoList.childElementCount; j++){
                    if(todoList.children[j].textContent === newTodo){
                        todoInput.value = "";
                        return;
                    }
                }
                addTodoToUI(newTodo);
                showAlert("success","Todo başarıyla eklendi...");
                
            }
        }
       
    }

   

    e.preventDefault();
}


function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    
    cardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },1000);

}


function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#/";
    link.style.color = 'black';
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fas fa-trash-alt'></i>";

    listItem.className = "list";
    listItem.id = "not-completed";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);
    todoInput.value = "";
    tooDoList();
}
