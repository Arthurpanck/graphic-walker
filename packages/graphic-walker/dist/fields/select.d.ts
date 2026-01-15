import React from 'react';
export interface Option {
    id: string;
    name: string;
}
interface SelectProps {
    options: Option[];
    onChange: (value: string) => void;
    value: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
