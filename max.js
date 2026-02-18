let rahim = 70;
let karim = 60;

if (rahim > karim) {
    // console.log("rahim will get a banana");
}
else {
    console.log("karim will get banana")
}


//-----------------------------------------------

//inside a function

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}


const max1 = getMax(65, 78);
const max2 = getMax(90, 40);
const ultimateMax = getMax(max1, max2);
console.log(ultimateMax);

// console.log(getMax(7, 57));