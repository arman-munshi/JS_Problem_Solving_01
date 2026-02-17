/**
 * array has some duplicate elements
 */

const biryanikhor = ["abul", "kabul", "cabul", "abul", "babul", "dabul"]
const number = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
    // console.log(array);
    const unique=[]
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }

        
    }
    return unique;
}

const uniqueArray = noDuplicate(number);
console.log(uniqueArray)
