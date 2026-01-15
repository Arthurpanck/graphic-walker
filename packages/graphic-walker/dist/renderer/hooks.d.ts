import type { IFilterField, IRow, IViewField, IDataQueryWorkflowStep, IComputationFunction } from '../interfaces';
interface UseRendererProps {
    allFields: Omit<IViewField, 'dragId'>[];
    viewDimensions: Omit<IViewField, 'dragId'>[];
    viewMeasures: Omit<IViewField, 'dragId'>[];
    filters: IFilterField[];
    defaultAggregated: boolean;
    sort: 'none' | 'ascending' | 'descending';
    limit: number;
    computationFunction: IComputationFunction;
    folds?: string[];
    timezoneDisplayOffset?: number;
}
interface UseRendererResult {
    viewData: IRow[];
    loading: boolean;
    parsed: {
        workflow: IDataQueryWorkflowStep[];
    };
}
export declare const useRenderer: (props: UseRendererProps) => UseRendererResult;
export {};
