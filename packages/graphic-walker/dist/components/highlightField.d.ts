import React from 'react';
export interface TextFieldProps {
    placeholder?: string;
    onChange?: (v: string) => void;
}
export declare function highlightField(highlighter: (value: string) => string): React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<{
    clear(): void;
    setValue(value: string): void;
}>>;
