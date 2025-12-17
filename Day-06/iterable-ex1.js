let iterable = [1,2,3];
//The array above is the iterable. i.e it can be looped through
function createIterator(array){
    let count = 0;
    return{
        next: function(){
            return count < array.length?
            {value: array[count++], done:false}:
            {value: undefined, done: true}
        }
    }
}
// The function above is an iterator; it contains the "next()" method and lets me loop through the iterable (array in this case)
let myIterator = createIterator(iterable);

console.log(myIterator.next());

/// Already have my objects

