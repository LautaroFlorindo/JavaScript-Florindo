let salida;
let destino;
let medicion;
let distancia;
let resultado;
let variableMedicion;



let nombre = prompt("Ingrese su nombre");
while (nombre === "") {
    nombre = prompt("Dale rey ingresa tu nombre, o tus iniciales por lo menos plis");
}

let opcion = prompt("Hola " + nombre + ", acá no creemos en el sistema de medición actual (métrico ni imperial). Bienvenido, ¿Querés conocer los verdaderos sistemas de medición?\n\nIngresá 1 para SI\nIngresá 2 para NO")


if(opcion != 1 && opcion != 2) {
    for (let i = 0; i = 1; i = i + 1){
        alert("Mirá, tenés la opción de ingresar 1 para SI, y 2 para NO, no te compliques.")        
        opcion = prompt("Dale que vos podés:\n\nIngresá 1 para SI\nIngresá 2 para NO")
        if (opcion == 1 || opcion == 2) {
            break;
        }
        opcion = prompt("Uh se complicó, simplemente seguí las instrucciones:\n\nIngresá 1 para SI\nIngresá 2 para NO")
        if (opcion == 1 || opcion == 2) {
            break;
        }
        opcion = prompt("Me estás poniendo triste...\n\nIngresá 1 para SI\nIngresá 2 para NO")
        if (opcion == 1 || opcion == 2) {
            break;
        }
        alert("Me cansé, volvé la próxima")
            break;
    } 
}


function puntoSalida(){
    salida = parseInt(prompt("Seleccione su punto de PARTIDA:\n\n1) Argentina\n2) Francia\n3) Australia\n\nIngresá 0 para salir"));
    while(salida !== 1 && salida !== 2 && salida !== 3 && salida !== 0){
        salida = parseInt(prompt("Por favor maestro, elegí una de las opciones disponibles:\n\n1) Argentina\n2) Francia\n3) Australia\n\nIngresá 0 para salir"))
    }
    switch(salida){
        case 1:
            salida = "Argentina"
        break;
        case 2:
            salida = "Francia"
        break;
        case 3:
            salida = "Australia"
        break;
        case 0:
            despedida(nombre);
            opcion = 0;
        break;
    }
}

function puntoDestino(){
    destino = parseInt(prompt("Seleccione su DESTINO:\n\n1) Jerusalén\n2) Estadio de Nacional de Potosí\n3) Lusail Stadium\n\nIngresá 0 para salir"));
    while(destino !== 1 && destino !== 2 && destino !== 3 && destino !== 0){
        destino = parseInt(prompt("Por favor maestro, elegí una de las opciones disponibles:\n\n1) Jerusalén\n2) Estadio de Nacional de Potosí\n3) Lusail Stadium\n\nIngresá 0 para salir"))
    }

    switch(destino){
        case 1:
            destino = "Jerusalén"
        break;
        case 2:
            destino = "Estadio de Nacional de Potosí"
        break;
        case 3:
            destino = "Lusail Stadium"
        break;
        case 0:
            despedida(nombre);
            opcion = 0;
        break;
    }
}

function destinoElegido(){
    medicion = parseInt(prompt("Entonces, elegiste " + salida + " como punto de partida, y " + destino + " como destino.\n¿Cuál es el método de medición que te gustaría utilizar para conocer sus distancias?\n\n1) Messis\n2) Canchas de Boca\n3) Coca de 2L\n\nIngresá 9 si querés cambiar la salida/destino\nIngresá 0 para salir"))
    while(medicion !== 1 && medicion !== 2 && medicion !== 3 && medicion !== 0 && medicion !== 9){
        medicion = parseInt(prompt("Por favor maestro, elegí una de las opciones disponibles:\n\n1) Messis\n2) Canchas de Boca\n3) Coca de 2L\n\nIngresá 9 si querés cambiar la salida/destino\nIngresá 0 para salir"))
    }
    if(medicion == 9){
        puntoSalida()
        puntoDestino()
        medicion = parseInt(prompt("Entonces, elegiste " + salida + " como punto de partida, y " + destino + " como destino.\n¿Cuál es el método de medición que te gustaría utilizar para conocer sus distancias?\n\n1) Messis\n2) Canchas de Boca\n3) Coca de 2L\n\nIngresá 0 para salir"))
        while(medicion !== 1 && medicion !== 2 && medicion !== 3 && medicion !== 0){
            medicion = parseInt(prompt("Amigo, esta vez por favor elegí una de las opciones disponibles, cambiar salidas y destinos ya no es posible, después hacemos otra:\n\n1) Messis\n2) Canchas de Boca\n3) Coca de 2L\n\nIngresá 9 si querés cambiar la salida/destino\nIngresá 0 para salir"))
        }
    }
    switch(medicion){
        case 1:
            medicion = "Messis";
            variableMedicion = 1.7
        break;
        case 2:
            medicion = "Canchas de Boca"
            variableMedicion = 105
        break;
        case 3:
            medicion = "Coca de 2L"
            variableMedicion = 0.188
        break;
        case 0:
            despedida(nombre);
            opcion = 0;
        break;
    }
}

function resultadoDistancia(partida, llegada, metodo){
    if(salida == "Argentina" && destino == "Jerusalén"){
        distancia = 12834820
    } else if(salida == "Argentina" && destino == "Estadio de Nacional de Potosí"){
        distancia = 2101660
    } else if(salida == "Argentina" && destino == "Lusail Stadium"){
        distancia = 13848160
    } else if(salida == "Francia" && destino == "Jerusalén"){
        distancia = 12208420
    } else if(salida == "Francia" && destino == "Estadio de Nacional de Potosí"){
        distancia = 14601250
    } else if(salida == "Francia" && destino == "Lusail Stadium"){
        distancia = 10473350
    } else if(salida == "Australia" && destino == "Jerusalén"){
        distancia = 3244780
    } else if(salida == "Australia" && destino == "Estadio de Nacional de Potosí"){
        distancia = 10039320
    } else if(salida == "Australia" && destino == "Lusail Stadium"){
        distancia = 4907700
    }

    resultado = Math.round(distancia / variableMedicion);

    alert("Entre " + partida + " y " + llegada + " hay " + resultado + " " + metodo + " de distancia.\n\nViste, es mucho más fácil compararlo de esta forma para tomar dimensión de las distancias." )
}

function despedida(nombreUsuario){
    alert("Dale wachin, nos vemos la próxima " + nombreUsuario + ", que andes bien.")
}


if (opcion == 1) { 
    alert("Buenísimo, esto funciona así.\n\nPrimero: Elegís el punto de partida.\nSegundo: Francia / Elegís el destino.\nTercero: Elegís el sistema de medición.\n\nSiempre podes ingresar 0 para cancelar.")
    puntoSalida()
    if(opcion !== 0){ 
        puntoDestino()
    }
    if(opcion !== 0){
        destinoElegido()
    }
    if (opcion !== 0){  
        resultadoDistancia(salida, destino, medicion)
    }
    
    while(opcion !== 0){ 
        alert("¿Y? ¿Que tal? Vamos de nuevo " + nombre + ".")
        puntoSalida()
        if(opcion !== 0){ 
            puntoDestino()
        }
        if(opcion !== 0){
            destinoElegido()
        }
        if (opcion !== 0){  
            resultadoDistancia(salida, destino, medicion)
        }
    }

}else if (opcion == 2) {
    alert("Oka, ni nos vimos")
}







