function unique (arr){
    let setForm  = new Set(arr);
    return Array.from(setForm);
}

// Shorter way to write it.

function unique(arr){
    return Array.from(new Set(arr));
}

//Memory saved and is even faster.