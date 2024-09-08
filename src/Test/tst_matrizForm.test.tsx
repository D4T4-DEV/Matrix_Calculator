import { render, screen, fireEvent } from '@testing-library/react';
import { MatrizForm } from '../Components/form-matrix';


describe('Componente de MatrizForm', () => {
  test('Renderizado de los inputs para matrices y botones', () => {

    render(<MatrizForm />);

    // Verifica que los inputs de filas y columnas de la matriz A y B se encuentren en el DOM
    const rowsInputs = screen.getAllByPlaceholderText('Rows');
    expect(rowsInputs.length).toBe(2); // Deben ser dos ya que tienen el mismo ambito

    const colsInputs = screen.getAllByPlaceholderText('Cols');
    expect(colsInputs.length).toBe(2);

    // Verifica que los botones de operaciones se encuentren en el DOM
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '×' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'A^(-1)' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'B^(-1)' })).toBeInTheDocument();
  });

  test('Actualizaciones de las dimensiones de las matrices', () => {
    render(<MatrizForm />);

    // Para A
    const rowsInputA = screen.getAllByPlaceholderText('Rows')[0];
    const colsInputA = screen.getAllByPlaceholderText('Cols')[0];

    // Cambia las dimensiones de la matriz A
    fireEvent.change(rowsInputA, { target: { value: '3' } });
    fireEvent.change(colsInputA, { target: { value: '2' } });

    // Verifica que los valores se hayan actualizado
    expect(rowsInputA).toHaveValue(3);
    expect(colsInputA).toHaveValue(2);

    // Para B
    const rowsInputB = screen.getAllByPlaceholderText('Rows')[1];
    const colsInputB = screen.getAllByPlaceholderText('Cols')[1];

    // Cambia las dimensiones de la matriz B
    fireEvent.change(rowsInputB, { target: { value: '3' } });
    fireEvent.change(colsInputB, { target: { value: '2' } });

    // Verifica que los valores se hayan actualizado
    expect(rowsInputB).toHaveValue(3);
    expect(colsInputB).toHaveValue(2);
  });

  test('Realizar las operaciones correctamente de las matrices', () => {
    render(<MatrizForm />);

    // Verifica que este estado no exista al inciar la aplicacion 
    expect(screen.queryByText('[0]')).not.toBeInTheDocument();

    // Sumar
    const sumButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(sumButton);

    const resultSuma = screen.getByText('[0]'); // -> Esto debera asomar
    expect(resultSuma).toBeInTheDocument();

    const resButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(resButton);

    const resultResta = screen.getByText('[0]'); // -> Esto debera asomar
    expect(resultResta).toBeInTheDocument();

    const mulButton = screen.getByRole('button', { name: '×' });
    fireEvent.click(mulButton);

    const resultMult = screen.getByText('[0]'); // -> Esto debera asomar
    expect(resultMult).toBeInTheDocument();

    // Verifica que no haya errores
    const error = screen.queryByTestId('error-operation');
    expect(error).not.toBeInTheDocument();
  });

  test('Realizar las operaciones inversas con el valor default y que este de error', () => {
    render(<MatrizForm />);

// Verifica que se haya realizado la operacion de la inversa y que este presente un parametro como error en el DOM
    const inverseA = screen.getByRole('button', { name: 'A^(-1)' });
    fireEvent.click(inverseA);

    const errorInversaA = screen.queryByTestId('error-operation');
    expect(errorInversaA).toBeInTheDocument();

    // Verifica que se haya realizado la operacion de la inversa y que este presente un parametro como error en el DOM
    const inverseB = screen.getByRole('button', { name: 'B^(-1)' });
    fireEvent.click(inverseB);

    const errorInversaB = screen.queryByTestId('error-operation');
    expect(errorInversaB).toBeInTheDocument();


    // Verifica que haya errores, ya que esta operacion deberia de dar error y estar ahi
    const errorInversaG = screen.queryByTestId('error-operation');
    expect(errorInversaG).toBeInTheDocument();
  });
});
