function getfroyo() {
    const input = prompt("Enter what you would like to order:",
        "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    );

    const flavors = input.split(",");

    const flavorCounts = {};    

    for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i].trim() 
    if (flavorCounts[flavor]){
          flavorCounts[flavor]++;} 
    else{
        flavorCounts[flavor] = 1;}
    }
      
    return flavorCounts;
}

const result = getfroyo()
console.table(result)


// const froyo = (key, value) => {
//     const obj = {};
//     obj[key] = value;
//     return obj;
// }
