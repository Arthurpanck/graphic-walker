import { IThemeKey, VegaGlobalConfig } from '../interfaces';
export declare function getTheme(props: {
    themeKey?: IThemeKey;
    themeConfig?: any;
    primaryColor?: string;
    colorPalette?: string;
    mediaTheme: 'dark' | 'light';
}): VegaGlobalConfig;
export declare function getColor(theme: VegaGlobalConfig): {
    primaryColor: string;
    nominalPalette: string[];
    quantitativePalette: string[];
};
