let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));

if (numero1 > numero2 && numero3) {
  document.write("El numero mas grande es el numero 1: " + numero1);
} else if (numero1 == numero2 && numero3) {
  document.write("Todos los numeros son iguales,numero ingresado: " + numero1);
}

if (numero2 > numero1 && numero3){
    document.write("El numero mas grande es el numero 2: " + numero2);
} else if (numero2 == numero1 && numero3) {
  document.write("Todos los numeros son iguales,numero ingresado: " + numero2);
}

if (numero3 > numero1 && numero2) {
    document.write("El numero mas grande es el numero 3: " + numero3);
} else if (numero3 == numero1 && numero2) {
    document.write("Los tres numeros son iguales, numero ingresado: "+numero3);
}