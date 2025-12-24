// let ab = new Set();

// let emmanuel = {
//     name: "Emmanuel Adebayo",
//     age: 18,
//     favfood: "Ewa Agoyin"
// };


// let damian = {
//     name: "Adebayo Damilola",
//     age: 20,
//     favfood: "Special Fried-rice"
// };

// ab.add(emmanuel).add(damian);

// ab[Symbol.iterator] = function(){
//     let names = Set.prototype.values(ab);
//     let count = 0;
//     let isDone = false;

//     let next = () => {
//         if(count >= names.length){
//             isDone = true;
//         }
//         return{done: isDone, value: this[names[count++]]};
//     }
//     return{next};
// }
// for ( let x of ab){
//     alert(x);
// };

// ----------------- Corrected Code

let ab = new Set();

let emmanuel = {name: "Emmanuel Adebayo", age: 18};
let damian = {name: "Adebayo Damilola", age: 20};

ab.add(emmanuel).add(damian);

ab[Symbol.iterator] = function() {
    let items = Array.from(this); // Converts the set to an array with lenght and indicies.
    let count = 0;

    return{
        next: () => {
            let isDone = count >= items.length; //Returns T/F if we are out of items or not.
            let val = !isDone ? items[count++]: undefined; // Get item and increment
            return {
                done: isDone,
                value: val
            };            
        }

    };
};

for( let X of ab){
    alert(X.name);
}