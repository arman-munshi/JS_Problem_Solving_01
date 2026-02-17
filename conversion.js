//12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}



const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

//can show the result like 6 fit 3 inch.
// can ignore this on.


function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch ";
    return result;
}

const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);

//-------------------------------------------------
//convert miles to km

function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;

}
// console.log(mileToKilometer(10)+" miles");

function kilometerToMile(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}

console.log(kilometerToMile(10)+" kilometers");