var todos = [];
var input = prompt("What would you like to do?");

function listTodo(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i+": "+todo);
    });
    console.log("**********");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    console.log(newTodo + " added to list.");
    todos.push(newTodo);
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete.");
    todos.splice(index,1);
    console.log(todos[index] + " deleted from list.");
}

while(input !== "quit"){
    if(input === "list"){
        listTodo();
    }
    else if(input === "new"){
        addTodo();
    } 
    else if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("OK, You quit the app.");

