//PROYECTO DE STACK

var fraseUser = prompt("Escribe una frase y sabrás si es un Palindromo","Se van sus naves");
    function frasePalindromo(fraseUser){
      fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");
      fraserReverse=fraseUser.split("").reverse().toString();
      for (var i = 0; i < ((fraserReverse.length)-1); i++) {
        fraserReverse=fraserReverse.replace(",","");
      };
      if(fraseUser==fraserReverse){
        resultado="es un Palindromo";
      }
      else{
        resultado="no es un Palindromo";
      }
      return("Tu frase "+resultado);
    }
    console.log(frasePalindromo(fraseUser));
    