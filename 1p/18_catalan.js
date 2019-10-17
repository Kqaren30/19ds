function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

let result3=0;
let fact4=0;
let fact5=0;
let fact6=0;
let num=parseInt(prompt('Ingresa un numero',0));
while (num <= 0 || isNaN(num)) {
  num = parseInt(prompt('Ingresa un numero correctamente', 0));
}

fact4=factorial(2*num);
fact5=factorial(num+1);
fact6=factorial(num);
result3=fact4/(fact5*fact6);

console.log("Catalan= "+result3);

