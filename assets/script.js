
let yourName = "Malysha Divers"
document.getElementById('credit').textContent = `Created by ${MlayshaDivers}`
// Gingerbread
let gbTd = document.querySelector("#qty-gb") 
let gb = localStorage.getItem('gb');
if (gb === null) {
    gb = 0;
} else {
    gb = parseInt(gb)
}
gbTd.textContent = gb;

// Chocolate Chip
let ccTd = document.querySelector("#qty-cc")
let cc = localStorage.getItem('cc');
if (cc === null) {
    cc = 0;
} else {
    cc = parseInt(cc)
}
ccdTd.textContent = cc;

// Sugar Sprinkle
let sugar = document.querySelector("#qty-sugar")
let sugar = localStorage.getItem('sugar');
if (sugar === null) {
    sugar = 0;
} else {
    sugar = parseInt(sugar)
}
sugardTd.textContent = sugar;

// total
let totalqtyTd = document.querySelector('#qty-total');
totalqtyTd.context = gd + cc + ss;


// selectors
let gbDiv = document.querySelector("Gingerbread");
let ccDiv = document.querySelector("Chocolate Chip");
let ssDiv = document.querySelector("Sugar Sprinkle");

// event listner for Gingerbread
document.getElementById("#add-gb").addEventListener('click', function(){
    gb = gd + 1;
    gbTd.textContent = gb;

    totalqtyTd.textcontent = gb + cc + ss;
})

document.getElementById('#minus-gb').addEventListener('click', function(){
    gb = gd - 1;
    gbTd.textContent = gb;
    localStorage.setItem('gb', gb);
    totalqtyTd.textcontent = gb + cc + ss;
})

// event listner for chocolate chip
document.getElementById('#add-cc').addEventListener('click', function(){
    cc = cc + 1;
    ccTd.textContent = cc;
    localStorage.setItem('cc', cc);
    totalqtyTd.textcontent = gb + cc + ss;
})

document.getElementById('#minus-cc').addEventListener('click', function(){
    cc = cc - 1;
    ccTd.textContent = cc;
    localStorage.setItem('cc', cc);
    totalqtyTd.textcontent = gb + cc + ss;
})


// event listner for Sugar Sprinkle
document.getElementById('#add-sugar').addEventListener('click', function(){
    sugar = sugar + 1;
    sugarTd.textContent = ss;
    localStorage.setItem('ss', ss);
    totalqtyTd.textcontent = gb + cc + ss;
})

document.getElementById('#minus-sugar').addEventListener('click', function(){
    sugar = sugar - 1;
    sugarTd.textContent = ss;
    localStorage.setItem('ss', ss);
    totalqtyTd.textcontent = gb + cc + ss;
})


























// // HINT: You can delete this console.log after you no longer need it!
// console.log('JavaScript code has loaded!')

// // First, tell us your name
// let yourName = "Jane Doe" // HINT: Replace this with your own name!

// // We'll use these variables to track the counts of each cookie type
// let gb = 0      // Gingerbread
// let cc = 0      // Chocolate Chip
// let sugar = 0   // Sugar Sprinkle

// // Code to update name display 
// document.getElementById('credit').textContent = `Created by ${yourName}`

// // Event listener for clicks on the "+" button for Gingerbread cookies
// document.getElementById('add-gb').addEventListener('click', function() {
//     // HINT: You can delete this console.log after you no longer need it!
//     console.log('Gingerbread + button was clicked!')

//     // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
// })

// // TODO: Hook up event listeners for the rest of the buttons