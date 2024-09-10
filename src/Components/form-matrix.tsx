import { ChangeEvent, useEffect, useState } from "react";
import { Matrix } from "../Interfaces/matrix";
import { dividirMatrices, inversaMatriz, multiplicarMatrices, obtenerDeterminante, restarMatrices, sumarMatrices } from "../Calcs/operations";
import MatrixComponent from "../Components/personalizateMatrix";
import Input from "./input_component";
import Button from "./button_component";
import Result from "./result";


export const MatrizForm: React.FC = () => {

  const maxValueMatrix: number = 3;
  const minValueMatrix: number = 1;

  const [rowsA, setRowsA] = useState<number>(1);
  const [colsA, setColsA] = useState<number>(1);
  const [rowsB, setRowsB] = useState<number>(1);
  const [colsB, setColsB] = useState<number>(1);

  const [matrix1, setMatrixA] = useState<string[][]>(Array(1).fill("").map(() => Array(1).fill("")));
  const [matrix2, setMatrixB] = useState<string[][]>(Array(1).fill("").map(() => Array(1).fill("")));

  const [operationResult, setOperationResult] = useState<number[][] | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [determinant, setDeterminant] = useState<string | undefined>(undefined);


  // Cambios de handleChangeDimension a los hooks para entrar en los requerimiento del profesor
  useEffect(() => {
    setMatrixA(Array(rowsA).fill("").map(() => Array(colsA).fill("")));
  }, [rowsA, colsA]);

  useEffect(() => {
    setMatrixB(Array(rowsB).fill("").map(() => Array(colsB).fill("")));
  }, [rowsB, colsB]);


  // Cambia las dimensiones para mostrar la matriz
  const handleChangeDimension = (e: ChangeEvent<HTMLInputElement>, type: 'cols' | 'rows', mat: 'A' | 'B') => {

    // Limita el numero que se puede asignar a la seleccion de matrices
    const value = Math.max(minValueMatrix, Math.min(parseInt(e.target.value, 10), maxValueMatrix));
    // parseInt(e.target.value, 10) -> Convierte el valor en base 10

    if (type === 'rows') {
      if (mat === 'A') {
        setRowsA(value);
      } else if (mat === 'B') {
        setRowsB(value);
      }
    } else if (type === 'cols') {
      if (mat === 'A') {
        setColsA(value);
      } else if (mat === 'B') {
        setColsB(value);
      }
    }
  };

  // Obtiene los valores asignados a la matriz (de cada fila y renglon)
  const getMatrixObject = (matrix: string[][]): Matrix => ({
    row: matrix.length,
    col: matrix[0].length,
    matriz: matrix.map((row) => row.map((value) => parseFloat(value) || 0)),
  });

  // Cambio en los inputs de la matriz
  const handleMatrixChange = (updatedMatrix: string[][], type: string) => {
    switch (type) {
      case "A":
        setMatrixA(updatedMatrix);
        break;

      case "B":
        setMatrixB(updatedMatrix);
        break;
    }
  };

  // Define el evento para una operacion por un boton
  const handleOperation = (type: string) => {
    try {
      const matA = getMatrixObject(matrix1);
      const matB = getMatrixObject(matrix2);
      let result;
      let deter;

      switch (type) {
        case "+":
          {
            result = sumarMatrices(matA, matB);
            break;
          }

        case "-":
          {
            result = restarMatrices(matA, matB);
            break;
          }

        case "*":
          {
            result = multiplicarMatrices(matA, matB);
            break;
          }

        case 'A':
          {
            result = inversaMatriz(matA);
            deter = `Determinante A: ${obtenerDeterminante(matA)}`;
            
            break;
          }

        case 'B':
          {
            result = inversaMatriz(matB);
            deter = `Determinante B: ${obtenerDeterminante(matB)}`
            break;
          }

        case 'Num-B':
          {
            // Representacion: A / B
            result = dividirMatrices(matA, matB);
            deter = `Determinante B: ${obtenerDeterminante(matB)}`;
            break;
          }

        case 'Num-A':
          {
            // Representacion: B / A
            result = dividirMatrices(matB, matA);
            deter = `Determinante A: ${obtenerDeterminante(matA)}`;
            break;
          }
      }

      if (result?.matriz) {
        setOperationResult(result.matriz);
      }

      // Aspecto para mostrar el determinante (si existe algo se lo asigna si no es undefined)
      setDeterminant(deter);

      setError(null);
    } catch (e: unknown) {

      //  e: unknown -> Error desconocido
      // e instanceof  Error -> Verificacion que sea de la clase "Error" (clase que se utiliza en los errores y medios trycatch)
      if (e instanceof Error) {
        setError(e.message);

      } else {
        setError("Un error no identificado ha ocurrido");
      }
    }
  };

  return (
    <div className="container-app">
      {/* Lugar de selectores de tamaño*/}
      <div className="fil-col-input">
        <Input
          title="Filas"
          className="inp-rows"
          type="number"
          placeholder="Rows"
          value={rowsA.toString()}
          onChange={(e) => handleChangeDimension(e, 'rows', 'A')}
          min={minValueMatrix}
          max={maxValueMatrix}
        />
        <p className="tachita">×</p>
        <Input
          title="Columnas"
          className="inp-cols"
          type="number"
          placeholder="Cols"
          value={colsA.toString()}
          onChange={(e) => handleChangeDimension(e, 'cols', 'A')/* Medio para cambiarle la dimension y saber el numero que debe tener max y min*/}
          min={minValueMatrix}
          max={maxValueMatrix}
        />
      </div>


      <div className="matrix-A">
        <h1 className="title">Matriz A</h1>
        <MatrixComponent
          rows={rowsA}
          cols={colsA}
          matrix={matrix1}
          onMatrixChange={(updatedMatrix) => handleMatrixChange(updatedMatrix, 'A') /* Medio para actualizar los valores existentes*/}
        />
      </div>

      <div className="fil-col-input">
        <Input
          title="Filas"
          className="inp-rows"
          type="number"
          placeholder="Rows"
          value={rowsB.toString()}
          onChange={(e) => handleChangeDimension(e, 'rows', 'B')}
          min={minValueMatrix}
          max={maxValueMatrix}
        />
        <p className="tachita">×</p>
        <Input
          title="Columnas"
          type="number"
          className="inp-cols"
          placeholder="Cols"
          value={colsB.toString()}
          onChange={(e) => handleChangeDimension(e, 'cols', 'B')}
          min={minValueMatrix}
          max={maxValueMatrix}
        />
      </div>

      <div className="matrix-B">
        <h1 className="title-2">Matriz B</h1>
        <MatrixComponent
          rows={rowsB}
          cols={colsB}
          matrix={matrix2}
          onMatrixChange={(updatedMatrix) => handleMatrixChange(updatedMatrix, 'B')}
        />
      </div>

      <div className="btns">
        <Button title="Sumar" value="+" onClick={() => handleOperation('+')} />
        <Button title="Restar" value="-" onClick={() => handleOperation('-')} />
        <Button title="Multiplicar" value="×" onClick={() => handleOperation('*')} />
        
        <div>
        <Button title="Inversa de la matriz A" value="A^(-1)" onClick={() => handleOperation('A')} />
        <Button title="Inversa de la matriz B" value="B^(-1)" onClick={() => handleOperation('B')} />
        </div>

        <div>
        <Button title="Division de A/B = A × B^(-1)" value="A/B" onClick={() => handleOperation('Num-B')} />
        <Button title="Division de B/A = B × A^(-1)" value="B/A" onClick={() => handleOperation('Num-A')} />
        </div>
      </div>

      <Result error={error ?? undefined} operationResult={operationResult ?? []} determinant={determinant ?? undefined} />
    </div>
  );
};