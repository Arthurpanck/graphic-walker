import { IChart, IMutField, DraggableFieldState, IFilterRule, ISortMode, IAggregator, SetToArray, IVisualLayout, IChartForExport, IVisualConfigNew, IVisSpec, PartialChart, ICoordMode, IGeoUrl, ISemanticType, IPaintMap, IField, IPaintMapV2, IVisSpecForExport, IDefaultConfig } from '../interfaces';
import type { FeatureCollection } from 'geojson';
import { KVTuple } from './utils';
import { WithHistory, freeze } from './withHistory';
import { DATE_TIME_DRILL_LEVELS, DATE_TIME_FEATURE_LEVELS } from '../constants';
type normalKeys = keyof Omit<DraggableFieldState, 'filters'>;
export declare enum Methods {
    setConfig = 0,
    removeField = 1,
    reorderField = 2,
    moveField = 3,
    cloneField = 4,
    createBinlogField = 5,
    appendFilter = 6,
    modFilter = 7,
    writeFilter = 8,
    setName = 9,
    applySort = 10,
    transpose = 11,
    setLayout = 12,
    setFieldAggregator = 13,
    setGeoData = 14,
    setCoordSystem = 15,
    createDateDrillField = 16,
    createDateFeatureField = 17,
    changeSemanticType = 18,
    setFilterAggregator = 19,
    addFoldField = 20,
    upsertPaintField = 21,
    addSQLComputedField = 22,
    removeAllField = 23,
    editAllField = 24
}
type PropsMap = {
    [Methods.setConfig]: KVTuple<IVisualConfigNew>;
    [Methods.removeField]: [keyof DraggableFieldState, number];
    [Methods.reorderField]: [keyof DraggableFieldState, number, number];
    [Methods.moveField]: [normalKeys, number, normalKeys, number, number | null];
    [Methods.cloneField]: [normalKeys, number, normalKeys, number, string, number | null];
    [Methods.createBinlogField]: [normalKeys, number, 'bin' | 'binCount' | 'log10' | 'log2' | 'log', string, number];
    [Methods.appendFilter]: [number, normalKeys, number, string];
    [Methods.modFilter]: [number, normalKeys, number];
    [Methods.writeFilter]: [number, SetToArray<IFilterRule> | null];
    [Methods.setName]: [string];
    [Methods.applySort]: [ISortMode];
    [Methods.transpose]: [];
    [Methods.setLayout]: [KVTuple<IVisualLayout>[]];
    [Methods.setFieldAggregator]: [normalKeys, number, IAggregator];
    [Methods.setGeoData]: [FeatureCollection | undefined, string | undefined, IGeoUrl | undefined];
    [Methods.setCoordSystem]: [ICoordMode];
    [Methods.createDateDrillField]: [normalKeys, number, (typeof DATE_TIME_DRILL_LEVELS)[number], string, string, string | undefined, number | undefined];
    [Methods.createDateFeatureField]: [normalKeys, number, (typeof DATE_TIME_FEATURE_LEVELS)[number], string, string, string | undefined, number | undefined];
    [Methods.changeSemanticType]: [normalKeys, number, ISemanticType];
    [Methods.setFilterAggregator]: [number, IAggregator | ''];
    [Methods.addFoldField]: [normalKeys, number, normalKeys, number, string, number | null];
    [Methods.upsertPaintField]: [IPaintMap | IPaintMapV2 | null, string];
    [Methods.addSQLComputedField]: [string, string, string];
    [Methods.removeAllField]: [string];
    [Methods.editAllField]: [string, Partial<IField>];
};
type VisActionOf<T> = T extends Methods ? [T, ...PropsMap[T]] : never;
type VisAction = VisActionOf<Methods>;
export type VisSpecWithHistory = WithHistory<IChart, VisAction>;
export declare const reducer: (data: IChart, action: VisAction) => IChart;
export declare const perform: (data: VisSpecWithHistory, action: VisAction) => VisSpecWithHistory;
export declare const undo: (data: VisSpecWithHistory) => VisSpecWithHistory;
export declare const redo: (data: VisSpecWithHistory) => VisSpecWithHistory;
export declare const at: (data: VisSpecWithHistory, cursor: number) => IChart;
export { freeze };
export declare const performers: {
    [x: number]: (data: VisSpecWithHistory, ...args: unknown) => VisSpecWithHistory;
    readonly setConfig: (data: VisSpecWithHistory, ...args: ["limit", number] | ["defaultAggregated", boolean] | ["geoms", string[]] | ["coordSystem", ICoordMode | undefined] | ["folds", string[] | undefined] | ["timezoneDisplayOffset", number | undefined]) => VisSpecWithHistory;
    readonly removeField: (data: VisSpecWithHistory, args_0: keyof DraggableFieldState, args_1: number) => VisSpecWithHistory;
    readonly reorderField: (data: VisSpecWithHistory, args_0: keyof DraggableFieldState, args_1: number, args_2: number) => VisSpecWithHistory;
    readonly moveField: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_3: number, args_4: number | null) => VisSpecWithHistory;
    readonly cloneField: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_3: number, args_4: string, args_5: number | null) => VisSpecWithHistory;
    readonly createBinlogField: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: "log" | "bin" | "log2" | "log10" | "binCount", args_3: string, args_4: number) => VisSpecWithHistory;
    readonly appendFilter: (data: VisSpecWithHistory, args_0: number, args_1: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_2: number, args_3: string) => VisSpecWithHistory;
    readonly modFilter: (data: VisSpecWithHistory, args_0: number, args_1: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_2: number) => VisSpecWithHistory;
    readonly writeFilter: (data: VisSpecWithHistory, args_0: number, args_1: SetToArray<IFilterRule> | null) => VisSpecWithHistory;
    readonly setName: (data: VisSpecWithHistory, args_0: string) => VisSpecWithHistory;
    readonly applySort: (data: VisSpecWithHistory, args_0: ISortMode) => VisSpecWithHistory;
    readonly transpose: (data: VisSpecWithHistory) => VisSpecWithHistory;
    readonly setLayout: (data: VisSpecWithHistory, args_0: (["size", {
        mode: "auto" | "fixed" | "full";
        width: number;
        height: number;
    }] | ["format", {
        numberFormat?: string | undefined;
        timeFormat?: string | undefined;
        normalizedNumberFormat?: string | undefined;
    }] | ["scale", {
        opacity: import("../interfaces").IConfigScale;
        size: import("../interfaces").IConfigScale;
    } | undefined] | ["background", string | undefined] | ["stack", import("../interfaces").IStackMode] | ["resolve", {
        x?: boolean | undefined;
        y?: boolean | undefined;
        color?: boolean | undefined;
        opacity?: boolean | undefined;
        shape?: boolean | undefined;
        size?: boolean | undefined;
    }] | ["showTableSummary", boolean] | ["showActions", boolean] | ["interactiveScale", boolean] | ["zeroScale", boolean] | ["scaleIncludeUnmatchedChoropleth", boolean | undefined] | ["useSvg", boolean | undefined] | ["primaryColor", string | undefined] | ["colorPalette", string | undefined] | ["geojson", FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties> | undefined] | ["geoKey", string | undefined] | ["geoUrl", IGeoUrl | undefined] | ["geoMapTileUrl", string | undefined])[]) => VisSpecWithHistory;
    readonly setFieldAggregator: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: IAggregator) => VisSpecWithHistory;
    readonly setGeoData: (data: VisSpecWithHistory, args_0: FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties> | undefined, args_1: string | undefined, args_2: IGeoUrl | undefined) => VisSpecWithHistory;
    readonly setCoordSystem: (data: VisSpecWithHistory, args_0: ICoordMode) => VisSpecWithHistory;
    readonly createDateDrillField: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second", args_3: string, args_4: string, args_5: string | undefined, args_6: number | undefined) => VisSpecWithHistory;
    readonly createDateFeatureField: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | "weekday", args_3: string, args_4: string, args_5: string | undefined, args_6: number | undefined) => VisSpecWithHistory;
    readonly changeSemanticType: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: ISemanticType) => VisSpecWithHistory;
    readonly setFilterAggregator: (data: VisSpecWithHistory, args_0: number, args_1: "" | IAggregator) => VisSpecWithHistory;
    readonly addFoldField: (data: VisSpecWithHistory, args_0: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_1: number, args_2: "details" | "text" | "color" | "size" | "opacity" | "radius" | "shape" | "rows" | "columns" | "theta" | "dimensions" | "measures" | "longitude" | "latitude" | "geoId", args_3: number, args_4: string, args_5: number | null) => VisSpecWithHistory;
    readonly upsertPaintField: (data: VisSpecWithHistory, args_0: IPaintMap | IPaintMapV2 | null, args_1: string) => VisSpecWithHistory;
    readonly addSQLComputedField: (data: VisSpecWithHistory, args_0: string, args_1: string, args_2: string) => VisSpecWithHistory;
    readonly removeAllField: (data: VisSpecWithHistory, args_0: string) => VisSpecWithHistory;
    readonly editAllField: (data: VisSpecWithHistory, args_0: string, args_1: Partial<IField>) => VisSpecWithHistory;
};
export declare function encodeVisSpec(data: IChart): IChartForExport;
export declare function decodeVisSpec(snapshot: Partial<IChartForExport>): PartialChart;
export declare function newChart(fields: IMutField[], name: string, visId?: string, defaultConfig?: IDefaultConfig): IChart;
export declare function fillChart(chart: PartialChart): IChart;
export declare function fromSnapshot(snapshot: PartialChart): VisSpecWithHistory;
export declare function fromFields(fields: IMutField[], name: string, defaultConfig?: IDefaultConfig): VisSpecWithHistory;
export declare function exportFullRaw(data: VisSpecWithHistory, maxHistory?: number): string;
export declare function exportNow(data: VisSpecWithHistory): {
    visId: string;
    name?: string | undefined;
    encodings: {
        dimensions: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        measures: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        rows: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        columns: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        color: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        opacity: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        size: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        shape: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        theta: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        radius: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        longitude: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        latitude: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        geoId: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        details: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        filters: {
            rule: {
                type: "range";
                value: readonly [number, number];
            } | {
                type: "temporal range";
                value: readonly [number, number];
                offset?: number | undefined;
                format?: string | undefined;
            } | {
                type: "one of";
                value: (string | number)[];
            } | {
                type: "not in";
                value: (string | number)[];
            } | {
                type: "regexp";
                value: string;
                caseSensitive?: boolean | undefined;
            } | null;
            enableAgg?: boolean | undefined;
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
        text: {
            dragId: string;
            sort?: ISortMode | undefined;
            fid: string;
            name: string;
            aggName?: string | undefined;
            semanticType: ISemanticType;
            analyticType: import("../interfaces").IAnalyticType;
            cmp?: string | undefined;
            geoRole?: import("../interfaces").IGeoRole | undefined;
            computed?: boolean | undefined;
            expression?: {
                op: "paint" | "log" | "bin" | "log2" | "log10" | "one" | "binCount" | "dateTimeDrill" | "dateTimeFeature" | "expr";
                params: ({
                    type: "field";
                    value: string;
                } | {
                    type: "value";
                    value: any;
                } | {
                    type: "expression";
                    value: any;
                } | {
                    type: "constant";
                    value: any;
                } | {
                    type: "format";
                    value: string;
                } | {
                    type: "offset";
                    value: number;
                } | {
                    type: "map";
                    value: {
                        x: string;
                        y: string;
                        domainX: [number, number];
                        domainY: [number, number];
                        mapwidth: number;
                        map: string;
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "sql";
                    value: string;
                } | {
                    type: "newmap";
                    value: {
                        facets: {
                            dimensions: {
                                fid: string;
                                domain: {
                                    type: "nominal";
                                    value: any[];
                                    width: number;
                                } | {
                                    type: "quantitative";
                                    value: [number, number];
                                    width: number;
                                };
                            }[];
                            map: string;
                            usedColor: number[];
                        }[];
                        dict: {
                            [x: number]: {
                                name: string;
                                color: string;
                            };
                        };
                        usedColor: number[];
                    };
                } | {
                    type: "displayOffset";
                    value: number;
                })[];
                as: string;
                num?: number | undefined;
            } | undefined;
            timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
            basename?: string | undefined;
            path?: string[] | undefined;
            offset?: number | undefined;
            aggergated?: boolean | undefined;
        }[];
    };
    config: {
        defaultAggregated: boolean;
        geoms: string[];
        coordSystem?: ICoordMode | undefined;
        limit: number;
        folds?: string[] | undefined;
        timezoneDisplayOffset?: number | undefined;
    };
    layout: {
        showTableSummary: boolean;
        format: {
            numberFormat?: string | undefined;
            timeFormat?: string | undefined;
            normalizedNumberFormat?: string | undefined;
        };
        primaryColor?: string | undefined;
        colorPalette?: string | undefined;
        scale?: {
            opacity: {
                rangeMax?: number | undefined;
                rangeMin?: number | undefined;
                domainMin?: number | undefined;
                domainMax?: number | undefined;
            };
            size: {
                rangeMax?: number | undefined;
                rangeMin?: number | undefined;
                domainMin?: number | undefined;
                domainMax?: number | undefined;
            };
        } | undefined;
        resolve: {
            x?: boolean | undefined;
            y?: boolean | undefined;
            color?: boolean | undefined;
            opacity?: boolean | undefined;
            shape?: boolean | undefined;
            size?: boolean | undefined;
        };
        size: {
            mode: "auto" | "fixed" | "full";
            width: number;
            height: number;
        };
        useSvg?: boolean | undefined;
        geojson?: {
            type: "FeatureCollection";
            features: {
                type: "Feature";
                geometry: {
                    type: "Point";
                    coordinates: number[];
                    bbox?: import("geojson").BBox | undefined;
                } | {
                    type: "MultiPoint";
                    coordinates: number[][];
                    bbox?: import("geojson").BBox | undefined;
                } | {
                    type: "LineString";
                    coordinates: number[][];
                    bbox?: import("geojson").BBox | undefined;
                } | {
                    type: "MultiLineString";
                    coordinates: number[][][];
                    bbox?: import("geojson").BBox | undefined;
                } | {
                    type: "Polygon";
                    coordinates: number[][][];
                    bbox?: import("geojson").BBox | undefined;
                } | {
                    type: "MultiPolygon";
                    coordinates: number[][][][];
                    bbox?: import("geojson").BBox | undefined;
                } | {
                    type: "GeometryCollection";
                    geometries: ({
                        type: "Point";
                        coordinates: number[];
                        bbox?: import("geojson").BBox | undefined;
                    } | {
                        type: "MultiPoint";
                        coordinates: number[][];
                        bbox?: import("geojson").BBox | undefined;
                    } | {
                        type: "LineString";
                        coordinates: number[][];
                        bbox?: import("geojson").BBox | undefined;
                    } | {
                        type: "MultiLineString";
                        coordinates: number[][][];
                        bbox?: import("geojson").BBox | undefined;
                    } | {
                        type: "Polygon";
                        coordinates: number[][][];
                        bbox?: import("geojson").BBox | undefined;
                    } | {
                        type: "MultiPolygon";
                        coordinates: number[][][][];
                        bbox?: import("geojson").BBox | undefined;
                    } | any)[];
                    bbox?: import("geojson").BBox | undefined;
                };
                id?: string | number | undefined;
                properties: {
                    [x: string]: any;
                } | null;
                bbox?: import("geojson").BBox | undefined;
            }[];
            bbox?: import("geojson").BBox | undefined;
        } | undefined;
        geoKey?: string | undefined;
        geoUrl?: {
            type: "GeoJSON" | "TopoJSON";
            url: string;
        } | undefined;
        geoMapTileUrl?: string | undefined;
        interactiveScale: boolean;
        stack: import("../interfaces").IStackMode;
        showActions: boolean;
        zeroScale: boolean;
        background?: string | undefined;
        scaleIncludeUnmatchedChoropleth?: boolean | undefined;
    };
};
export declare function importNow(data: IChartForExport): VisSpecWithHistory;
export declare function importFull(data: string): VisSpecWithHistory;
export declare function resolveChart(data: string): IChart;
export declare function convertChart(data: IVisSpec): IChart;
export declare function parseChart(chart: IVisSpecForExport | IChartForExport): PartialChart;
