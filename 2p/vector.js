class Vector {

    constructor(a) {
        let array = new Array(a);
        for (let i = 0; i < a; i++) {
            array[i] = 0;
        }
        this.array = array;
    }
    sum(b) {
        let result = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                result[i] = this.array[i] + b[i];
            }
            return result;
        } else {
            return "Error"
        }
    }
    subt(b) {
        let result = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                result[i] = this.array[i] - b[i];
            }
            return result;
        } else {
            return "Error"
        }
    }
    mul(b) {
        let result = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                result[i] = this.array[i] * b[i];
            }
            return result;
        } else {
            return "Error"
        }
    }
    getVector() {
        return this.array;
    }
}

let vector0 = new Vector(6);

console.log(vector0.sum([2,2,2,2,2,2]));//2,2,2,2,2,2
console.log(vector0.sum([3,3,3,3,3,3]));//3,3,3,3,3,3
console.log(vector0.subt([4,4,4,4,4,4]));//-4,-4,-4,-4,-4,-4
console.log(vector0.mul([5,5,5,5,5,5]));//0,0,0,0,0,0
console.log(vector0.getVector());//0,0,0,0,0,0