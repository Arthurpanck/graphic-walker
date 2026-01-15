import React from 'react';
import type { DraggableFieldState, IChannelScales, IConfigScale, IRow, IVisualConfigNew, IVisualLayout, VegaGlobalConfig } from '../../interfaces';
export interface ILeafletRendererProps {
    name?: string;
    vegaConfig?: VegaGlobalConfig;
    draggableFieldState: DraggableFieldState;
    visualConfig: IVisualConfigNew;
    visualLayout: IVisualLayout;
    data: IRow[];
    channelScales?: IChannelScales;
    scale?: {
        opacity: IConfigScale;
        size: IConfigScale;
    };
}
export interface ILeafletRendererRef {
}
export declare const LEAFLET_DEFAULT_WIDTH = 800;
export declare const LEAFLET_DEFAULT_HEIGHT = 600;
declare const LeafletRenderer: React.ForwardRefExoticComponent<ILeafletRendererProps & React.RefAttributes<ILeafletRendererRef>>;
export default LeafletRenderer;
