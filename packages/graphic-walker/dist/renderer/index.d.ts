import React from 'react';
import { IDarkMode, IThemeKey, IComputationFunction, IChannelScales, IVisualLayout } from '../interfaces';
import { IReactVegaHandler } from '../vis/react-vega';
import { GWGlobalConfig } from '../vis/theme';
interface RendererProps {
    themeKey?: IThemeKey;
    themeConfig?: GWGlobalConfig;
    dark?: IDarkMode;
    computationFunction: IComputationFunction;
    channelScales?: IChannelScales;
    csvRef?: React.MutableRefObject<{
        download: () => void;
    }>;
    overrideSize?: IVisualLayout['size'];
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<RendererProps & React.RefAttributes<IReactVegaHandler>, "ref"> & React.RefAttributes<IReactVegaHandler>>>;
export default _default;
