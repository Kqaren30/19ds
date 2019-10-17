class fibonacci {
    constructor(num) {
      this.num = num
    }
  
    getValue(num = this.num) {
      function value(num) {
        return num < 2 ? num : value(num - 1) + value(num - 2);
      }
      return value(num);
    }
  
    getCost(num = this.num) {
      let cont = 0;
  
      function value(num) {
        if (num < 2) {
          cont++;
          return num;
        } else {
          cont++;
          return value(num - 1) + value(num - 2);
        }
      }
      value(num);
      return cont;
    }
  
  
    getSuccesion() {
      for (let i = 1; i <= this.num; i++) {
        console.log("Fibonacci de " + i + " es: " + this.getValue(i) + "\n");
      }
    }
  
    getTable() {
      console.log("N - Cost - Value")
      for (let i = 0; i <= this.num; i++) {
        console.log('f(' + i + ') - ' + this.getCost(i) + ' - ' + this.getValue(i));
      }
    }
  }
  
  fib = new fibonacci(5);
  console.log(fib.getValue());
  console.log(fib.getSuccesion());
  console.log(fib.getCost());
  console.log(fib.getTable());