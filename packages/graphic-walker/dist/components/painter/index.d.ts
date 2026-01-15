import React from 'react';
import { IDarkMode, IThemeKey } from '../../interfaces';
import { GWGlobalConfig } from '../../vis/theme';
declare const _default: (({ dark, themeConfig, themeKey }: {
    dark?: IDarkMode | undefined;
    themeConfig?: GWGlobalConfig | undefined;
    themeKey?: IThemeKey | undefined;
}) => React.JSX.Element) & {
    displayName: string;
};
export default _default;
