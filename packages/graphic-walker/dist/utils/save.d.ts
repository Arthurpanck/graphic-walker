import { DraggableFieldState, IDataSet, IDataSource, IMutField, IVisSpec, IVisSpecForExport, IVisualConfig, IVisualConfigNew, IVisualLayout } from '../interfaces';
export declare function initEncoding(): DraggableFieldState;
export declare function initVisualConfig(): IVisualConfig;
export declare const emptyVisualLayout: IVisualLayout;
export declare const emptyVisualConfig: IVisualConfigNew;
export declare const emptyEncodings: DraggableFieldState;
export declare function visSpecDecoder(visSpec: IVisSpecForExport): IVisSpec;
export declare const forwardVisualConfigs: (content: IStoInfoOld['specList'][number]) => IVisSpecForExport;
export interface IStoInfoOld {
    $schema: undefined;
    datasets: IDataSet[];
    specList: IVisSpecForExport[];
    dataSources: IDataSource[];
}
export declare const IStoInfoV2SchemaUrl = "https://graphic-walker.kanaries.net/stoinfo_v2.json";
export interface IStoInfoV2 {
    $schema: typeof IStoInfoV2SchemaUrl;
    metaDict: Record<string, IMutField[]>;
    datasets: Required<IDataSource>[];
    specDict: Record<string, string[]>;
}
export type IStoInfo = IStoInfoOld | IStoInfoV2;
export declare function download(data: string, filename: string, type: string): void;
export declare function downloadBlob(blob: Blob, filename: string): void;
