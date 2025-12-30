__JS events__

A very important part of interactive Js.

_How to add an event listener_

      <button onclick="alert('hello')" class="btn btn-dark-block" id="button">Click Here</button> 

      This button when clicked makes the webpage says "Hello"


  // Select the button and attach a click event listener
  document.querySelector("#button").addEventListener('click', buttonClick); 
  function buttonClick() {
  // Use querySelector because it supports CSS pseudo-classes like :nth-child
  let firstItem = document.querySelector('#items li:nth-child(1)'); 
  // Updates the first item.
    firstItem.textContent = 'You added an item'; // Updates the text content
  }


The code above is my first implementation of event listeners ☝🏼🤓

_What it does_: When the button is clicked, the list of items updates with the first item displaying a 'You added an item' message. ☝🏼🤓

'.addEventListener' is a method that takes two parameters (based on the examples used during my course of studying) to make a webpage interactive. They wait for an event (in the above case a click) to occur on a specific element of a webpage (in this case a button was clicked) then execute a defined block of code in response. --Gemini.

element.addEventListener(event, listener, [options]); --> Apparently, it's 3 parameters.


