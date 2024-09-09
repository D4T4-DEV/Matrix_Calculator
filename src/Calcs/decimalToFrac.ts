

import Fraction from "fraction.js";

// Documentacion -> https://www.npmjs.com/package/fraction.js
export const decimalToFrac = (decimal: number): string => {
    // Utilizamos el metodo de la libreria para convertir num decimales a fracciones
    const numFraccion = new Fraction(decimal);

    // Retornamos el valor en forma de fraccion de tipo "numerador" /  "denominador"
    return numFraccion.toFraction(true);
}

// Aspecto tomado de: https://www.youtube.com/watch?v=5MsdS3_lDJY
// Debido a la necesidad de precision opte por usar una libreria "fraction.js" 
// Consultado: https://es.stackoverflow.com/questions/155091/convertir-decimal-a-fracci%C3%B3n#:~:text=Tienen%20un%20denominador%20de%2010,original%22%20sin%20el%20punto%20decimal.&text=si%20lo%20que%20quieres%20es,hacerlo%20de%20la%20siguiente%20manera.&text=El%20caso%20ser%C3%ADa%20dividir%201,eso%20te%20dar%C3%ADa%20el%20denominador.

// export const decimalToFrac = (decimal: number): string => {
//     let numerador: number = 1;
//     let denominador: number = 1;
//     let aux: number = 1;

//     while (aux === decimal) {
//         aux = numerador / denominador;
//         if (aux < decimal) {
//             numerador++;
//         } else if (aux > decimal) {
//             numerador--;
//             denominador++;
//         }
//     }

//     return `${numerador}/${denominador}`;
// };   