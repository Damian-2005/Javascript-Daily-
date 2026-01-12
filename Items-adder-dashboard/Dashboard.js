// Making the list add task button add elements.

let form = document.getElementById('addform'); // --> Selecting the form element.
let itemList = document.getElementById('items') // This selects the list element in the body.

// Form Submit event

form.addEventListener('submit', addItem);

// The Add item function

function addItem(e){
    e.preventDefault();

    // Get input value 
}