/*Card
0 = clubs(trebol), 1= diamonds, 2 = hearts, and 3 = spades(pica) 
*/

class Card {


    printCard(num) {
        let myCard = [];

        if (num <= 13) {
            myCard[0] = 0;
        } else if (num <= 26) {
            myCard[0] = 1;
        } else if (num <= 39) {
            myCard[0] = 2;
        } else {
            myCard[0] = 3;
        }

        switch (num % 13) {
            case 0:
                myCard[1] = 13;
                break;

            case 1:
                myCard[1] = 1;
                break;

            case 2:
                myCard[1] = 2;
                break;

            case 3:
                myCard[1] = 3;
                break;

            case 4:
                myCard[1] = 4;
                break;

            case 5:
                myCard[1] = 5;
                break;

            case 6:
                myCard[1] = 6;
                break;

            case 7:
                myCard[1] = 7;
                break;

            case 8:
                myCard[1] = 8;
                break;

            case 9:
                myCard[1] = 9;
                break;

            case 10:
                myCard[1] = 10;
                break;

            case 11:
                myCard[1] = 11;
                break;

            case 12:
                myCard[1] = 12;
                break;

        }

        return myCard;

    }

    printNumber(k, n) {

        let myCard = 0;

        if (k == 0) {
            myCard = n;
        } else if (k == 1) {
            myCard = n + 13;
        } else if (k == 2) {
            myCard = n + 26;
        } else if (k == 3) {
            myCard = n + 39;
        } else myCard = "ERROR"
        return myCard;

    }

    numberTwoPairs() { //Combinación sin repetición -> C(n,r) = n!/(n-r)!*r!
        function factorial(n) {
            return n <= 1 ? 1 : n * factorial(n - 1);
        }
        //4 ases y 4 reyes -> se multiplican resultados -> 6 * 6 = 36 combinaciones de ases y reyes 
        let cAsesReyes = (factorial(4) / (factorial(4-2)*(factorial(2)))* (factorial(4) / (factorial(4 - 2) * factorial(2))));
        //Posición libre ocupada por una carta (sin contar A o K) de las 44 restantes
        cAsesReyes *= 44; //36 * 44 = 1584 parejas dobles de ases y reyes
        //Esta situación se puede repetir con dobles parejas de A y Q, A y J, etc...
        let doblesParejas = factorial(13) / (factorial(13-2) * factorial(2)); //C(13,2) = 78 posibles tipos de dobles parejas
        let combinaciones = cAsesReyes * doblesParejas; //Combinaciones posibles 
        //La posibilidad de doble pareja es: 
        //(Combinaciones posibles de doble pareja / Combinaciones de manos de póquer de 5 cartas) * 100
        let cManos5 = factorial(52) / (factorial(52 - 5) * factorial(5)); //C(52,5) -> 2 598 960
        let resultado = (combinaciones / cManos5) * 100; //*100 para obtener el porcentaje
        return resultado.toFixed(4) + "%";

    }


}

carta = new Card()
console.log(carta.printNumber(2,1));
console.log(carta.printCard(27));
console.log(carta.numberTwoPairs());