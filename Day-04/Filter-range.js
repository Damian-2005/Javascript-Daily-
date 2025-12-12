function filterRange(arr, a, b){
    if (a !== 0 && b !== 0){
        return arr.filter( x => x >= a && x <= b);
    }
    if(a== null && b == null) return arr;
}