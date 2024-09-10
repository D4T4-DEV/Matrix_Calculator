import { decimalToFrac } from "../Calcs/decimalToFrac";
import { ResultProps } from "../Interfaces/Props/resultadoProp";
import ChildrenComponent from "./childrenComponent";

const Result: React.FC<ResultProps> = ({ operationResult, error, determinant }) => {

  // Verifica si la matriz tiene al menos una fila y entre una y tres columnas
  const matrizDeSoloUnaColumna = operationResult !== undefined &&
    operationResult.length >= 1 &&
    (operationResult[0]?.length ?? 0) >= 1 &&
    (operationResult[0]?.length ?? 0) < 4;

  return (
    <div className="area-result">
      <ChildrenComponent>
        <h1 className="title">Resultado</h1>
      </ChildrenComponent>
      {error ? (
        <p className="error-msg" data-testid="error-operation">{error}</p>
      ) : (
        operationResult && (
          <div className={`result-operation-matrix ${matrizDeSoloUnaColumna ? 'result-operation-matrix-only-col' : ''}`}>
            {operationResult.map((row, rowIndex) => (
              <div key={rowIndex} className="matrix-row">
                {row.map((value, colIndex) => (
                  <span key={colIndex} className="matrix-value">
                    [{Number.isInteger(value) ? value : decimalToFrac(value)}]
                  </span>
                ))}
              </div>
            ))}
            <span>
              {determinant}
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default Result;
