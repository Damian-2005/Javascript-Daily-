Map and Set are other types of complex data types (just like Objects and array).
- Map is used to store collection of keyed data items(just like Objects) just that, the keys here can be of any type.
    i.e there's the freedom of creating any type of key for any type of data 
    --- I legit created a Map for me and named the usual "name" key "his Name" 🤣👍🏼. 
    
    Even NaN can be used as Keys.


- __Map Methods I've learnt__ 
    > new map() -> for the creation of new map
    > [mapName].set(key, value); -> for adding new key & value pairs to an existing Map
    > [mapName].has(key) -> Checks if the map has the provided key and returns true or false based on that.
    > [mapName].get(key) -> returns the value of the provided key.
    > [mapName].clear() -> deletes all the elements of the map.
    > [mapName].size -> returns the length of the map.
    > [mapName].delete(key) -> deletes the provided key and it's value.

-- Objects can also be used as keys.
for example:
        let Damian = {
            name: "Damian",
            age: 20
        };
        DamianMap.set( Damian, 'is a goodboy');
        DamianMap.get(Damian); // returns "is a goodboy".

* You can chain calls. For example: DamianMap.set("Hello", "hello").set("God", "is good");

----------------------------------------------------------------------------------------------------------

Iteration Over Map.



for...of still works just that there are 3 methods to do it.

- for x of [mapName].keys() --> accesses the keys
- for x of [mapName].values() --> accesses the values in the map 
- for x of [mapName].entires() --> accesses the entries.


Putting my pens down here for today -- I'm exhausted.