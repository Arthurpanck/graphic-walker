import React from 'react';
import type { IDataSourceListener, IDataSourceProvider, IChart, IGWHandler, IGWProps, IMutField, IRow, ITableProps, IVizAppProps, ILocalComputationProps, IRemoteComputationProps, IVisualLayout, IChartForExport, IVisSpecForExport } from './interfaces';
import './empty_sheet.css';
export type ILocalVizAppProps = IVizAppProps & ILocalComputationProps & React.RefAttributes<IGWHandler>;
export type IRemoteVizAppProps = IVizAppProps & IRemoteComputationProps & React.RefAttributes<IGWHandler>;
export declare const GraphicWalker: {
    (p: ILocalVizAppProps): JSX.Element;
    (p: IRemoteVizAppProps): JSX.Element;
};
export type IRendererProps = {
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    overrideSize?: IVisualLayout['size'];
};
export declare const GraphicRenderer: {
    (p: ILocalVizAppProps & IRendererProps): JSX.Element;
    (p: IRemoteVizAppProps & IRendererProps): JSX.Element;
};
export type ILocalTableProps = ITableProps & ILocalComputationProps & React.RefAttributes<IGWHandler>;
export type IRemoteTableProps = ITableProps & IRemoteComputationProps & React.RefAttributes<IGWHandler>;
export declare const TableWalker: {
    (p: ILocalTableProps): JSX.Element;
    (p: IRemoteTableProps): JSX.Element;
};
export { default as PureRenderer } from './renderer/pureRenderer';
export type { ILocalPureRendererProps, IRemotePureRendererProps } from './renderer/pureRenderer';
export { embedGraphicWalker } from './vanilla';
export type { IGWProps, ITableProps, IVizAppProps, IDataSourceProvider, IMutField, IRow, IDataSourceListener, IChart, IChartForExport, IVisSpecForExport };
export * from './store/visualSpecStore';
export { ISegmentKey, ColorSchemes, IDataSourceEventType } from './interfaces';
export { resolveChart, convertChart, parseChart } from './models/visSpecHistory';
export { getGlobalConfig } from './config';
export { DataSourceSegmentComponent } from './dataSource';
export * from './models/visSpecHistory';
export * from './dataSourceProvider';
export { getComputation } from './computation/clientComputation';
export { addFilterForQuery, chartToWorkflow } from './utils/workflow';
export * from './components/filterWalker';
