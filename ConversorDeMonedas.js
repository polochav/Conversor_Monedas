
/*CREANDO LA FUNCIÓN QUE HARÁ LAS CONVERSIONES DEPENDIENDO EL VALOR DE LOS SELECTORES*/
function convertirMoneda() {

    /*SELECCIOA Y ASIGNA EL VALOR DE LA CANTIDAD DE MONEDA A CONVERTIR EN 'ValorDeMoneda' */
    var ValorDeMoneda = parseFloat(document.getElementById('input').value);

    /*SELECCIONA Y ASIGNA EL VALOR SELECCIONADO DE LOS INPUTS */
    var de = document.getElementById('seleccionar1').value;
    var a = document.getElementById('seleccionar2').value;

    /*VALORES DE MONEDAS EN COMPARACIÓN AL PESO AL DÍA 16 DE JULIO DE 2024 */
    var dolar = 17.66
    var euro = 19.26
    var yen = 0.11
    var rupia = 0.21

    /*INICIALIZAMOS Y CREAMOS LA VARIABLES DONDE VAMOS A ALMACENAR EL RESULTADO DE LA CONVERSIÓN */
    res = 0

    /*EMPEZAMOS CON LAS CONVERSIONES SEGÚN EL VALOR SELECCIONADO EN LOS INPUT */

    /*DE PESO A DOLAR */
    if (de == "Peso" && a == "Dolar") {
        res=ValorDeMoneda/dolar
    }
    /*DE PESO A EURO */
    else if (de == "Peso" && a == "Euro") {
        res=ValorDeMoneda/euro
    }
    /*DE PESO A YENES */
    else if (de == "Peso" && a == "Yenes") {
        res=ValorDeMoneda/yen
    }
    /*DE PESO A RUPIAS */
    else if (de == "Peso" && a == "Rupias") {
        res=ValorDeMoneda/rupia
    }
    /*DE DOLAR A PESO*/
    else if (de == "Dolar" && a == "Peso") {
        res=ValorDeMoneda*dolar
    }
    /*DE DOLAR A EURO */
    else if (de == "Dolar" && a== "Euro") {
        res=ValorDeMoneda*(dolar/euro)
    }
    /*DE DOLAR A YEN */
    else if (de == "Dolar" && a == "Yenes") {
        res=ValorDeMoneda*(dolar/yen)
    }
    /*DE DOLAR A RUPIA */
    else if (de == "Dolar" && a == "Rupias") {
        res=ValorDeMoneda*(dolar/rupia)
    }
    /*DE EURO A PESO */
    else if (de == "Euro" && a == "Peso") {
        res=ValorDeMoneda*euro
    }
    /*DE EURO A DOLAR */
    else if (de == "Euro" && a == "Dolar") {
        res=ValorDeMoneda*(euro/dolar)
    }
    /*DE EURO A YEN */
    else if (de == "Euro" && a== "Yenes") {
        res=ValorDeMoneda*(euro/yen)
    }
    /*DE EURO A RUPIA */
    else if (de == "Euro" && a == "Rupias") {
        res=ValorDeMoneda*(euro/rupia)
    }
    /*DE YEN A PESO */
    else if (de == "Yenes" && a == "Peso") {
        res=ValorDeMoneda*yen
    }
    /*DE YEN A DOLAR */
    else if (de == "Yenes" && a == "Dolar") {
        res = ValorDeMoneda * (yen / dolar)
    }
    /*DE YEN A EURO */
    else if (de == "Yenes" && a == "Euro") {
        res=ValorDeMoneda*(yen/euro)
    }
    /*DE YEN A RUPIA */
    else if (de == "Yenes" && a == "Rupias") {
        res=ValorDeMoneda*(yen/rupia)
    }
    /*DE RUPIA A PESO */
    else if (de == "Rupias" && a == "Peso") {
        res=ValorDeMoneda*rupia
    }
    /*DE RUPIA A DOLAR */
    else if (de == "Rupias" && a == "Dolar") {
        res=ValorDeMoneda*(rupia/dolar)
    }
    /*DE RUPIA A EURO*/
    else if (de == "Rupias" && a == "Euro") {
        res=ValorDeMoneda*(rupia/euro)
    }
    /*DE RUPIA A YEN */
    else if (de == "Rupias" && a == "Yenes") {
        res=ValorDeMoneda*(rupia/yen)
    }
        
    /*EN CASO DE QUE LOS INPUTS SELECCIONADOS SEAN LA MISMA MONEDA*/
    else {
        res=ValorDeMoneda
    }

    /*MOSTRANDO EL RESULTADO EN PANTALLA */
    a = document.getElementById('resultado')
    a.innerText = "Resultado: $" + res.toFixed(2);
}

/*SELECCIONANDO EL BOTÓN PARA ENVIAR */
var boton = document.getElementById('calcular')

/*CUANDO SE LE DE CLICK AL BOTÓN SE LLAMA A LA FUNCIÓN PARA CONVERTIR LA MONEDA */
boton.addEventListener("click",convertirMoneda)








