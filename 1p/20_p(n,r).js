
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

//P(n,r) = n! / (n-r)!

let n=parseInt(prompt('Ingresa N',0));
while (n <= 0 || isNaN(n)) {
  n = parseInt(prompt('Ingresa un numero correctamente', 0));
}
let r=parseInt(prompt('Ingresa R',0));
while (r <= 0 || isNaN(r)) {
  r = parseInt(prompt('Ingresa un numero correctamente', 0));
}
let result=0;
let fact=0;
let fact2=0;

fact=factorial(n);
fact2=factorial(n-r);
result=fact/fact2;

console.log("P(n,r)= "+result);