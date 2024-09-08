import { Matrix } from "../Interfaces/matrix";

// Explicacion con video
// https://www.youtube.com/watch?v=sPFjVxnF71c
export function sumarMatrices(A: Matrix, B: Matrix): Matrix {

    // Variables que vienen de la interfaz
    const { row: filasA, col: columnasA, matriz: matrizA } = A;
    const { row: filasB, col: columnasB, matriz: matrizB } = B;


    // Verificacion que la matriz A y B tengan las mismas dimensiones
    if (filasA !== filasB || columnasA !== columnasB) {
        throw new Error("Las matrices deben tener las mismas dimensiones");
    }

        // Inicializacion de un array con valores en cada elemento de "0"
    const resultado: number[][] = Array.from({ length: filasA }, () => Array(columnasA).fill(0));

    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasA; j++) {
            // ASIGNACION    =  OPERADOR DE CADA ESPACIO COMO SUMA
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }

    // Devuelve las cualidades 
    return {
        row: filasA,
        col: columnasA,
        matriz: resultado
    };
}

// Explicacion con video
// https://www.youtube.com/watch?v=sPFjVxnF71c
export function restarMatrices(A: Matrix, B: Matrix): Matrix {
    // Variables que vienen de la interfaz
    const { row: filasA, col: columnasA, matriz: matrizA } = A;
    const { row: filasB, col: columnasB, matriz: matrizB } = B;


    // Verificacion que la matriz A y B tengan las mismas dimensiones
    if (filasA !== filasB || columnasA !== columnasB) {
        throw new Error("Las matrices deben tener las mismas dimensiones");
    }

    // Inicializacion de un array con valores en cada elemento de "0"
    const resultado: number[][] = Array.from({ length: filasA }, () => Array(columnasA).fill(0));

    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasA; j++) {
            // ASIGNACION    =  OPERADOR DE CADA ESPACIO COMO RESTA
            resultado[i][j] = matrizA[i][j] - matrizB[i][j];
        }
    }

    // Devuelve las cualidades 
    return {
        row: filasA,
        col: columnasA,
        matriz: resultado
    };
}
