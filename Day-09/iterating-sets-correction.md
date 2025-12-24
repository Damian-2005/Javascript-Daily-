__Correction to the attempt on my making a set ab iterable project__
>Important Notes: 
    - Sets are iterable by default. -- I thought they weren't. 😅
    --- What I was actually doing was trying to replace a highly optimized native function with a custom one. Not so good idea.
    - [setName].values() -- returns its own __iterator__ and not an array with a ".length" property.
    - To iterate over a set, you need to make it like an array.


--- Apparently I didn't clearly understand what is meant by a complex data type being iterable. So I checked and it is pretty simple.

    A complex data type is said to be iterable when it has an internal method called "[Symbol.iterator]" which tell Javascript how it should step through it valies one by one using the loop structures that exists. (for...of, while... etc)