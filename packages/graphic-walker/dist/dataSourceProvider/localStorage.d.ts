export default function createLocalStorageProvider(): import("..").IDataSourceProvider & {
    exportData(): string;
};
