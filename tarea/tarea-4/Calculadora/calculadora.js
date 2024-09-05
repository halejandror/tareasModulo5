
let numero1= parseFloat(process.argv[2]);
let operador= process.argv[3];
let numero2= parseFloat(process.argv[4]);

function calcular(numero1, operador, numero2) {

  if (operador == '+' && isNaN(numero1)== false && isNaN(numero2)== false) {
    return numero1 + numero2;
  } else if (operador == "-"&& isNaN(numero1)== false && isNaN(numero2)== false) {
    return numero1 - numero2;
  }else if (operador == "*" && isNaN(numero1)== false && isNaN(numero2)== false) {
    return numero1 * numero2;
  }else if (operador == "/" && isNaN(numero1)== false && isNaN(numero2)== false && numero2 !== 0) {
    return numero1 / numero2;
  }else(console.log(`Dame valores correctos, argumentos 1 y 3 deben ser numeros, si vas a dividir no pongas 0 como 
    divisor, y en el argumento 2 debes usar signos como + - * /`))
   
}
console.log(calcular(numero1, operador, numero2));
