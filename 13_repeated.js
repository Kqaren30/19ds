let array1 = [2, 2, 3, 4, 5, 5, 3, 8];
let array2 = [1, 3, 5, 7];

function repeat(myArray) {

    for (let i = 0; i < myArray.length - 1; i++) {
        for (let k = i+1; k < myArray.length; k++) {
            if (myArray[i] == myArray[k]) {
                return true;
                break;
            }
            else{ return false;}
        }
    }
}

console.log(repeat(array1));
console.log(repeat(array2));