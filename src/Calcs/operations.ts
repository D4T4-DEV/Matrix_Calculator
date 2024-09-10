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

// Explicacion con video
// https://www.youtube.com/watch?v=EgokLSfRE54
export function multiplicarMatrices(A: Matrix, B: Matrix): Matrix {
    // Variables que vienen de la interfaz
    const { row: filasA, col: columnasA, matriz: matrizA } = A;
    const { row: filasB, col: columnasB, matriz: matrizB } = B;

    // Verificación que el número de columnas de A sea igual al número de filas de B
    if (columnasA !== filasB) {
        throw new Error("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.");
    }

    // Inicializa la matriz de resultado
    const resultado: number[][] = Array.from({ length: filasA }, () => Array(columnasB).fill(0));

    // Realiza la multiplicación de matrices
    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasB; j++) {
            for (let k = 0; k < columnasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return {
        row: filasA,
        col: columnasB,
        matriz: resultado
    };
}


// Explicacion de video
// https://www.youtube.com/watch?v=dFmGzr1j6eY
export function inversaMatriz(A: Matrix): Matrix {
    const { row: filas, col: columnas, matriz } = A;

    // Verificación de que la matriz es cuadrada
    if (filas !== columnas) {
        throw new Error("La matriz debe ser cuadrada para calcular su inversa.");
    }

    // Creacion de la matriz de indentidad (de la dimension pasada)
        // consulta: https://www.uv.mx/personal/aherrera/files/2014/08/08a-MATRICES-1.pdf (visitado el 07/09/24)
    const identidad: number[][] = Array.from({ length: filas }, (_, i) =>
        Array.from({ length: columnas }, (_, j) => (i === j ? 1 : 0))
    );
    // el medio "_" significa que no se utilizara ese campo

    // Creacion de la copia de la matriz para operar con ella
    const copiaMatriz: number[][] = matriz.map(row => [...row]);

    // Aplicar el método de Gauss-Jordan para encontrar la inversa 
        // consulta: https://repositorio-uapa.cuaieed.unam.mx/repositorio/moodle/pluginfile.php/2611/mod_resource/content/1/UAPA-Eliminacion%20Gaussiana-Metodo-Gauss-Jordan/index.html#:~:text=M%C3%A9todo%20Gauss%2DJordan,de%20soluci%C3%B3n%20de%20la%20ecuaci%C3%B3n.
        // (visitado el 07/09/24)
    for (let i = 0; i < filas; i++) {
        // Encontrar el pivote
            // consulta: https://www.mathway.com/es/examples/linear-algebra/matrices/finding-the-pivot-positions-and-pivot-columns?id=780#:~:text=Las%20posiciones%20de%20pivote%20son,tienen%20una%20posici%C3%B3n%20de%20pivote.
            // (visitado el 07/09/24) 
        const pivote = copiaMatriz[i][i];
        if (pivote === 0) {
            throw new Error("La matriz no es invertible porque su determinante es cero.");
        }

        // Normalizar la fila del pivote (elemento diferente de cero)
        for (let j = 0; j < columnas; j++) {
            copiaMatriz[i][j] /= pivote;
            identidad[i][j] /= pivote;
        }

        // Hacer ceros las demás filas
        for (let k = 0; k < filas; k++) {
            if (k !== i) {
                const factor = copiaMatriz[k][i];
                for (let j = 0; j < columnas; j++) {
                    copiaMatriz[k][j] -= factor * copiaMatriz[i][j];
                    identidad[k][j] -= factor * identidad[i][j];
                }
            }
        }
    }

    return {
        row: filas,
        col: columnas,
        matriz: identidad
    };
}


// Consulta: https://economipedia.com/definiciones/division-de-matrices.html
// https://www.youtube.com/watch?v=zmugcYjv6xU
export function dividirMatrices(numerador: Matrix, denominador: Matrix): Matrix {
    
    // Inversa de B
    const inversaDenominador = inversaMatriz(denominador); // Data la formula X = A^(-1) * B o B^(-1) * A

    // Multiplicar A por la inversa de B
    return multiplicarMatrices(numerador, inversaDenominador);
}