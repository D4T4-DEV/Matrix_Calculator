import { describe, it, expect } from 'vitest';
import { sumarMatrices, restarMatrices, multiplicarMatrices, inversaMatriz, dividirMatrices } from '../Calcs/operations';
import { Matrix } from '../Interfaces/matrix';

// Datos de ejemplo para matrices 1x1
const A1x1: Matrix = { row: 1, col: 1, matriz: [[3]] };
const B1x1: Matrix = { row: 1, col: 1, matriz: [[4]] };

// Datos de ejemplo para matrices 2x2
const A2x2: Matrix = { row: 2, col: 2, matriz: [[1, 2], [3, 4]] };
const B2x2: Matrix = { row: 2, col: 2, matriz: [[5, 6], [7, 8]] };

// Datos de ejemplo para matrices 3x3
const A3x3: Matrix = { row: 3, col: 3, matriz: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] };
const B3x3: Matrix = { row: 3, col: 3, matriz: [[9, 8, 7], [6, 5, 4], [3, 2, 1]] };

// Matriz identidad 2x2 para pruebas de inversión
// const I2x2: Matrix = { row: 2, col: 2, matriz: [[1, 0], [0, 1]] };

describe('Funciones de Matrices', () => {
    // Pruebas para matrices 1x1
    it('Suma de matrices 1x1', () => {
        const resultado = sumarMatrices(A1x1, B1x1);
        expect(resultado).toEqual({
            row: 1,
            col: 1,
            matriz: [[7]]
        });
    });

    it('Resta de matrices 1x1', () => {
        const resultado = restarMatrices(A1x1, B1x1);
        expect(resultado).toEqual({
            row: 1,
            col: 1,
            matriz: [[-1]]
        });
    });

    it('Multiplicación de matrices 1x1', () => {
        const resultado = multiplicarMatrices(A1x1, B1x1);
        expect(resultado).toEqual({
            row: 1,
            col: 1,
            matriz: [[12]]
        });
    });

    it('Inversa de matriz 1x1', () => {
        const resultado = inversaMatriz(A1x1);
        expect(resultado).toEqual({
            row: 1,
            col: 1,
            matriz: [[1 / 3]]
        });
    });

    // Pruebas para matrices 2x2
    it('Suma de matrices 2x2', () => {
        const resultado = sumarMatrices(A2x2, B2x2);
        expect(resultado).toEqual({
            row: 2,
            col: 2,
            matriz: [[6, 8], [10, 12]]
        });
    });

    it('Resta de matrices 2x2', () => {
        const resultado = restarMatrices(A2x2, B2x2);
        expect(resultado).toEqual({
            row: 2,
            col: 2,
            matriz: [[-4, -4], [-4, -4]]
        });
    });

    it('Multiplicación de matrices 2x2', () => {
        const resultado = multiplicarMatrices(A2x2, B2x2);
        expect(resultado).toEqual({
            row: 2,
            col: 2,
            matriz: [[19, 22], [43, 50]]
        });
    });

    it('Inversa de matriz 2x2', () => {
        const resultado = inversaMatriz(A2x2);
        expect(resultado).toEqual({
            row: 2,
            col: 2,
            matriz: [[-2, 1], [1.5, -0.5]]
        });
    });

    it('División de matrices 2x2', () => {
        const inversaB2x2 = inversaMatriz(B2x2);
        const resultadoEsperado = multiplicarMatrices(A2x2, inversaB2x2);
        const resultado = dividirMatrices(A2x2, B2x2);
        expect(resultado).toEqual(resultadoEsperado);
    });

    // Pruebas para matrices 3x3
    it('Suma de matrices 3x3', () => {
        const resultado = sumarMatrices(A3x3, B3x3);
        expect(resultado).toEqual({
            row: 3,
            col: 3,
            matriz: [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
        });
    });

    it('Resta de matrices 3x3', () => {
        const resultado = restarMatrices(A3x3, B3x3);
        expect(resultado).toEqual({
            row: 3,
            col: 3,
            matriz: [[-8, -6, -4], [-2, 0, 2], [4, 6, 8]]
        });
    });

    it('Multiplicación de matrices 3x3', () => {
        const resultado = multiplicarMatrices(A3x3, B3x3);
        expect(resultado).toEqual({
            row: 3,
            col: 3,
            matriz: [[30, 24, 18], [84, 69, 54], [138, 114, 90]]
        });
    });

    it('Inversa de matriz 3x3', () => {
        // La matriz A3x3 no es invertible porque su determinante es cero
        expect(() => inversaMatriz(A3x3)).toThrowError('La matriz no es invertible porque su determinante es cero.');
    });

    it('División de matrices 3x3', () => {
        // Asegúrate de que B3x3 sea invertible antes de probar la división
        const inversaB3x3 = inversaMatriz(B3x3);
        const resultadoEsperado = multiplicarMatrices(A3x3, inversaB3x3);
        const resultado = dividirMatrices(A3x3, B3x3);
        expect(resultado).toEqual(resultadoEsperado);
    });
});
