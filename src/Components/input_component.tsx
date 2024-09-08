import React from "react";
import { InputProps } from "../Interfaces/Props/inputProp";


const Input: React.FC<InputProps> = ({ title, className, type, placeholder, value, min, max, disabled, onChange }) => {
    return (
        <input
            title={title}
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            disabled={disabled}
        />
    );
}

export default Input;