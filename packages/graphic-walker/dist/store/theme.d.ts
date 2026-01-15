/// <reference types="react" />
import { IThemeKey } from '../interfaces';
import { GWGlobalConfig } from '../vis/theme';
export declare const themeContext: import("react").Context<"dark" | "light">;
export declare const vegaThemeContext: import("react").Context<{
    themeKey?: IThemeKey | undefined;
    themeConfig?: GWGlobalConfig | undefined;
}>;
