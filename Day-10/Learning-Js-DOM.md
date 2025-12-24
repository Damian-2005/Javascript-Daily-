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



