import React, { ChangeEvent } from "react";
import Input from "./input_component";
import { MatrixProps } from "../Interfaces/Props/MatrizProp";


const MatrixComponent: React.FC<MatrixProps> = ({ matrix, onMatrixChange }) => {

  // Verificacion de los indices existentes de una matriz y actualicacion de los datos dentro de esta
  const handleChange = (row: number, col: number, value: string) => {
    const updatedMatrix = matrix.map((r, rowIndex) =>
      rowIndex === row ? r.map((c, colIndex) => (colIndex === col ? value : c)) : r
    );
    onMatrixChange(updatedMatrix);
  };

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
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(rowIndex, colIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixComponent;