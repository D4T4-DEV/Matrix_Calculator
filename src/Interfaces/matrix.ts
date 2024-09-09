
// Interfaz generica que recibe un atributo de dimension
export interface Matrix {
    row: number;
    col: number;
    matriz: number[][];
}


// CORRECCION: 
// LO QUE MUESTRO ACONTINUACION (ABAJO DE ESTA EXPLICACION👇) ES ERRONEO, DEBIDO A QUE EN UNA MATRIZ 
// SE COMPONE DE FILAS Y COLUMNAS, POR LO QUE UN ARRAY BIDIMENSIONAL CUENTA CON LA 
// CAPACIDAD DE PODER OPERAR EN MATRICES DE DIFERENTES DIMENSIONES, CONFUNSION MIA, AL ASIGNARLE 
// LA COMPOSICION DE UN EJE.

// LAS MATRICES SE COMPONEN EN FILAS Y COLUMNAS, PODRIAMOS DECIR QUE SON (X,Y)
// X-> VALOR DE LAS COLUMNAS 
// Y-> VALOR DE LAS FILAS 

// POR LO QUE PARA REPRESENTAR UNA MATRIZ SOLO HACE FALTA UN ARRAY BIDIMENSIONAL 
    // Lo de arriba equivale a esto (NO HACER CASO, LEER ARRIBA =/): 


// ASPECTO ERRONEO 👇
    // export interface Matrix1D { -> Es un arreglo unidimensional solo tiene filas (n) -> o la letra que prefieras 😃
    //     dimension: number[];
    // };

    // export interface Matrix2D {
    //     dimension: number[][]; -> Medio correcto para operar con matrices (filas, columnas) (x,y)
    // }

    // export interface Matrix3D { -> Medio incorrecto, ya que tiene filas, columnas, profundidad (x,y,z)
    //     matrix: number[][][];
    // }

// EXPLICACION: ANTES CREE UNA INTERFAZ QUE SE LE PODIA PONDER LO QUE RECIBA como la que se ve abajo
// donde por DIMENSION se iba a usar para asignar un array de numeros (o lo que quisieras xd) que correspondia a lo que decia arriba 
// pero ciertamente PARA TRABAJAR CON MATRICES SE UTILIZA UN ARREGLO DE 2x2 (filas y columnas)
/*
    export interface MiERROR<DIMENSION> {
        row: number;
        col: number;
        matriz: DIMENSION;
    }
*/