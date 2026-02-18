const dim = 75;
const kim = 90 ;
const mim = 140;

if (dim > kim && dim > mim) {
    console.log("dim is the ultimate boss")

}
else if (kim > dim && kim > mim) {
    console.log("kim is the boss");

}
else {
    console.log("mim is the main boss")
}

//----------------------------------------

function maxThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return("num1 is the ultimate boss")

    }
    else if (num2> num1 && num2 > num3) {
        return("num2 is the boss");

    }
    else {
        return("num3 is the main boss")
    }
    
}

console.log(maxThree(45, 70, 30));


//---------------------------------------------
//short cut rule using Math function.

const max = Math.max(12, 3, 45, 90, 60);
console.log("max is using Math.max: ", max);