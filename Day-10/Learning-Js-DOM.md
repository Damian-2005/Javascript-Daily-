__What is JS DOM__

Tree of nodes/element created by the browser.


__console.dir(document);__  --> This code statement lets us see the DOM of our website. Displays a tree of elements/nodes of the webpage created by the browser. These elements are usually what makes up our webpage. Examples are: Title, Header etc...

The __document__ in this case is viewed as an object and I can recall objects have key and value properties. They also have methods that can be used to access their elements...

Things I did during the course of this introductuory lecture:

- I displayed the elements of the webdocument using the code statement --> console.dir(element);

- I displayed the document's domain address using the code statement --> console.log(document.domain);

- I displayed the webpage's URL using the code statement --> console.log(document.URL);

- I overwrote the webpage's title from "Item-adder" -> "Hello" by writing the line --> document.title = "Hello";

Moving on to __SELECTORS__ ("Methods we can use to QUERY the DOM");

__Method 1__: GETELEMENTBYID

"document.getElementById([idName])" --> This method makes an element of the webpage accessible to the console through it's id.

__Method 2__: [documentproperty].textContent --> Returns the textcontent in the called property.

__Method 3__: [documentproperty].innerText--> Returns the text content of the called proprety.

-------- Day 2 -- Continuation of JS DOM crash course pt. 1

"I blocked out" 😂

---------- Day 3 -- Learning more methods.

__Method 4__: [document].style.[cssStylinginCamelCase]; For ecample: gettingHeader.style.borderBottom = red 2px solid;

__Method 5__: [document].getElementsByClassName; --> Used to get specific elements by their class name. 

__Method 6__: [document].getElementByTagName; --> Used to select elements with a particular tag name.

__Method 7__: [document].querySelector('') --> Whatever you want to select goes into the parentheses. Any CSS seletor can be used with this method.

Picked up something: _.value_ property vs _.textContent_ Method

.value property is used to access form elements like input, select and textarea __while__ .textContent is used for accessing text elements and blocks of the webpage. like div, p, span etc...


__Method 8__: [document].querySelectorAll('');
