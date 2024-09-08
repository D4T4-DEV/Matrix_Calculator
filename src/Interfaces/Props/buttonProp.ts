import { z } from 'zod';

// En realidad crea un esquema de datos con cualidades a cumplir
export const ButtonPropsSchema = z.object({
  title: z.string().optional(),  // Campo opcional y de tipo string.
  value: z.string(),             // Campo "value" es requerido y de tipo string.
  onClick: z.function().args().returns(z.void()), // Campo "onClick" es una función, no recibe nada y no retorna nada uwu.
});


// Basicamente estamos realizando esto, pero dandole una verificacion real en el hambito de construccion y determinacion 
// de que se debe de cumplir si o si
// export interface ButtonProps{
//     title?: string;
//     value: string;
//     onClick: () => void;
// };