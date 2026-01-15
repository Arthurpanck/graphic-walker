import React from 'react';
import type { IDarkMode, IRow, IThemeKey, DraggableFieldState, IVisualConfig, IVisualConfigNew, IComputationFunction, IVisualLayout, IChannelScales } from '../interfaces';
import type { IReactVegaHandler } from '../vis/react-vega';
import { GWGlobalConfig } from '../vis/theme';
type IPureRendererProps = {
    className?: string;
    name?: string;
    themeKey?: IThemeKey;
    themeConfig?: GWGlobalConfig;
    dark?: IDarkMode;
    visualState: DraggableFieldState;
    visualConfig: IVisualConfigNew | IVisualConfig;
    visualLayout?: IVisualLayout;
    locale?: string;
    channelScales?: IChannelScales;
    overrideSize?: IVisualLayout['size'];
};
type LocalProps = {
    type?: 'local';
    rawData: IRow[];
};
type RemoteProps = {
    type: 'remote';
    computation: IComputationFunction;
};
export type IRemotePureRendererProps = IPureRendererProps & RemoteProps & React.RefAttributes<IReactVegaHandler>;
export type ILocalPureRendererProps = IPureRendererProps & LocalProps & React.RefAttributes<IReactVegaHandler>;
declare const _default: {
    (p: ILocalPureRendererProps): JSX.Element;
    (p: IRemotePureRendererProps): JSX.Element;
};
export default _default;
