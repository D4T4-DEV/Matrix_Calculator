import React, { ChangeEvent } from "react";
import Input from "./input_component";
import { MatrixProps } from "../Interfaces/Props/MatrizProp";

                                      //  Matriz representada, Cambios de valor
const MatrixComponent: React.FC<MatrixProps> = ({ matrix, onMatrixChange }) => {

  // Variables que delimitan el numero posible
  const limitNegative: number = -100;
  const limitPositive: number = 100;

  // Verificacion de los indices existentes de una matriz y actualicacion de los datos dentro de esta
  // Si no hay esto no se cambia los valores 
  const handleChange = (row: number, col: number, value: string) => {
    const updatedMatrix = matrix.map((r, rowIndex) =>
      rowIndex === row ? r.map((c, colIndex) => (colIndex === col ? value : c)) : r
    );
    onMatrixChange(updatedMatrix);
  };

  // Funcion para limitar el numero que debe contener por teclado el input
  const limitValue = (e: ChangeEvent<HTMLInputElement>) => {
    // Si no tiene nada lo devuelve como nada (esto evita que se muestre el cero)
    if (e.target.value === '') {
      return '';
    }

    // Utilidad para limitar el valor posible del input
    const limitNum = (Math.max(limitNegative, Math.min(limitPositive, Number(e.target.value))));
    return limitNum.toString(); // Devolvemos en formato string
  }

  return (
    <div className="mat-Component">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, colIndex) => (
            <Input
              className="inpt-matrix"
              key={colIndex}
              type="number"
              placeholder={`${rowIndex + 1}, ${colIndex + 1}`}
              value={value}
              max={limitPositive}
              min={limitNegative}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(rowIndex, colIndex, limitValue(e))}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixComponent;