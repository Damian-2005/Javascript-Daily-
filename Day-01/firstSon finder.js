let family = [
    {nAme: "Adebayo", firstChild: "Samuel"},
    {nAme: "Adebayo", firstChild: "Victoria"},
    {nAme: "Johnson", firstChild: "Bamidele"}
];


function findFamily (fam){
    return fam.nAme === "Adebayo"
}

console.log(family.find(findFamily).firstChild);

