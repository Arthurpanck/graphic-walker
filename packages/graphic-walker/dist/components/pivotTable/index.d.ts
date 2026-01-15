import React from 'react';
import { DeepReadonly, DraggableFieldState, IDarkMode, IRow, IThemeKey, IVisualConfigNew, IVisualLayout } from '../../interfaces';
interface PivotTableProps {
    themeKey?: IThemeKey;
    dark?: IDarkMode;
    data: IRow[];
    loading: boolean;
    draggableFieldState: DeepReadonly<DraggableFieldState>;
    visualConfig: IVisualConfigNew;
    layout: IVisualLayout;
}
declare const PivotTable: React.FC<PivotTableProps>;
export default PivotTable;
