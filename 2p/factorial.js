class factorial {
    constructor(num){
        this.num=num
    }

    getValue(num=this.num) { //parametro default
        function value(num){
        return num<=1 ? 1:  num*value(num-1)
        }
        return value(num);
    }

    getCost(num=this.num) {
       let cont=0;
       function value(num){
        if(num <=1){
          cont++;
          return num;
        } else{
          cont++;
          return num*value(num-1);
        }
       }
       value(num);
       return cont;
    }


    getSuccesion() {
        let sucesion=[];
        for(let i=1;i<=this.num;i++){
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }

    getTable() {
        console.log("N - Cost - Value")
        for (let i=1;i<=this.num;i++){
          console.log('f('+i+') - '+this.getCost(i)+' - '+this.getValue(i));
        }
    }
}

factor=new factorial(5);
console.log(factor.getValue());
console.log(factor.getSuccesion());
console.log(factor.getCost());
console.log(factor.getTable());