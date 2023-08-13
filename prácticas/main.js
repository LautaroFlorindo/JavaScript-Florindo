// // COMPARADOR DE ALTURA

// let altura;

// let nombre = prompt("Ingrese su nombre");
// while (nombre == "") {
//     nombre = prompt("Dale rey ingresa tu nombre, o tus iniciales por lo menos plis");
// }

// let opcion = prompt("Hola " + nombre + ", ¿te gustaría saber a qué famoso te asemejas en altura?\n\nIngresá 1 para SI\nIngresá 2 para NO")


// if(opcion != 1 && opcion != 2) {
//     for (let i = 0; i = 1; i = i + 1){
//         alert("Mirá, tenés la opción de ingresar 1 para SI, y 2 para NO, no te compliques.")        
//         opcion = prompt("Dale que vos podés:\n\nIngresá 1 para SI\nIngresá 2 para NO")
//         if (opcion == 1 || opcion == 2) {
//             break;
//         }
//         opcion = prompt("Uh se complicó parece, seguí las instrucciones:\n\nIngresá 1 para SI\nIngresá 2 para NO")
//         if (opcion == 1 || opcion == 2) {
//             break;
//         }
//         opcion = prompt("Triste lo que estoy viendo...\n\nIngresá 1 para SI\nIngresá 2 para NO")
//         if (opcion == 1 || opcion == 2) {
//             break;
//         }
//         alert("Me cansé, volvé la próxima")
//         break
//     } 
// }


// if (opcion == 1) {
//     altura = parseInt(prompt("Joya\nIngresá tu altura en centimetros:\n\nIngresá 0 para cancelar"));
//     if (altura > 0) {
//         do {
//             while (altura != 0) {

//                 while (isNaN(altura)) {
//                     alert("Poné un número en centímetros brother.\n0 para salir.");
//                     altura = parseInt(prompt("Ingresá tu altura en centimetros:\n\nIngresá 0 para cancelar"))
//                 }
//                 if (altura <= 70 || altura >= 250 && altura > 0) {
//                     alert("Ja de mentir")
//                     altura = parseInt(prompt("Ingresá un número realista en centímetros, sino:\nIngresá 0 para cancelar"));
//                 } else if (altura <= 152 && altura > 0) {
//                     alert("Danny Devito un poroto");
//                     altura = parseInt(prompt("Si querés, volvé a probar otro número, sino:\nIngresá 0 para salir"));
//                 } else if (altura >= 210) {
//                     alert("Te buscan los lakers mostro");
//                     altura = parseInt(prompt("Si querés, volvé a probar otro número, sino:\nIngresá 0 para salir"));
//                 } else if (altura > 140 && altura < 210) {
//                     let alturaRedondeada = Math.round(altura / 5) * 5
//                     switch (alturaRedondeada) {
//                         case 155:
//                             alert("La Ferrari Shakira")
//                             break;
//                         case 160:
//                             alert("Scarlet Johansson sos vos?")
//                             break;
//                         case 165:
//                             alert("Como el Diego, que honor")
//                             break;
//                         case 170:
//                             alert("Probablemente lo único que tengas similar a Messi")
//                             break;
//                         case 175:
//                             alert("Como el Führer. Hail Hitler")
//                             break;
//                         case 180:
//                             alert("Como Taylor Swift, altísima la hdp")
//                             break;
//                         case 185:
//                             alert("Igual que CR7, ese que se retiró sin mundiales")
//                             break;
//                         case 190:
//                             alert("Como Snoop Dogg, que jefe")
//                             break;
//                         case 195:
//                             alert("Perdón que te sal-Pique")
//                             break;
//                         case 200:
//                             alert("Juju Del Potro")
//                             break;
//                         case 205:
//                             alert("La rompés Lebron")
//                             break;
//                     }
//                     altura = parseInt(prompt("Si querés, volvé a probar otro número, sino:\nIngresá 0 para salir"));
//                 }
//             }
//         } while (altura !== 0);
//         alert("Gracias por participar legend")
//     } else if (altura == 0) {
//         alert("Para qué ponés que sí y después no jugás")
//     }

// }
// else if (opcion == 2) {
//     alert("Oka ni nos vimos")
// }




// // CALCULADORA / PRUEBA


// function resultado() {
    
//     let num1 = parseInt(prompt("Ingrese un número"))
//     let operacion = parseInt(prompt("Seleccione una operación\n\n1. +\n2. -\n3. *\n4. /"));
//     let num2 = parseInt(prompt("Ingrese otro número"))
//     let resultadoOperacion;

    
//     switch (operacion) {
//         case 1:
//             resultadoOperacion = num1 + num2;
//             break;
//         case 2:
//             resultadoOperacion = num1 - num2;
//             break;
//         case 3:
//             resultadoOperacion = num1 * num2;
//             break;
//         case 4:
//             resultadoOperacion = num1 / num2;
//             break;
//     }
//     alert("Resultado es: " + resultadoOperacion)
// }

// resultado();