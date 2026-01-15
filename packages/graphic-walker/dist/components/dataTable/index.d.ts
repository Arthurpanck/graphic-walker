import React from 'react';
import type { IMutField, IComputationFunction } from '../../interfaces';
interface DataTableProps {
    /** page limit */
    size?: number;
    metas: IMutField[];
    computation: IComputationFunction;
    onMetaChange?: (fid: string, fIndex: number, meta: Partial<IMutField>) => void;
    disableFilter?: boolean;
    displayOffset?: number;
}
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
