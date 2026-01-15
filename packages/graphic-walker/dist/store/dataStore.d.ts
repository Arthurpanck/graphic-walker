import { IDataSource, IMutField, IRow } from '../interfaces';
import { IStoInfo, IStoInfoV2 } from '../utils/save';
export declare class DataStore {
    metaDict: Record<string, IMutField[]>;
    metaMap: Record<string, string>;
    visDict: Record<string, string[]>;
    dataSources: Required<IDataSource>[];
    updateDatasetMetas(id: string, fid: string, diffMeta: Partial<IMutField>): void;
    importData(data: IStoInfo): void;
    exportData(): IStoInfoV2;
    addDataSource(data: {
        data: IRow[];
        fields: IMutField[];
        name: string;
    }): string;
}
