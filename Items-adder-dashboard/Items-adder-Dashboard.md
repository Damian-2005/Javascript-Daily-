https://colorhunt.co/palette/a8df8ef0ffdfffd8dfffaab8 -> Color palette (Water Melon inspired)
Font used: Hangyaboly

Tasks:
- Add tasks with the add task button.
- Remove tasks by checking the task boxes
- Search for Tasks

Understanding whatever magic was done in the vid so that I can do it on my own update:

First Task is to make the "add task" button work.

- Selected the form element and stored as a variable in JS. -- Why? We want the js to listen for submissons in the form.
- Also selected the UL list and store the elements in a variable. -- Why? The tasks to be added would go here so we need to have this section selected for it to be accessible by Js.

- Next thing is adding an event listener to capture everytime we click submit/add task button.

form.addEventListener('submit', addItem); --> This checks if a submit action as been carried out on the form.

Corrected my HTML code, replace the buttons with input type sumbit and search so that the form can actually listen for these inputs

Using the create element method, we create the new 'li' element (our new task)

Apparently the event listener only picks the first element that it sees. And not all with the class name. Interesting...

Algorithm for task removal:

If a particular task has been clicked. 
The console.log fires off and says the task number that has been clicked.


.remove() method is a method that directly removes element from the DOM.


