//  ----------------------------------------
//  step 2
//  ----------------------------------------
let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue(); // step 3
}

function displayCount() {
    document.getElementById("countDisplay").innerText = `${count}`;
}

//  ----------------------------------------
//  step 3
//  ----------------------------------------
function checkCountValue() {
    if (count === 10) {
        alert("You gained 10 followers.");
    } else if (count === 20) {
        alert("You gained 20 followers.");
    }
}
