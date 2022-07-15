let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));

if (numero1 > numero2) {
  document.write("El numero mas grande es el numero 1: " + numero1);
} else if (numero1 == numero2) {
  document.write("Ambos numeros son iguales,numero ingresado: " + numero1);
} else {
  document.write("El segundo numero es mayor: " + numero2);
}