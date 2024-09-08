import { ChangeEvent } from "react";

export interface InputProps {
    className?: string;
    type: string;
    placeholder?: string;
    value: string;
    min?: number
    max?: number
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}