let Damian = {
    nAme: "Damian",
    age: 20
}

// Above is an object named Damian.

//Creating the iterator function.

Damian[Symbol.iterator] = function(){
    //Declaring my variables
    let info = Object.values(Damian); //This accesses the person Damian and stores their info as an array.
    let count = 0; // My counter variable.
    let isDone = false; // This stores boolean values for my bool flag

    let next = () => {
        if(count>=info.length){
            isDone = true;
        }
        return{done: isDone, value: this[info[count++]]};
    }
    return{next}
}

// Iterating through would work now.✅

for(let x in Damian){
    alert(x);
}

