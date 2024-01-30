//Suma
const sum = (a,b) => {
    return a + b};


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {

    let valueInYen = valueInDollar * 156.5;

    return fromDollarToYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function (valueInYen) {

    let valueInPound = valueInYen * 0.87;

    return fromYenToPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

