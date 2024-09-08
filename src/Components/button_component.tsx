import React from "react";
import { ButtonPropsSchema } from "../Interfaces/Props/buttonProp";

const Button: React.FC<Zod.infer<typeof ButtonPropsSchema>> = (props) => {
    return (
      <button className="operator" onClick={props.onClick} title={props.title}>
        {props.value}
      </button>
    );
  };
  

export default Button;