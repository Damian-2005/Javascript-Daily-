What are iterables and why do I need to learn them?

* Iterables makes it possible for for...of loop to be used on an object.

>

__Symbol.iterator__ method -- used for making an object that looks "iterable" iterable. 

--- I just read through lines of code only understanding 30% of whatever is being explained.

* Strings, Array & Every other types of data that store objects as lists can be iterated through.

** Explicit = clearly stated. Implicit is the otherwise i.e not clearly stated.

---------------------------------------------

https://youtu.be/c5x7z02Idfo -> Using this to understand iterables and iterators.

Iterable is an object that has the key "[Symbol.Iterator]() : Iterator." & returns an iterator.

Iterator is an object that has the next() method which also returns an object().

This object has two properties: 
- value & --> This can be of any property
- done --> A boolean flag; it indicates if the iteration is done or not.

iterable {

}

iterator{
    next(): IterationResultObject
}

IterationResultObject{
    value:
    done:
}

Second Vid: https://www.youtube.com/watch?v=0kHJgw6Li_4


