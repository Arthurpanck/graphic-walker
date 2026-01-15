import { IDataSourceProvider } from '../interfaces';
export default function createMemoryProvider(initData?: string | null): IDataSourceProvider & {
    exportData(): string;
};
