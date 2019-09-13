let result=0;
let fact = 0;
let process = 0;
let x=1;

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function sumador(){
    for(let i=0;i<=10;i++){
     fact=factorial(i);
     process=Math.pow(x,i);
     process=process/fact;
     result=result+process;
    }
    return result;
}

//TESTING

sumador();