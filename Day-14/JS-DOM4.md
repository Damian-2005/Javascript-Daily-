__The Event Paramenter__

When using the "addEventListener" method, we can pass in the a parament into the called function -- and this parameter is called the "Event Parameter"

Code Example: 


  document.querySelector("#button").addEventListener('click', buttonClick);

  function buttonClick(e) {
    console.log(e);
    console.log(e.target); // --> Returns the HTML element that performed the function.
  }


'e' here is the event parameter. 

The code above displays the properties of the event parameter -- the console.log(e);

console.log(e.target.id) --> Returns the id of the element.

console.log(e.target.className) --> Returns the class names of the elements.

console.log(e.target.classList) --> Returns the class names of the element inform of an array.


.clientX vs .offSetY 

.clientX: Measures the position of the pointer relative to the browser's viewport (the visible area of the browser window).

.offsetY: Measures the position of the pointer relative to the padding edge of the target element itself that the event occurred on. 

You can also check if a multiple keys were clicked, while clicking on the button. For Examples:

console.log(e.altKey) -> Returns the T or F based on whether the alt key was held while clicking on the button.

We also have console.log(e.ctrlKey) and many others.


//// __MOUSE EVENTS NEXT__ /////


 


