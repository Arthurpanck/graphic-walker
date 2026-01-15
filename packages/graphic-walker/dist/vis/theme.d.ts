import { VegaGlobalConfig } from '../interfaces';
export type GWGlobalConfig<T extends VegaGlobalConfig = VegaGlobalConfig & {
    scale?: {
        continuous: {
            range: string[];
        };
    };
}> = {
    light: T;
    dark: T;
};
export declare const DEFAULT_COLOR = "#5B8FF9";
export declare const VegaTheme: {
    readonly light: {
        readonly background: "transparent";
    };
    readonly dark: {
        background: string;
        header: {
            titleColor: string;
            labelColor: string;
        };
        axis: {
            gridColor: string;
            domainColor: string;
            tickColor: string;
            labelColor: string;
            titleColor: string;
        };
        legend: {
            labelColor: string;
            titleColor: string;
        };
        view: {
            stroke: string;
        };
    };
};
export declare const AntVTheme: GWGlobalConfig;
export declare const builtInThemes: {
    [themeKey: string]: {
        light: VegaGlobalConfig;
        dark: VegaGlobalConfig;
    };
};
export declare const getPrimaryColor: (defaultColor: string) => {
    light: {
        area: {
            fill: string;
        };
        bar: {
            fill: string;
        };
        circle: {
            fill: string;
        };
        line: {
            stroke: string;
        };
        point: {
            stroke: string;
        };
        rect: {
            fill: string;
        };
        tick: {
            fill: string;
        };
        boxplot: {
            fill: string;
        };
        errorbar: {
            stroke: string;
        };
        errorband: {
            fill: string;
        };
        arc: {
            fill: string;
        };
        background: string;
    };
    dark: {
        area: {
            fill: string;
        };
        bar: {
            fill: string;
        };
        circle: {
            fill: string;
        };
        line: {
            stroke: string;
        };
        point: {
            stroke: string;
        };
        rect: {
            fill: string;
        };
        tick: {
            fill: string;
        };
        boxplot: {
            fill: string;
        };
        errorbar: {
            stroke: string;
        };
        errorband: {
            fill: string;
        };
        arc: {
            fill: string;
        };
        background: string;
        header: {
            titleColor: string;
            labelColor: string;
        };
        axis: {
            gridColor: string;
            domainColor: string;
            tickColor: string;
            labelColor: string;
            titleColor: string;
        };
        legend: {
            labelColor: string;
            titleColor: string;
        };
        view: {
            stroke: string;
        };
    };
};
export declare const getColorPalette: (palette: string) => {
    light: {
        range: {
            category: {
                scheme: string;
            };
            diverging: {
                scheme: string;
            };
            heatmap: {
                scheme: string;
            };
            ordinal: {
                scheme: string;
            };
            ramp: {
                scheme: string;
            };
        };
    };
    dark: {
        range: {
            category: {
                scheme: string;
            };
            diverging: {
                scheme: string;
            };
            heatmap: {
                scheme: string;
            };
            ordinal: {
                scheme: string;
            };
            ramp: {
                scheme: string;
            };
        };
    };
};
