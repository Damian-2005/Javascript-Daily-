console.log("Hello");

// Now that the code is working, let's work with it.

// Calling the forms

let form = document.getElementById('forms');
let tasksList = document.getElementById('tasks');

form.addEventListener('submit', addNewTask);

// Declaration of function the adds the tasks.

function addNewTask(e) {
    e.preventDefault();
    let newTask = document.querySelector('#taskss').value;
    let li = document.createElement('li');
    li.className = 'task';
    li.appendChild(document.createTextNode(newTask));

    if (newTask === "") return;
    // Creating the checkbox for the new task 
    let checkbox = document.createElement('input');
    checkbox.type ='checkbox';
    li.appendChild(checkbox); 

    tasksList.appendChild(li); // This adds the new task to the existing tasks list

}
