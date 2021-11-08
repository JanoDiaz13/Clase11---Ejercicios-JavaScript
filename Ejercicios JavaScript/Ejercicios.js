// Ejercicio Nº1
let log = console.log


let Ricardo = "Ricardo es tu tio"
let Roberto = "Roberto es tu hermano"
let Argentina = "El pais al que pertenences"
let Dinamita = "Dinamita es tu gato "


function recordarNombre(ric, rob, arg, din) {
    let dato = prompt("Ingrese el nombre")
    switch (dato) {
        case "Ricardo":
            return Ricardo
            break;
        case "Roberto":
            return Roberto
        case "Argentina":
            return Argentina
            break;
        case "Dinamita":
            return Dinamita
            break;
    }

}

log(recordarNombre(Ricardo, Roberto, Argentina, Dinamita))

// Ejercicio Nº2

let num1 = prompt("Ingrese un numero")
let num2 = prompt("Ingrese otro numero")

function Es100(n1, n2) {
    let suma = n1 + n2

    let datoObtenido = n1 = 100 ? true : false;
    datoObtenido = n2 = 100 ? true : false;
    datoObtenido = suma = 100 ? true : false;

    return datoObtenido
}

log(Es100(num1, num2))

// Ejercicio Nº3  (resolver)

let str = prompt("Ingrese archivo")


function extensionArchivo(file1) {
    let arr = file1.split("")
    let punto = arr.indexOf('.')

    if (punto) {
        sli = arr.slice(punto)
        string = sli.join("")
        return "la extenson es " + string
    } else {
        return "no tiene extension"
    }

}

log(extensionArchivo(str))

// Ejercicio Nº4

let celsius = prompt("Ingrese grados celsius")
let faren = prompt("Ingrese grados fahrenheit")

function convertirGrados(c, f) {
    far = (c * 1.8) + 32
    cel = (f - 32) / 1.8

    return "ºC to ºF " + far + " | ºF to ºC " + cel
}

log(convertirGrados(celsius, faren))

//Ejercicio Nº5

let fecha = new Date()

function fechayhora(fech) {
    dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    num = fech.getDay()
    nombreDia = dia[num]
    horas = fech.getHours()
    minutos = fech.getMinutes()

    return "Hoy es: " + nombreDia + "  Hora actual: " + horas + ":" + minutos
}

log(fechayhora(fecha))