function ejercicio1() {
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1"));
    let mensaje = "";
    if (nota < 75) {
        mensaje = "Usted Necesita Mejorar";
    } else if (nota < 80) {
        mensaje = "Bueno";
    } else if (nota < 91) {
        mensaje = "Muy Bueno";
    } else if (nota <= 100) {
        mensaje = "Usted está en Excelencia Académica";
    } else {
        mensaje = "Ingrese un valor válido";
    }
    alert(mensaje);
}

function ejercicio2() {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    let area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
}

function ejercicio3() {
    const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    const nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));
    const promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);
    alert("El promedio de las 4 notas es de: " + promedio);
}

function ejercicio4() {
    let precio = parseFloat(prompt("Ingrese el precio del ticket"));
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento"));
    let mensaje = "";

    if (edad <= 12) {
        let cantidad = precio * 0.40;
        let descuento = precio - cantidad;
        mensaje = "Descuento del 40%. Debe pagar " + descuento + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es un estudiante? (si/no)").toLowerCase();
        if (estudiante === "si") {
            let des = precio * 0.30;
            mensaje = "Descuento del 30%. Debe pagar " + (precio - des) + "$";
        } else {
            mensaje = "No tiene descuento. Debe pagar " + precio + "$";
        }
    } else if (edad >= 60) {
        let descuento = precio * 0.60;
        mensaje = "Descuento del 60%. Debe pagar " + (precio - descuento) + "$";
    } else {
        mensaje = "No tiene descuento. Debe pagar " + precio + "$";
    }

    alert(mensaje);
}

function ejercicio5() {
    let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
    let area = lado * lado;
    alert("El área del cuadrado es: " + area);
}

function ejercicio6() {
    let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
    let perimetro = 2 * (base + altura);
    alert("El perímetro del rectángulo es: " + perimetro);
}

function ejercicio7() {
    let edad = parseFloat(prompt("Ingrese su edad:"));
    let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    alert(mensaje);
}

function ejercicio8() {
    let asistencias = parseFloat(prompt("Ingrese el número de asistencias:"));
    let totalClases = parseFloat(prompt("Ingrese el número total de clases:"));
    let porcentaje = (asistencias / totalClases) * 100;
    let mensaje = porcentaje >= 75 ? "Has asistido lo suficiente" : "No has asistido lo suficiente";
    alert(mensaje);
}

function ejercicio9() {
    let base1 = parseFloat(prompt("Ingrese la base mayor del trapecio:"));
    let base2 = parseFloat(prompt("Ingrese la base menor del trapecio:"));
    let altura = parseFloat(prompt("Ingrese la altura del trapecio:"));
    let area = ((base1 + base2) * altura) / 2;
    alert("El área del trapecio es: " + area);
}

function ejercicio10() {
    let dolares = parseFloat(prompt("Ingrese la cantidad en dólares:"));
    let tasaCambio = parseFloat(prompt("Ingrese la tasa de cambio a lempiras:"));
    let lempiras = dolares * tasaCambio;
    alert("La cantidad en lempiras es: " + lempiras);
}

function ejercicio11() {
    let lempiras = parseFloat(prompt("Ingrese la cantidad en lempiras:"));
    let tasaCambio = parseFloat(prompt("Ingrese la tasa de cambio a dólares:"));
    let dolares = lempiras / tasaCambio;
    alert("La cantidad en dólares es: " + dolares);
}

function ejercicio12() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert("La temperatura en grados Fahrenheit es: " + fahrenheit);
}

function ejercicio13() {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let area = Math.PI * Math.pow(radio, 2);
    alert("El área del círculo es: " + area);
}

function ejercicio14() {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let perimetro = 2 * Math.PI * radio;
    alert("El perímetro del círculo es: " + perimetro);
}

function ejercicio15() {
    let metros = parseFloat(prompt("Ingrese la distancia en metros:"));
    let centimetros = metros * 100;
    alert("La distancia en centímetros es: " + centimetros);
}