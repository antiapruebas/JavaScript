/*Pedir dos números y mostrar el resultado*/
function ejercicio1(){
    var numero1 = parseFloat(prompt('Escribe el primer número'));
    var numero2 = parseFloat(prompt('Escribe el segundo número'));
    console.log(numero1+numero2);
}

/*Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/
// function ejercicio2(){
//     var numero= parseFloat(prompt('Escribe el número del que quieras el cuadrado'));
//     if (numero >= 0) {
//     console.log('El cuadrado de '+ numero +' es ' + numero * numero);
//     ejercicio2();}
//     else {
//         console.log ('El numero es negativo')
//     }
// }

function ejercicio2(){

    while ((numero= parseFloat(prompt('Introduce el numero:'))) >= 0){
    console.log('El cuadrado de '+ numero +' es ' + numero * numero);
    }
if (numero <0) {console.log("No seas negativo, fuera!")}
}



/*Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/

function ejercicio3(){
var contar=0;
while ((numero= parseFloat(prompt('Introduce el numero:'))) >= 0){ 
    contar++}
console.log('Bien! Has introducido un número negativo! después de '+  contar + ' intentos')

}

/*Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
function ejercicio4(){
    var suma =0; 
    var numero;
    var contar =0;
while ((numero= parseFloat(prompt('Introduce el numero:'))) >= 0){ 
    suma = suma+ numero
    contar++}
console.log('La media de los numeros introducidos es '+ suma/contar)

}
    


/*Pedir un número N, y mostrar todos los números del 1 al N. */
function ejercicio5(){

    console.log('ejercicio 5')
}


