function createIterator(set){
    let count = 0;
    return{
        next: function(){
            return count < set.size?
            {value: set[count++], done: false}:
            {value: undefined, done: true}
        }

        }
    }

let names =  createIterator(ab);

console.log(names);

// created a set named ab on a broswer console and tried to alert the names of the elements of the sets. will continue tomorrow.
