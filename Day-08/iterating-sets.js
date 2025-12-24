// created a set named ab on a broswer console and tried to alert the names of the elements of the sets. will continue tomorrow.

let ab = new Set();
// Declaring Objects that'll be added into the set.

let emmanuel = {
    name: "Emmanuel Adebayo",
    age: 18,
    favfood: "Ewa Agoyin"
};


let damian = {
    name: "Adebayo Damilola",
    age: 20,
    favfood: "Special Fried-rice"
};


// Adds in the object into the set

ab.add(emmanuel).add(damian);

// The fun part: Making the objects in the set iterable.

ab[Symbol.iterator] = function(){
    //Declaring the needed variables
    let names = Set.prototype.values(ab);
    let count = 0;
    let isDone = false;

    let next = () => {
        if(count >= names.length){
            isDone = true;
        }
        return{done: isDone, value: this[names[count++]]};
    }
    return{next};
}

for ( let x of ab){
    alert(x);
};


// AirBall! 🤣
// -- Mistakes:
// - Sets are iterable by default. --> Day 09 for corrections.