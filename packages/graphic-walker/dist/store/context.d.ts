/// <reference types="react" />
export declare const VizAppContext: (props: {
    children?: import("react").ReactNode | Iterable<import("react").ReactNode>;
} & {
    ComputationContext: import("../interfaces").IComputationFunction;
    themeContext: "dark" | "light";
    vegaThemeContext: {
        themeKey?: import("../interfaces").IThemeKey | undefined;
        themeConfig?: import("../vis/theme").GWGlobalConfig | undefined;
    };
}) => import("react").ReactNode | Iterable<import("react").ReactNode>;
