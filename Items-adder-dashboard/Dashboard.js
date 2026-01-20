console.log("Hello");

// Now that the code is working, let's work with it.

// Calling the forms

let form = document.getElementById('forms');
let tasksList = document.getElementById('tasks');
let checkbox = document.querySelector('.tasksCheck');

form.addEventListener('submit', addNewTask);

tasksList.addEventListener('change',removeTask); //<-- This listens for tick action on the tasklists and removes the Task

// Declaration of function the adds the tasks.

function addNewTask(e) {
    e.preventDefault();
    let newTask = document.getElementById('taskss').value;
    let li = document.createElement('li');
    li.className = 'task';
    li.appendChild(document.createTextNode(newTask));

    if (newTask === "") return;
    // Creating the checkbox for the new task 
    let checkbox = document.createElement('input');
    checkbox.type ='checkbox';
    li.appendChild(checkbox); 

    tasksList.appendChild(li); // This adds the new task to the existing tasks list

    document.getElementById('taskss').value = ""; // Clears the input field for the next task.
}

function removeTask(e) {
    console.log("The box has been ticked");

    // Below is the part of the function that removes the task. 
    let deleter = e.target.parentElement;
    console.log(deleter); //Displays the element that was clicked


    deleter.remove(); // Removes the clicked element.

}