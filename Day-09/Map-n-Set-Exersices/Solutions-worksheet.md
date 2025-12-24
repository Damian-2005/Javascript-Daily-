Code Problem:
- A function that returns an __array__ with unique items of the passed array(arr)

Logic: The functions takes any array with repeated value or not and only returns unique values of the array as an array.

Set like logic.

Array --> Set --> 
Array.

Method for converting to set: new Set([iterable])

------ 
Excersice Two: Filter-Anagrams.

Code problem:

- Write a function that:

1. Checks an array for words with the same letters but different order
2. Cleans(delete) these words from the array.
3. Returns the cleaned up array.


Now how do I approach this?
> > > > > > > > > > 🤔

Why not:

1. Iterate through all elements of the provided array

2. Compare the elements against themselves: Take two elements, split them and store into an array, compare the lengths of both array of letter and the letters if the same, delete the second element and continue...

3. Finish the comparison and return a __filtered__ array.

___

Heavy logic.



