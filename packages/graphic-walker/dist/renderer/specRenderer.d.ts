import React from 'react';
import { IReactVegaHandler } from '../vis/react-vega';
import { DraggableFieldState, IDarkMode, IRow, IThemeKey, IVisualConfigNew, IVisualLayout, IChannelScales } from '../interfaces';
import { GWGlobalConfig } from '../vis/theme';
interface SpecRendererProps {
    name?: string;
    themeKey?: IThemeKey;
    dark?: IDarkMode;
    data: IRow[];
    loading: boolean;
    draggableFieldState: DraggableFieldState;
    visualConfig: IVisualConfigNew;
    layout: IVisualLayout;
    onGeomClick?: ((values: any, e: any) => void) | undefined;
    onChartResize?: ((width: number, height: number) => void) | undefined;
    locale?: string;
    themeConfig?: GWGlobalConfig;
    channelScales?: IChannelScales;
    onReportSpec?: (spec: string) => void;
}
/**
 * Sans-store renderer of GraphicWalker.
 * This is a pure component, which means it will not depend on any global state.
 */
declare const SpecRenderer: React.ForwardRefExoticComponent<SpecRendererProps & React.RefAttributes<IReactVegaHandler>>;
export default SpecRenderer;
