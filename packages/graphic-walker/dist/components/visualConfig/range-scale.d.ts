import React from 'react';
export declare const MultiRangeSlider: ({ min, max, minVal, maxVal, setMinVal, setMaxVal, factor }: {
    min: any;
    max: any;
    minVal: any;
    maxVal: any;
    setMinVal: any;
    setMaxVal: any;
    factor: any;
}) => React.JSX.Element;
export declare function RangeScale(props: {
    text: string;
    maxRange: number;
    minRange: number;
    enableMaxDomain: boolean;
    enableMinDomain: boolean;
    enableRange: boolean;
    rangeMax: number;
    rangeMin: number;
    domainMax: number;
    domainMin: number;
    setEnableMinDomain: (v: boolean) => void;
    setEnableMaxDomain: (v: boolean) => void;
    setEnableRange: (v: boolean) => void;
    setDomainMin: (v: number) => void;
    setDomainMax: (v: number) => void;
    setRangeMin: (v: number) => void;
    setRangeMax: (v: number) => void;
}): React.JSX.Element;
