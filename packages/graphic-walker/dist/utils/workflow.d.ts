import type { IDataQueryWorkflowStep, IExpression, IViewField, IVisFilter, IDataQueryPayload, IFilterField, IChartForExport, IMutField, IVisSpecForExport } from '../interfaces';
import { type VizSpecStore } from '../store/visualSpecStore';
export declare const createFilter: (f: IFilterField) => IVisFilter;
export declare const toWorkflow: (viewFilters: VizSpecStore['viewFilters'], allFields: Omit<IViewField, 'dragId'>[], viewDimensionsRaw: Omit<IViewField, 'dragId'>[], viewMeasuresRaw: Omit<IViewField, 'dragId'>[], defaultAggregated: VizSpecStore['config']['defaultAggregated'], sort: 'none' | 'ascending' | 'descending', folds?: string[], limit?: number, timezoneDisplayOffset?: number) => IDataQueryWorkflowStep[];
export declare const addTransformForQuery: (query: IDataQueryPayload, transform: {
    key: string;
    expression: IExpression;
}[]) => IDataQueryPayload;
export declare const addFilterForQuery: (query: IDataQueryPayload, filters: IVisFilter[]) => IDataQueryPayload;
export declare function chartToWorkflow(chart: IVisSpecForExport | IChartForExport): IDataQueryPayload;
export declare const processExpression: (exp: IExpression, allFields: IMutField[], config: {
    timezoneDisplayOffset?: number;
}) => IExpression;
