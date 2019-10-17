let array1 = [1, 2, 3, 3, 5];
let array2 = [2, 10, 43, 12, 20];

function Sorted(Myarray) {
    let result;

    for (let k = 0; k < Myarray.length - 1; k++) {
        if (Myarray[k] <= Myarray[k + 1]) {
            result = "La cadena esta ordenada de forma ascendente";
        } else {
            result = "La cadena no esta ordenada";
            break;
        }
    }


    return result;
}

//testing
console.log(Sorted(array1));
console.log(Sorted(array2));