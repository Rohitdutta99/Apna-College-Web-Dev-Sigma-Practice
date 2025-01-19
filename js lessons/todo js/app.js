let todo = [];
document.getElementById("task_form").addEventListener("submit", (e)=> {
    e.preventDefault();

    let work = document.forms["task_form"]["task"].value.trim();

    if (work == "quit"){
        alert("Thank You!");
    }
    if (work == "list"){
        console.log(todo);
        alert("List printed in console!");
    }
    if (work == "add"){
        let new_task = prompt("Enter task: ");
        todo.push(new_task);
        alert(new_task + " task added!")
    }
    if (work == "delete"){
        let bool = false;
        let task_removal = prompt("Enter task to remove: ");
        let index = todo.indexOf(task_removal);

        for(let i=0; i<todo.length; i++){
            if (task_removal == todo[i])
                bool = true;
        }
        if (bool == true){
            todo.splice(index, 1);

            alert(task_removal + "removed from list!");
        }
        else{
            alert("Task doesn't exist.");
        }
    }

})