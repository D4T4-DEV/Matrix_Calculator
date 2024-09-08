
// Interfaz generica que recibe un atributo de dimension
export interface Matrix {
    row: number;
    col: number;
    matriz: number[][];
}

// Lo de arriba equivale a esto: 
// export interface Matrix1D {
//     dimension: number[];
// };

// export interface Matrix2D {
//     dimension: number[][];
// }

// export interface Matrix3D {
//     matrix: number[][][];
// }