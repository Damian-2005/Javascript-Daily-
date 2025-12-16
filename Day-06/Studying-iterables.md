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


__Iterating Objects__

TLDR: Making Objects Iterable

* To make objects iterable:
1. Define a function(__iterator__) with a Key "[Symbol.iterator]". (Function is defined using function expression method)Ex:

person[Symbol.iterator] = function(){

}

2. Define 3 varibles + next() method:
> For example: 
    >> person[Symbol.iterator] = function(){
        let properties = Object.keys(ObjectName) ---This lets me access the key/names of variables in my object.

        let count = 0 --- This is my counter variable

        let isDone = false  --- This is stores the boolean result for my boolean flag

        let next(){
            if(count>= properties.length){
                isDone = true;
            }
            return{done: isDone, value: this[properties[count++]]};
        } --- My next method which returns an iteration result object.
        return {next}; 
    }
    