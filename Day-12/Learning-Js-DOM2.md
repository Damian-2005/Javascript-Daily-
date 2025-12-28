__Tranversing the DOM__ (How to query parents, child and siblings element using Js DOM)

[documentProperty].parentNode; --> Returns the parent element of the selected document property. [documentProperty].parentElement --> does almost the same thing as the parent 
node method.

[documentProperty].children -> Returns the children element of the tagged property. 

[documentProperty].firstChild -> Returns the "first child" of the tagged property, __not recommended tho.__

[documentProperty].firstElementChild -> The best and recommended method for tagging the first child of a particular element.

[documentProperty].lastElementChild -> Returns the last child of the tagged element's collection.


[documentProperty].nextSibling & .nextElementSibling --> Returns the sibling following the tagged attribute. 

[documentProperty].previousSibling & .previousElementSibling.

__Creating DOM Elements from Js and inserting them.__

Method: createElement


      let newparagraph = document.createElement('p');
      console.log(newparagraph);
      newparagraph.className = 'hello';
      newparagraph.id = 'hello2';
      console.log(newparagraph);

In the above js code, I created a new paragraph element and gave it a class "hello" and an id "hello2", just learning the createElement method.


          let newptext = document.createTextNode('The text in this paragraph tag');
      newparagraph.appendChild(newptext);
      console.log(newparagraph);

In the above code, I wanted to add a text into the create p tag.
I created a textnode and appendeded it into the p tag as a child element.
