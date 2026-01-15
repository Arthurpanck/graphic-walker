import React from 'react';
interface SliderProps {
    min: number;
    max: number;
    value: readonly [number, number];
    onChange: (value: readonly [number, number]) => void;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
