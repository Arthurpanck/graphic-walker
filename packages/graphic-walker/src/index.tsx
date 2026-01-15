import * as React from 'react';

// Polyfill for React.useId (React 18 feature) for React 17 compatibility
if (!(React as any).useId) {
    let count = 0;
    (React as any).useId = () => {
        const [id] = React.useState(() => `gw-id-${count++}`);
        return id;
    };
}

export * from './root';
export { default as PureRenderer } from './renderer/pureRenderer';
export type { ILocalPureRendererProps, IRemotePureRendererProps } from './renderer/pureRenderer';
export { embedGraphicWalker, embedGraphicRenderer, embedPureRenderer, embedTableWalker } from './vanilla';
export * from './interfaces';
export * from './store/visualSpecStore';
export { resolveChart, convertChart, parseChart } from './models/visSpecHistory';
export { getGlobalConfig } from './config';
export { DataSourceSegmentComponent } from './dataSource';
export * from './models/visSpecHistory';
export * from './dataSourceProvider';
export { getComputation } from './computation/clientComputation';
export { addFilterForQuery, chartToWorkflow } from './utils/workflow';
export * from './utils/colors';
export * from './components/filterContext';
