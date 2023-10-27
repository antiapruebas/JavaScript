/*Pedir dos números y mostrar el resultado*/
function ejercicio1() {
  var numero1 = parseFloat(prompt("Escribe el primer número"));
  var numero2 = parseFloat(prompt("Escribe el segundo número"));
  console.log(numero1 + numero2);
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

function ejercicio2() {
  while ((numero = parseFloat(prompt("Introduce el numero:"))) >= 0) {
    console.log("El cuadrado de " + numero + " es " + numero * numero);
  }
  if (numero < 0) {
    console.log("No seas negativo, fuera!");
  }
}

/*Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/

function ejercicio3() {
  var contar = 0;
  while ((numero = parseFloat(prompt("Introduce el numero:"))) >= 0) {
    contar++;
  }
  console.log("Bien! Has introducido un número negativo! después de " + contar + " intentos");
}

/*Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
function ejercicio4() {
  var suma = 0;
  var numero;
  var contar = 0;
  while ((numero = parseFloat(prompt("Introduce el numero:"))) >= 0) {
    suma = suma + numero;
    contar++;
  }
  console.log("La media de los numeros introducidos es " + suma / contar);
}

/*Pedir un número N, y mostrar todos los números del 1 al N. */

function ejercicio5() {
  var n = parseInt(prompt("Introduce un número:"));

  for (var i = 1; i <= n; i++) {
    document.write(i + "<br>");
  }
}

// Escribir todos los números del 100 al 0 de 7 en 7.

function ejercicio6() {
  for (i = 100; i >= 0; i -= 7) {
    console.log(i);
  }
}

//Diseñar un programa que muestre el producto de los 10 primeros números impares.

function ejercicio7() {
  var producto = 1;
  var contador = 0;
  for (i = 1; contador < 10; i += 2) {
    producto *= i; // producto= producto* i
    contador++;
  }
  console.log("El producto de los 10 primero numeros impares es " + producto);
}

//Pedir un número y calcular su factorial.
function ejercicio8() {
  var numero = parseInt(prompt("Calcular el factorial del número:"));
  var factorial = 1;
  for (i = 1; i <= numero; i++) {
    factorial *= i; // factorial= factorial * i (i es todos los numeros menores que EL NUMERO hasta el 1)
  }

  console.log(factorial);
}

//Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.

function ejercicio9() {
  var sumaPositivos = 0;
  var contadorPositivos = 0;
  var sumaNegativos = 0;
  var contadorNegativos = 0;
  var contadorCeros = 0;

  // Bucle que se ejecuta 10 veces
  for (var i = 1; i <= 10; i++) {
    // Se solicita al usuario que ingrese un número y se almacena en la variable numero
    var numero = parseInt(prompt("Introduce un número:"));

    // Si el número es mayor que 0, se suma a la suma de los positivos y se incrementa el contador de positivos
    if (numero > 0) {
      sumaPositivos += numero;
      contadorPositivos++;
    }
    // Si el número es menor que 0, se suma a la suma de los negativos y se incrementa el contador de negativos
    else if (numero < 0) {
      sumaNegativos += numero;
      contadorNegativos++;
    }
    // Si el número es igual a 0, se incrementa el contador de ceros
    else {
      contadorCeros++;
    }
  }

  // Cálculo de la media de los números positivos y negativos
  var mediaPositivos = sumaPositivos / contadorPositivos;
  var mediaNegativos = sumaNegativos / contadorNegativos;

  // Mostrar en pantalla los resultados
  document.write("Media de los números positivos: " + mediaPositivos + "<br>");
  document.write("Media de los números negativos: " + mediaNegativos + "<br>");
  document.write("Cantidad de ceros: " + contadorCeros);
}

//Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.

function ejercicio10() {
  // Variables para almacenar la suma de los sueldos y el contador de sueldos mayores a 1000€
  var sumaSueldos = 0;
  var contadorMayores1000 = 0;

  // Bucle que se ejecuta 10 veces
  for (var i = 1; i <= 10; i++) {
    // Se solicita al usuario que ingrese un sueldo y se almacena en la variable sueldo
    var sueldo = parseInt(prompt("Introduce un sueldo:"));

    // Se suma el sueldo a la suma total de sueldos
    sumaSueldos += sueldo;

    // Si el sueldo es mayor a 1000€, se incrementa el contador de sueldos mayores a 1000€
    if (sueldo > 1000) {
      contadorMayores1000++;
    }
  }

  // Mostrar en pantalla la suma de los sueldos y la cantidad de sueldos mayores a 1000€
  document.write("La suma de los sueldos es: " + sumaSueldos + "<br>");
  document.write("Cantidad de sueldos mayores a 1000€: " + contadorMayores1000);
}
//Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.

function ejercicio11() {
  // Variables para almacenar la suma de las edades, la suma de las alturas,
  // el contador de alumnos mayores de 18 años y el contador de alturas mayores a 1.75.
  var sumaEdades = 0;
  var sumaAlturas = 0;
  var contadorMayores18 = 0;
  var contadorAlturasMayores175 = 0;

  // Bucle que se ejecuta 5 veces para obtener los datos de 5 alumnos.
  for (var i = 1; i <= 5; i++) {
    // Se solicita al usuario que ingrese la edad y la altura del alumno i y se almacenan en las variables edad y altura.
    var edad = parseInt(prompt("Introduce la edad del alumno " + i + ":"));
    var altura = parseFloat(prompt("Introduce la altura del alumno " + i + ":"));

    // Se suman la edad y la altura a las sumas totales.
    sumaEdades += edad;
    sumaAlturas += altura;

    // Si la edad del alumno es mayor a 18, se incrementa el contador de alumnos mayores de 18 años.
    if (edad > 18) {
      contadorMayores18++;
    }

    // Si la altura del alumno es mayor a 1.75, se incrementa el contador de alturas mayores a 1.75.
    if (altura > 1.75) {
      contadorAlturasMayores175++;
    }
  }

  // Se calcula la media de las edades y de las alturas dividiendo las sumas totales por 5.
  var mediaEdades = sumaEdades / 5;
  var mediaAlturas = sumaAlturas / 5;

  // Se muestra en pantalla la edad media, la altura media, la cantidad de alumnos mayores de 18 años y la cantidad de alumnos con altura mayor a 1.75.
  document.write("Edad media: " + mediaEdades + "<br>");
  document.write("Altura media: " + mediaAlturas + "<br>");
  document.write("Cantidad de alumnos mayores de 18 años: " + contadorMayores18 + "<br>");
  document.write("Cantidad de alumnos con altura mayor a 1.75: " + contadorAlturasMayores175);
}

//Pedir un número y mostrar si es primo o no.
function ejercicio12() {
  const numero = parseInt(prompt("Introduce un número:"));
  var primo = true;
  if (numero <= 1) {
    primo = false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
    }
  }

  if (primo) {
    document.write(numero + " Es primo");
  } else {
    document.write(numero + " No es primo");
  }
}

//Pedir un número y mostrar todos los números pares desde 1 hasta ese número.

function ejercicio13() {
  var numero = parseInt(prompt("Introduce un número:"));

  for (var i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      document.write(i + "<br>");
    }
  }
}

//Pedir un número y mostrar su tabla de multiplicar del 1 al 10.

function ejercicio14() {
  var numero = parseInt(prompt("Introduce un número:"));
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    document.write(numero + " x " + i + " es igual a " + resultado + ". <br>");
  }
}

//Calcular la suma de los dígitos de un número entero

function ejercicio15() {
  var numero = parseInt(prompt("Introduce un número:"));
  var array = numero.toString().split("");
  var sumar = 0;
  for (var i = 0; i < array.length; i++) {
    sumar += parseInt(array[i]);
  }

  console.log("La suma de los dígitos del número es:" + sumar);
}

//Calcula la letra del DNI español

function ejercicio16() {
  var numero = parseInt(prompt("Introduce el número de DNI para calcular la letra:"));
  var resto = numero % 23;
  var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  var letra = letras[resto];

  console.log("La letra del DNI " + numero + " es: " + letra);
}

// CORRECCIÓN

// var dni = prompt("Introduce el número de DNI:");

//     // Validar que el número de DNI tenga 8 dígitos
//     if (dni.length !== 8) {
//       alert("El número de DNI debe tener 8 dígitos."); // Si el número de DNI no tiene 8 dígitos, se muestra una alerta
//     } else {

//       // Obtener la letra del DNI según el algoritmo
//       var letras = "TRWAGMYFPDXBNJZSQVHLCKE"; // Cadena de caracteres que contiene las letras correspondientes a los dígitos del DNI
//       var indice = parseInt(dni) % 23; // Cálculo del índice correspondiente al número de DNI
//       var letra = letras.charAt(indice); // Obtención de la letra correspondiente al índice

//       document.write("La letra del DNI es: " + letra); // Se muestra en pantalla la letra del DNI
//}

//  Solicitar al usuario el total de la cuenta y el porcentaje de propina deseado, despues mostrar por pantalla la propina en euros y el total (propina incluida)

function ejercicio17() {
  var cuenta = parseFloat(prompt("¿Cuál es el total de la cuenta?"));
  var porcentajePropina = parseFloat(prompt("¿Cuál va a ser el porcentaje de propina?"));

  cuentaCentimos = cuenta * 100;

  var propinaCentimos = Math.round((cuentaCentimos * porcentajePropina) / 100);

  propina = propinaCentimos / 100;

  var total = cuenta + propina;

  document.write(
    "La propina es de " +
      propina +
      " EUR . El total con la propina es  " +
      total.toFixed(2) +
      " EUR"
  );
}

//Hacer un juego de adivinanza. Generar un numero entre 0 y 100 y pedir al usuario que intente adivinarlo. Si lo acierta mostrar un mensaje de felicidades y sino indicar si el numero es mayor o menor comparándolo con el introducido por el usuario.
function ejercicio18() {
  var numeroAleatorio = Math.round(Math.random() * 100);
  var intentos = 0;

  do {
    var intentoUsuario = parseInt(prompt("Adivina el número entre 0 y 100:"));
    intentos++;

    if (intentoUsuario == numeroAleatorio) {
      console.log("¡Bieeen! " + numeroAleatorio + "Lo conseguiste en " + intentos + " intentos!");
    } else if (intentoUsuario < numeroAleatorio) {
      console.log("El número es mayor. Intentalo de nuevo.");
    } else {
      console.log("El número es menor. Intentalo de nuevo.");
    }
  } while (intentoUsuario !== numeroAleatorio);
}

/*  Eliminar una palabra:

//         ◦ Pedir al usuario que ingrese una frase y una palabra a eliminar.

//         ◦ Eliminar todas las apariciones de la palabra en la frase utilizando el método split, join y indexOf.

//         ◦ Mostrar la frase resultante sin la palabra eliminada. */

function ejercicio19() {
  var frase = prompt("Ingrese una frase:");
  var palabraEliminar = prompt("Ingrese la palabra a eliminar:");

  // Utilizamos el método split para convertir la frase en un array de palabras
  var palabras = frase.split(" ");

  // Utilizamos el método indexOf para encontrar las apariciones de la palabra a eliminar
  var indice = palabras.indexOf(palabraEliminar);
  while (indice !== -1) {
    // Eliminamos la palabra del array utilizando el método splice
    palabras.splice(indice, 1);
    indice = palabras.indexOf(palabraEliminar);
  }

  // Utilizamos el método join para unir las palabras del array en una frase nuevamente
  var fraseResultante = palabras.join(" ");

  // Mostramos la frase resultante sin la palabra eliminada
  document.write("Frase resultante: " + fraseResultante);
  alert("Frase resultante: " + fraseResultante);
}

// Pedir al usuario que ingrese una lista de elementos separados por comas. Devolver una lista sin elementos duplicados

function ejercicio20() {
  var palabrasTexto = prompt("Escribe varias palabras separadas por comas");
  var palabrasArray = palabrasTexto.split(",");
  var sinDuplicadosArray = [];

  for (i = 0; i < palabrasArray.length; i++) {
    if (!sinDuplicadosArray.includes(palabrasArray[i])) {
      sinDuplicadosArray.push(palabrasArray[i]);
    }
  }

  document.write("La lista sin duplicados es :" + sinDuplicadosArray);
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var palabras = ["Hola", "Mundo", "JavaScript", "Introducción", "Programación"];

var frase = "Este es un ejemplo de una frase larga.";

var estudiantes = ["Ana", "Juan", "María", "Pedro", "Luis"];

// Ejercicio 1: Extraer los primeros 3 números del array 'numeros'

function ejercicio21_1() {
  console.log(numeros.slice(0, 3));
}

// Ejercicio 2: Extraer las palabras en las posiciones 2 y 3 del array 'palabras'

function ejercicio21_2() {
  console.log(palabras.slice(2, 4));
}

// Ejercicio 3: Extraer una parte de la frase desde el índice 5 hasta el 15

function ejercicio21_3() {
  console.log(frase.slice(5, 15));
}

// Ejercicio 4: Extraer los dos últimos elementos del array 'estudiantes'

function ejercicio21_4() {
  console.log(estudiantes.slice(-2));
}

// Ejercicio 5: Extraer una porción del array 'numeros' desde el índice 3 hasta el final

function ejercicio21_5() {
  console.log(numeros.slice(3));
}

// Pedirle una frase al usuario y devolver mitad en minuscula y mitad en mayuscula

function ejercicio22() {
  var frase = prompt("Dime una frase:");

  var longitud = frase.length;

  var mitad = Math.floor(longitud / 2);

  var mitadMinuscula = frase.slice(0, mitad).toLowerCase();

  var mitadMayuscula = frase.slice(mitad).toUpperCase();

  var resultado = mitadMinuscula + mitadMayuscula;

  console.log(resultado);
}

// Escribe un programa en JavaScript que solicite al usuario ingresar una oración. A partir de la oración ingresada, el programa deberá realizar los siguientes pasos:
// 1. Contar la cantidad de palabras en la oración.
// 2. Solicitar al usuario ingresar una palabra específica para buscar en la oración.
// 3. Contar la cantidad de ocurrencias de la palabra ingresada en la oración.
// 4. Solicitar al usuario ingresar una nueva palabra para reemplazar todas las ocurrencias de la palabra ingresada en la oración.
// 5. Reemplazar todas las ocurrencias de la palabra ingresada por la nueva palabra.
// 6. Mostrar la oración resultante después de realizar el reemplazo.

function ejercicio23() {
  //1
  var frase = prompt("Dime una frase:");

  //2
  var palabras = frase.split(" ");
  console.log(" 1. Numero de palabras de la oración: " + palabras.length);

  //3
  var palabraBuscar = prompt("Qué palabra quieres buscar?");

  //4
  var palabraReemplazar = prompt("¿Por qué palabra la quieres reemplazar?");

  //5

  for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];

    if (palabra === palabraBuscar) {
      fraseFinal += palabraReemplazar;
    } else {
      fraseFinal += palabra;
    }

    // esto es haciendo trampa  var fraseFinal = frase.split(palabraBuscar).join(palabraReemplazar);

    document.write(fraseFinal);
  }
}

function ejercicio24() {
  // Ejercicio 1: Eliminar elementos de un array
  //Enunciado: Dado el siguiente array de números: [10, 20, 30, 40, 50], elimina los elementos en las posiciones 1 y 3.

  var numeros = [10, 20, 30, 40, 50];
  numeros.splice(1, 1);
  numeros.splice(2, 1);
  document.write(" 1 Números: " + numeros + "<br>");

  //Ejercicio 2: Reemplazar elementos en un array
  //Enunciado: Dado el siguiente array de letras: ['a', 'b', 'c', 'd', 'e'], reemplaza los elementos en las posiciones 0 y 4 por los valores 'x' y 'y' respectivamente.

  var letras = ["a", "b", "c", "d", "e"];
  letras.splice(0, 1, "x");
  letras.splice(4, 1, "y");
  document.write("2 Letras: " + letras + "<br>");

  // Ejercicio 3: Insertar elementos en un array
  // Enunciado: Dado el siguiente array de palabras: ['hello', 'world', 'JavaScript'], inserta los elementos 'goodbye' y 'code' en la posición 2 sin eliminar ningún elemento existente.

  var palabras = ["hello", "world", "JavaScript"];
  palabras.splice(2, 0, "goodbye", "code");
  document.write("3 Palabras: " + palabras + "<br>");

  // Ejercicio 4: Extraer una porción de elementos de un array
  // Enunciado: Dado el siguiente array de números: [5, 10, 15, 20, 25], extrae los elementos desde la posición 2 hasta la posición 4 y muestra tanto el array resultante como los elementos extraídos.
  var otrosNumeros = [5, 10, 15, 20, 25];
  var numerosExtraer = otrosNumeros.splice(2, 3);
  document.write(" 4 Números Extraídos: " + numerosExtraer + "<br>");
  document.write("4 Números Restantes: " + otrosNumeros + "<br>");

  // Ejercicio 5: Dividir un array en dos partes
  // Enunciado: Dado el siguiente array de frutas: ['manzana', 'banana', 'pera', 'uva', 'kiwi'], divide el array en dos partes en la posición 3 y muestra tanto la primera parte como la segunda parte resultantes.

  var frutas = ["manzana", "banana", "pera", "uva", "kiwi"];
  var primeraParte = frutas.splice(0, 3);
  var segundaParte = frutas;
  document.write("5  Primera Parte: " + primeraParte + "<br>");
  document.write("5 Segunda Parte: " + segundaParte + "<br>");
}

function ejercicio25() {
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
  var otrosNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 40 },
  ];

  //   Ejercicio 1: Filtrar números pares
  // Filtrar los números pares del array numeros y mostrarlos en el documento.

  var numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  document.write("1.Los numeros pares son " + numerosPares + "<br>");

  // Ejercicio 2: Filtrar palabras que empiecen con la letra "b"
  // Filtrar las palabras del array palabras que empiezan con la letra "b" y mostrarlas en el documento.

  var conBeDeBurro = palabras.filter(function (String) {
    return String[0] == "b";
  }); // igual es mejor startsWith()

  document.write("2. Las palabras que empiezan por B son: " + conBeDeBurro + "<br>");

  // Ejercicio 3: Filtrar números mayores que 50
  // Filtrar los números del array numeros que son mayores que 50 y mostrarlos en el documento.

  var otrosNumerosSeñores = otrosNumeros.filter(function (numero) {
    return numero > 50;
  });

  document.write("3. Los numeros mayores de 50 son " + otrosNumerosSeñores + "<br>");

  // Ejercicio 4: Filtrar personas mayores de 30 años
  // Filtrar las personas en el array de objetos personas cuya edad sea mayor o igual a 30 y mostrarlas en el documento.

  var personasCasiJovenes = personas.filter(function (values) {
    return values.edad <= 30;
  });

  document.write(
    "4.Las personas de 30 años o más son: " + JSON.stringify(personasCasiJovenes) + "<br>"
  );

  // Ejercicio 5: Filtrar palabras que contengan la subcadena "an"
  // Filtrar las palabras del array palabras que contienen la subcadena "an" y mostrarlas en el documento.
  var palabrasAn = palabras.filter(function (palabra) {
    return palabra.includes("an");
  });

  document.write("5. LAs palabras con 'an' son " + palabrasAn + "<br>");
}

function ejercicio26() {
  var personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 40 },
  ];
  var nombreBuscado = "María";

  var productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 15 },
  ];
  var precioMaximo = 40;

  var tareas = [
    { nombre: "Comprar leche", completada: true },
    { nombre: "Pagar facturas", completada: false },
    { nombre: "Hacer ejercicio", completada: true },
    { nombre: "Llamar al médico", completada: false },
  ];
  var empleados = [
    { nombre: "Juan", edad: 25, departamento: "Ventas" },
    { nombre: "María", edad: 30, departamento: "Marketing" },
    { nombre: "Pedro", edad: 35, departamento: "Ventas" },
    { nombre: "Ana", edad: 40, departamento: "Recursos Humanos" },
  ];
  var departamentoBuscado = "Ventas";
  var edadMinima = 30;
  var libros = [
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
  ];
  var subcadenaBuscada = "soledad";

  /*Ejercicio 1: Filtrar objetos con un valor específico en una propiedad
Dado un array de objetos personas, debes filtrar y obtener los objetos cuya propiedad nombre coincida exactamente con un valor específico. Almacena los objetos filtrados en la variable personasFiltradas.*/

  var personasFiltradas = personas.filter(function (persona) {
    return persona.nombre == nombreBuscado;
  });

  document.write("1. Las personas que buscamos son " + JSON.stringify(personasFiltradas) + "<br>");

  /* Ejercicio 2: Filtrar objetos basado en una propiedad numérica
Dado un array de objetos productos, debes filtrar y obtener los objetos cuya propiedad precio sea menor o igual a un valor máximo dado. Almacena los objetos filtrados en la variable productosFiltrados.*/

  var productosFiltrados = productos.filter(function (producto) {
    return producto.precio <= precioMaximo;
  });

  document.write("2. Los productos baratos son " + JSON.stringify(productosFiltrados) + "<br>");

  /*Ejercicio 3: Filtrar objetos basado en una propiedad de tipo booleano
Dado un array de objetos tareas, debes filtrar y obtener los objetos cuya propiedad completada sea true. Almacena los objetos filtrados en la variable tareasCompletadas.*/
  var tareasCompletadas = tareas.filter(function (tarea) {
    return (tarea.completada = true);
  });
  document.write("3. Las tareas completadas son " + JSON.stringify(tareasCompletadas) + "<br>");

  /*Ejercicio 4: Filtrar objetos basado en múltiples condiciones
Dado un array de objetos empleados, debes filtrar y obtener los objetos que cumplan con dos condiciones: que la propiedad departamento sea igual a un valor específico y que la propiedad edad sea mayor o igual a un valor mínimo dado. Almacena los objetos filtrados en la variable empleadosFiltrados.*/
  var empleadosFiltrados = empleados.filter(function (empleado) {
    return (
      empleado.departamento.toLowerCase() === departamentoBuscado.toLowerCase() &&
      empleado.edad >= edadMinima
    );
  });
  document.write(
    "4. Los empleados despedidos son : " + JSON.stringify(empleadosFiltrados) + "<br>"
  );

  /* Ejercicio 5: Filtrar objetos basado en una propiedad que contiene una subcadena
Dado un array de objetos libros, debes filtrar y obtener los objetos cuya propiedad titulo contenga una subcadena específica, sin importar mayúsculas o minúsculas. Almacena los objetos filtrados en la variable librosFiltrados.*/

  var librosFiltrados = libros.filter(function (libro) {
    return libro.titulo.toLowerCase().includes(subcadenaBuscada.toLowerCase());
  });

  document.write("5. Los libros que buscamos son  " + JSON.stringify(librosFiltrados) + "<br>");
}

function ejercicio27() {
  //  1. Recorre el array words = ['hello', 'world', 'javascript'] de strings e imprime cada palabra en mayúsculas.

  var words = ["hello", "world", "javascript"];

  document.write("1. <br>");
  for (i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();

    document.write(words[i] + "<br>");
  }

  //   2. Dado el array numbers = [2, 4, 6, 8, 10] de números, crea un nuevo array que contenga el cuadrado de cada número.

  var numbers = [2, 4, 6, 8, 10];
  var squares = [];
  numbers.forEach(function (number) {
    squares.push(number ** 2);
  });

  // Debería haber visto el pdf, veo que se puede hacer con mapa
  var squareMap = numbers.map((number) => number ** 2);

  document.write("<br> 2." + JSON.stringify(squares) + "<br>");
  document.write("2.2 (con mapa)" + JSON.stringify(squareMap) + "<br>");

  //   3. Verifica si todos los elementos del array names = ['John', 'Jane', 'Mark', 'Emily'] de strings tienen una longitud mayor a 3 caracteres.
  var names = ["John", "Jane", "Mark", "Emily"];

  var todosNombresLargos = true;

  names.forEach(function (name) {
    if (name.length < 3) {
      todosNombresLargos = false;
    }
  });

  // Debería haber visto el pdf2.0 veo que se puede hacer con every

  document.write(
    "<br> 3. ¿Todos los nombres tienen más de 3 caractéretes? " + todosNombresLargos + "<br>"
  );

  //   4. Verifica si al menos un elemento del array numbers = [8, 12, 7, 25, 16] de números es divisible por 5.

  var numbers4 = [8, 12, 7, 25, 16];
  var algunDivisible5 = false;
  numbers4.forEach(function (numero) {
    if (numero % 5 === 0) {
      algunDivisible5 = true;
    }
  });

  // Debería haber visto el pdf3.0 veo que se puede hacer con some

  document.write("<br>   4. ¿Hay algún número divisible por 5? " + algunDivisible5 + "<br>");

  //   5. Ordena de forma ascendente el array numbers = [5, 1, 3, 2, 4] de objetos numéricos.

  var numbers5 = [5, 1, 3, 2, 4];

  numbers5.sort();

  document.write("<br>   5. " + JSON.stringify(numbers5) + "<br>");

  // 6. Recorre el array names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'] de nombres e imprime solo aquellos que contengan la letra 'a'.

  var names = ["Alice", "Bob", "Charlie", "David", "Eleanor"];

  document.write("<br>   6. ");

  var namesImprimir = names.forEach(function (name) {
    if (name.toLowerCase().includes("a")) {
      document.write(name + "<br>");
    }
  });

  // 7. Dado el array celsiusTemperatures = [25, 30, 15, 20, 10] de temperaturas en grados Celsius, conviértelo a grados Fahrenheit.
  var celsiusTemperatures = [25, 30, 15, 20, 10];
  var fahrenheitTemperaturesMap = celsiusTemperatures.map(function (celsius) {
    return (celsius * 9) / 5 + 32;
  });
  document.write(" <br>7. " + JSON.stringify(fahrenheitTemperaturesMap) + "<br>");

  // 8. Verifica si todos los elementos del array numbers = [2, -4, 6, -8, 10] de números son positivos.

  var numbers8 = [2, -4, 6, -8, 10];

  var sonNumerosPositivos = numbers8.every(function (number) {
    return number > 0;
  });

  document.write(" <br>8. ¿Son todos positivos? " + sonNumerosPositivos + "<br>");

  // 9. Verifica si al menos un elemento del array phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'] de strings contiene la palabra "JavaScript".

  var phrases = ["I love JavaScript", "JavaScript is fun", "Coding with JavaScript"];

  var loIncluye = phrases.some(function (phrase) {
    return phrase.includes("JavaScript");
  });
  document.write(" <br>8. ¿Pone JavaScript ? " + loIncluye + "<br>"); // Imprime el resultado de la verificación

  // 10. Ordena alfabéticamente por el nombre el array users = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }, { name: 'David', age: 28 }] de objetos.

  var users = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "David", age: 28 },
  ];

  var ordenados = users.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  document.write("<br> 10. " + JSON.stringify(ordenados) + "<br>");
}
function ejercicio28() {
  var jugadaJugador = 0;
  var partidasPerdidas = 0;
  var partidasGanadas = 0;

  function jugar() {
    do {
      jugadaJugador = parseInt(prompt("Elije 'Piedra' (1) , 'Papel' (2), o 'Tijera' (3) "));
    } while (!(jugadaJugador > 0 && jugadaJugador < 4));

    var jugadaMaquina = Math.floor(Math.random() * (4 - 1) + 1);

    if (jugadaJugador == jugadaMaquina) {
      volver = confirm("Empate!! Quieres volver a jugar?");

      if (volver == true) {
        jugar();
      } else {
        alert("Adióóós ");
      }
    } else if (
      (jugadaJugador == 1 && jugadaMaquina == 2) ||
      (jugadaJugador == 2 && jugadaMaquina == 3) ||
      (jugadaJugador == 3 && jugadaMaquina == 1)
    ) {
      partidasPerdidas++;
      volver = confirm(" Gana la máquina jeje . ¿Quieres volver a jugar?");

      if (volver == true) {
        jugar();
      } else {
        alert("Adióóós ");
      }
    } else {
      partidasGanadas++;

      volver = confirm(" Bieeen! Has ganado! Quieres volver a jugar?");

      if (volver == true) {
        jugar();
      } else {
        alert("Adióóós ");
      }
    }
  }

  jugar();
}

function ejercicio29() {
  //Calcular la edad de una persona:
  // Solicitar al usuario su fecha de nacimiento.
  // Calcular la diferencia en años entre la fecha actual y la fecha de nacimiento.
  // Mostrar la edad resultante.

  var fechaNacimiento = new Date(prompt("Cual es tu fecha de nacimiento en mm-dd-aaaa "));
  var fechaActual = new Date();

  //document.write((fechaActual.getFullYear()- fechaNacimiento.getFullYear()))  Así sólo tiene en cuenta los años

  var tiempoVivo = fechaActual - fechaNacimiento;

  var edad = Math.floor(tiempoVivo / (1000 * 60 * 60 * 24 * 365));

  document.write(edad + " años");
}

function ejercicio30() {
  //Calcular el tiempo transcurrido desde una fecha específica:
  // Solicitar al usuario una fecha en el pasado.
  // Calcular la diferencia en días, horas, minutos y segundos entre la fecha actual y la fecha ingresada.
  // Mostrar el tiempo transcurrido.

  var fechaPasada = new Date(prompt("Dime una fecha pasada en mm-dd-aaaa hh:mm:ss"));
  var fechaActual = new Date();
  var tiempoPasado = fechaActual - fechaPasada;

  var segundos = Math.floor(tiempoPasado / 1000) % 60;
  var minutos = Math.floor(tiempoPasado / (1000 * 60)) % 60;
  var horas = Math.floor(tiempoPasado / (1000 * 60 * 60)) % 24;
  var dias = Math.floor(tiempoPasado / (1000 * 60 * 60 * 24));

  document.write(
    "Han pasado: " +
      dias +
      " días, " +
      horas +
      " horas, " +
      minutos +
      " minutos y" +
      segundos +
      " segundos. desde " +
      fechaPasada
  );
}

function ejercicio31() {
  //   Obtener el día de la semana de una fecha específica:
  // Solicitar al usuario una fecha.
  // Obtener el día de la semana correspondiente a esa fecha.
  // Mostrar el día de la semana.

  var fechaPasada = new Date(prompt("Dime una fecha en mm-dd-aaaa"));

  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  var numeroDia = fechaPasada.getDay();
  var nombreDia = dias[numeroDia];

  document.write("Ese día es" + nombreDia + "! ");

  document.write();
}


function ejercicio32 () {
//   Calcular la fecha de vencimiento de un plazo:
// Solicitar al usuario una fecha de inicio y una duración en días.
// Calcular la fecha de vencimiento sumando la duración a la fecha de inicio.
// Mostrar la fecha de vencimiento.

var fechaInicio = new Date(prompt ("Cuál es la fecha de inicio:"));
var plazoDías = prompt ("Cuál es el plazo en días:");
var plazoMS= plazoDías *24*60*60*1000;
var vencimientoMS = fechaInicio.getTime() + plazoMS;
var vencimientoDate = new Date(vencimientoMS);

document.write("El vencimiento es " + vencimientoDate);


}


function ejercicio33 () {

//   Verificar si una fecha es un día festivo:
// Solicitar al usuario una fecha.
// Comprobar si esa fecha corresponde a un día festivo predefinido.
// Mostrar si la fecha es un día festivo o no.


  var festivos = [
    new Date(2023, 0, 1),  // Año Nuevo
    new Date(2023, 3, 14), // Viernes Santo
    new Date(2023, 4, 1),  // Día del Trabajador
    new Date(2023, 6, 25), // Santiago Apóstol
    new Date(2023, 9, 12), // Fiesta Nacional de España
    new Date(2023, 10, 1), // Día de Todos los Santos
    new Date(2023, 11, 6), // Día de la Constitución Española
    new Date(2023, 11, 25), // Navidad
  ];


var fechaUsuario = new Date(prompt("Ingresa una fecha (mm - dd - aaaa):"));

var esFestivo = festivos.some(function (festivo) {
  return festivo.getDate() === fechaUsuario.getDate() && festivo.getMonth() === fechaUsuario.getMonth()
});

if (esFestivo) {
  document.write ("Bieeen es festivo!");
} else {
  document.write ("No es festivo =(");
}
}

function ejercicio34() {   
  // Calcular el número de días hábiles entre dos fechas:
  // Solicitar al usuario una fecha de inicio y una fecha de fin.
  // Calcular el número de días hábiles (excluyendo fines de semana) entre las dos fechas.
  // Mostrar el número de días hábiles.
var fechaInicio =new Date( prompt ("Dime una fecha incial en mm-dd- aaaa"));
var fechaFinal = new Date (prompt ("Dime una fecha final en mm-dd- aaaa"));
var diasHabiles = 0; 


while ( fechaInicio <= fechaFinal) {
  if (fechaInicio.getDate() !==6 && fechaFinal.getDate() !== 0){
    diasHabiles++;
  }
  fechaInicio.setDate(fechaInicio.getDate()+ 1); // getDate() A numeric value equal to the day of the month. Sets the numeric day-of-the-month value of the Date object using local time.
}

document.write("Son   "  + diasHabiles + " días hábiles!")
}


function ejercicio35() { //PENDIENTE
//   Obtener la fecha actual en diferentes formatos:
// Obtener la fecha actual.
// Mostrar la fecha en formatos diferentes, como "DD/MM/AAAA", "AAAA-MM-DD", "Día de la semana, DD de Mes de AAAA", etc.
console.log ("Ejercicio sin hacer")

}

function ejercicio36 () { //PENDIENTE

//   Generar una secuencia de fechas:
// Solicitar al usuario una fecha de inicio y una fecha de fin.
// Generar una secuencia de fechas diarias entre las dos fechas.
// Mostrar todas las fechas generadas.

console.log ("Ejercicio sin hacer")
}



// //EXPRESIONES REGULARES


function ejercicio37 (){
  
// Validación de Correo Electrónico:
// Solicitar al usuario su correo electrónico
// Validar correo electrónico
// Mostrar si el correo electrónico es válido o no

var correo = prompt("Cuál es tu correo electrónico:");

var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if (correoRegex.test(correo)) {
  document.write("Gracias por darme un correo de verdad");
} else {
  document.write("Eso no es un correo");
}

}

function ejercicio38 (){

  // Validar número de teléfono
// Solicitar al usuario su número de teléfono
// Validar número de teléfono
// Mostrar si el número de teléfono es válido o no

var telf = prompt("¿Cuál es tu número de teléfono?");
var telfRegex = /^[6-7][0-9]{8}$/;

if (telfRegex.test(telf)) {
  document.write("Gracias, ya te llamaremos");
} else {
  document.write("No es un teléfono válido");
}

}

function ejercicio39() {

// A partir del siguiente texto, debes encontrar con una función los números de teléfono y mostrarlos por pantalla
// “Mi número de teléfono es 123-456-7890 y otro número es 555-555-5555.”
// Obtener los números de teléfono del texto
// Mostrar los números de teléfono por pantalla

var texto = "Mi número de teléfono es 123-456-7890 y otro número es 555-555-5555.";

var telefonoEstructura = /[0-9]{3}-[0-9]{3}-[0-9]{4}/g;

var telefonosTexto = texto.match(telefonoEstructura);

if (telefonosTexto) {
  document.write("Números de teléfono encontrados en el texto:<br>");

  for (var i = 0; i < telefonosTexto.length; i++) {
    document.write(telefonosTexto[i] + "<br>");
  }
} else {
  document.write("No se encontraron números de teléfono en el texto.");
}
}

function ejercicio40(){

// A partir del siguiente texto debes reemplazar la palabra “gato”
// Los niños tenían un gato en casa.
// El gato era un gato travieso.
// El gato solía subirse a los árboles.
// Los niños amaban al gato.
// El gato, el gato, el gato, siempre el gato.
// Crear una función que reemplace la palabra “gato” por la que se le mande por parámetro
// Mostrar el texto modificado

var texto = "Los niños tenían un gato en casa. El gato era un gato travieso. El gato solía subirse a los árboles. Los niños amaban al gato. El gato, el gato, el gato, siempre el gato.";
var palabraReemplazar = prompt("Por qué palabra quieres reemplazar la palabra 'gato'? ");
var regex = /gato/g;
textoFinal = texto.replace( regex, palabraReemplazar);

document.write(textoFinal);

}


