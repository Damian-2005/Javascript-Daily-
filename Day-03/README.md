**Transforming an Array**

- .map method
It calls a function for each element in an array and __returns__ an array of the result.

Syntax: 

[arrayName].map(function(){}); --> Usually stored in a variable or called out instantly.

_Side Quest:_ Writing the students named Adebayo... code and using map to display just the ids of each student.

**Side Quest Completed!** + 25xps for clearing in one shot.

- .sort(fn) method. **modifies array

This is a really interesting one. 
* This method when called sees all elements as strings and sorts them that way.
* It needs a function to actually do the correct sorting, hence why it takes a "fn" arguement.

So you still need to create a function that works based on a sorting algo. Smth like this:

fn(a,b){
    if(a>b) return 1; // Tells the sort method: "Yeah this number is greater"
    if(a<b) return -1; // Tells the sort method: "This is lesser"
    if(a==b) return 0; // Tells the sort method "These are equal"
}

This function repeatedly provides the information the "sort()" method needs to sort the numbers. --> Usually called a **comparison function**.

All you need is just +/- signs, that's enough information for the sort method.

Therefore a comparison function can be written as simple as this:

**function(a,b){ return a-b;}** Or using arrow functions as: **(a,b) => a - b;**

Comparing strings? 

Just use -> localeCompare.

Syntax:

countries = [Countries];

countries.sort((a,b) => a.localeCompare(b));

- .reverse() method just returns the reverse of the [arrayName] **modifies array

- split() & join() method.

Syntax: [arrayName].split('<whatever you are splitting the provided string with>')

Example code:

let names = "Damilola, Segun, Samuel, Bamidele"

//splitting the string

let HisNames = names.split(','); --> This would return an array his names.

.join glues the array back to form a string. Can also take on an arguement 
Example code: 

let hisnames = HisNames.join(';'); --> returns the names as Damilola;Samuel;Segun...

- WTHelly is reduceRight? 

There's more to array methods than these I've learnt? Will be learning those on the way. 🤣

