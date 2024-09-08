export interface MatrixProps {
    rows: number;
    cols: number;
    matrix: string[][];
    onMatrixChange: (matrix: string[][]) => void;
  }