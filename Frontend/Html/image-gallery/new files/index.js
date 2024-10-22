console.log("welcome to my todo app");

let todos = [];
let todoDataSection = document.getElementById("todo-data");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar")

todoInputBar.addEventListener("keyup", function togglerSaveButton(){
    let todotext = todoInputBar.Value;
    if(todotext.length == 0) {
        if(saveButton.classList.contains("disabled")) return;
        saveButton.classList.add("disabled");
    }
    else if(saveButton.classList.contains("disabled")){
        saveButton.classList.remove("disabled"); 
    }
})

saveButton.addEventListener("click", function getTextAndAddTodo(){
    let todotext = todoInputBar.Value;
    if(todotext.length == 0) return;
    todos.push(todotext);
    addTodo(todotext, todos.length);
    todoInputBar.Value = ''
});

function removeTodo(event) {
   console.log("clicked", event.target.parentElement.parentElement.parentElement)
   event.target.parentElement.parentElement.parentElement.remove();
}

function addTodo(todoData, todocount) {
    console.log("called add todo")
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div"); 
    let todoStatus = document.createElement("div");
    let todoAction = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    // adding classes
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-center")
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoAction.classList.add("todo-actions", "d-flex", "justify-content-start","gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finish-todo");


    deleteButton.onclick = removeTodo;

    todoNumber.textContent = '${todocount}';
    todoDetail.textContent = todoData; // sets the todo text sent from the input element
    todoStatus.textContent = "In Progress";
    deleteButton.textContent = "Delete";
    finishedButton.textContent = "Finished";

    todoDataSection.appendChild(deleteButton);
    todoAction.appendChild(finishedButton);


todoItem.appendChild(todoNumber);
todoItem.appendChild(todoDetail);
todoItem.appendChild(todoStatus);
todoItem.appendChild(todoAction);

rowDiv.appendChild(todoItem);
rowDiv.appendChild(hr);

todoDataSection.appendChild(rowDiv);

}

//let gettodosButton = document.getElementById('get-todos');
// REGISTRATION OF EVENT LISTENER
/*getTodosButton.addEventListener("click", () ==> {
    console.log("clicked");
});

gettodosButton.onclick = () ==> {
    console.log("clicked")
}*/

/*function clickBtn() {
    console.log("click")
}*/
