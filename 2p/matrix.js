class Matrix {
    constructor(r, c) {
        this.r = r;
        this.c = c;
        let array = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            array[i] = new Array(this.c);
            for (let k = 0; k < this.c; k++) {
                array[i][k] = 0;
            }
        }
        this.array = array;
    }

    initRandom() {
        this.array = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            this.array[i] = new Array(this.c);
            for (let k = 0; k < this.c; k++) {
                this.array[i][k] = Math.random();
            }
        }
        return this.array;
    }

    getRow(r) {
        return this.array[r - 1];

    }

    getCol(c) {
        let myArray = []
        for (let i = 0; i < this.array.length; i++) {
            myArray[i] = this.array[i][c - 1];
        }
        return myArray;
    }

    isSquared() {
        if (this.r == this.c) {
            return true;
        } else {
            return false;
        }
    }

    isSymmetric() {
        let result = true;
        if (this.isSquared(this.array)) {
            for (let i = 1; i < this.array.length; i++) {
                for (let k = 0; k < this.array.length; k++) {
                    if (this.array[i][k] == this.array[k][i]) {
                        result = true;
                        i = this.array.length;
                        break;
                    }
                }
            }
        } else {
            result = false;
        }

        return result;
    }

    initIdentity() {
        let array2 = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            array2[i] = new Array(this.c);
            for (let k = 0; k < this.c; k++) {
                array2[i][k] = 0;
            }
        }

        for (let i = 0; i < this.array.length; i++) {
            array2[i][i] = 1;
        }
        return array2;

    }

    isIdentity() {
        let result = true;
        if (this.isSquared(this.array)==true) {
            if (this.array == this.initIdentity()) {
                result = true;
            } else {
                result = false;
            }
        } else result=false;

        return result;
    }

}

matriz = new Matrix(5, 6);
console.log(matriz.initRandom());
console.log(matriz.isSquared());
console.log(matriz.isSymmetric());
console.log(matriz.isIdentity())
console.log(matriz.getRow(4));
console.log(matriz.getCol(2));
matriz2= new Matrix(2,2);
console.log(matriz2.initRandom());
console.log(matriz2.isSquared());
console.log(matriz2.isSymmetric());
console.log(matriz2.isIdentity())
console.log(matriz2.getRow(4));
console.log(matriz2.getCol(2));
