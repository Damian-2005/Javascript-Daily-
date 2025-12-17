__Map and set cont'd__

* Maps also have thier in-built forEach method which lets a function to be performed on elements of a Map.

Syntax: 
    [mapName].forEach(value, key, map) => {
        --- code statement goes here.
    };

* We can even pass arrays into newly created maps and they'll assume the normal key and value order.

For example: 

let mapOfArrays = new Map([
    ['Key', 'value'],
    ['Key', 'value'],
    ['Key', 'value'],
]);
--> This is referred to as __map created from array.__

--- proceeds to test this out in the console.
--- 👍🏼

 __Creating a map from Objects__

It can be done by simply using the built-in-method: "Object.entries([objectName])"

--- proceeds to test this out in the console
--- 👍🏼

__Creating an Object from Maps & Arrays__

Built-in-method --> Object.fromEntries([[array],[array],[array]]);

^ The above syntax takes arrays and converts them into an object.

From Map to Object --> Object.fromEntries([mapName].entries()); or __Simply__: Object.fromEntries([mapName]); --- I'll be sticking with the shorter one btw.


__Set(s)__

* Used for storing unique elements/ entries --- Doesn't store repeated entries.
* Just like map and the other types of complex data types, Sets also have methods.

_Set Methods I've learnt:_

- new Set([iterable]) --> for creating new set
- [setName].add(value) --> for adding values into a created set.
- [setName].delete(value) --> deletes the provided value, returns "True" if the "value" exists and returns "false" if the value doesn't.
- [setName].clear() --> removes all the values present in the array.
- [setName].size --> returns the size of the set.
- [setName].has(value) --> returns true or false if the set has the value or not.


__Iteration Over Set__

for...of and forEach still works ✅

--- *proceeds to test in console.