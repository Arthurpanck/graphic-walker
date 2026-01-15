import { VisSpecWithHistory } from '../models/visSpecHistory';
import type { FeatureCollection } from 'geojson';
import { DraggableFieldState, Filters, IAggregator, IChart, IFilterRule, IMutField, ISegmentKey, IGeographicData, ISortMode, IViewField, IVisualConfigNew, IVisualLayout, Specification, ICoordMode, IVisSpecForExport, IGeoUrl, ICreateField, ISemanticType, IChartForExport, IPaintMapV2, IDefaultConfig } from '../interfaces';
import { DATE_TIME_DRILL_LEVELS, DATE_TIME_FEATURE_LEVELS } from '../constants';
import { KVTuple } from '../models/utils';
import { INestNode } from '../components/pivotTable/inteface';
export declare const viewEncodingKeys: (geom: string) => string[];
export declare class VizSpecStore {
    visList: VisSpecWithHistory[];
    visIndex: number;
    createdVis: number;
    editingFilterIdx: number | null;
    meta: IMutField[];
    segmentKey: ISegmentKey;
    showInsightBoard: boolean;
    showDataBoard: boolean;
    vizEmbededMenu: {
        show: boolean;
        position: [number, number];
    };
    showDataConfig: boolean;
    showCodeExportPanel: boolean;
    showVisualConfigPanel: boolean;
    showGeoJSONConfigPanel: boolean;
    removeConfirmIdx: number | null;
    filters: Filters;
    tableCollapsedHeaderMap: Map<string, INestNode['path']>;
    selectedMarkObject: Record<string, string | number | undefined>;
    showLogSettingPanel: boolean;
    showBinSettingPanel: boolean;
    createField: ICreateField | undefined;
    localGeoJSON: FeatureCollection | undefined;
    showErrorResolutionPanel: number;
    showPainterPanel: boolean;
    lastErrorMessage: string;
    showAskvizFeedbackIndex: number | undefined;
    lastSpec: string;
    editingComputedFieldFid: string | undefined;
    defaultConfig: IDefaultConfig | undefined;
    private onMetaChange?;
    constructor(meta: IMutField[], options?: {
        empty?: boolean;
        onMetaChange?: (fid: string, diffMeta: Partial<IMutField>) => void;
        defaultConfig?: IDefaultConfig;
    });
    get visLength(): number;
    get vizList(): IChart[];
    get currentVis(): IChart;
    get currentEncodings(): DraggableFieldState;
    get viewFilters(): import("../interfaces").IFilterField[];
    get dimensions(): IViewField[];
    get measures(): IViewField[];
    get rows(): IViewField[];
    get columns(): IViewField[];
    get sort(): ISortMode;
    get sortedEncoding(): "none" | "column" | "row";
    get allFields(): IViewField[];
    get config(): IVisualConfigNew;
    get layout(): {
        geoJson?: FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties> | undefined;
        showTableSummary: boolean;
        format: {
            numberFormat?: string | undefined;
            timeFormat?: string | undefined;
            normalizedNumberFormat?: string | undefined;
        };
        primaryColor?: string | undefined;
        colorPalette?: string | undefined;
        scale?: {
            opacity: import("../interfaces").IConfigScale;
            size: import("../interfaces").IConfigScale;
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
        geojson?: FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties> | undefined;
        geoKey?: string | undefined;
        geoUrl?: IGeoUrl | undefined;
        geoMapTileUrl?: string | undefined;
        interactiveScale: boolean;
        stack: import("../interfaces").IStackMode;
        showActions: boolean;
        zeroScale: boolean;
        background?: string | undefined;
        scaleIncludeUnmatchedChoropleth?: boolean | undefined;
    };
    get allEncodings(): Record<string, IViewField[]>;
    get viewEncodings(): Record<string, IViewField[]>;
    get viewEncodingFields(): IViewField[];
    get viewDimensions(): IViewField[];
    get viewMeasures(): IViewField[];
    get workflow(): import("../interfaces").IDataQueryWorkflowStep[];
    get limit(): number;
    get canUndo(): boolean;
    get canRedo(): boolean;
    paintFields(): {
        readonly type: "error";
        readonly key: "count";
        readonly x?: undefined;
        readonly y?: undefined;
    } | {
        readonly type: "error";
        readonly key: "temporal";
        readonly x?: undefined;
        readonly y?: undefined;
    } | {
        readonly type: "new";
        readonly x: IViewField;
        readonly y: IViewField;
        readonly key?: undefined;
    } | {
        readonly type: "error";
        readonly key: "aggergation";
        readonly x?: undefined;
        readonly y?: undefined;
    };
    get paintInfo(): {
        readonly type: "error";
        readonly key: "count";
        readonly x?: undefined;
        readonly y?: undefined;
    } | {
        readonly type: "error";
        readonly key: "temporal";
        readonly x?: undefined;
        readonly y?: undefined;
    } | {
        readonly type: "new";
        readonly x: IViewField;
        readonly y: IViewField;
        readonly key?: undefined;
    } | {
        readonly type: "error";
        readonly key: "aggergation";
        readonly x?: undefined;
        readonly y?: undefined;
    } | {
        readonly type: "exist";
        readonly item: IPaintMapV2;
        readonly new: {
            readonly type: "error";
            readonly key: "count";
            readonly x?: undefined;
            readonly y?: undefined;
        } | {
            readonly type: "error";
            readonly key: "temporal";
            readonly x?: undefined;
            readonly y?: undefined;
        } | {
            readonly type: "new";
            readonly x: IViewField;
            readonly y: IViewField;
            readonly key?: undefined;
        } | {
            readonly type: "error";
            readonly key: "aggergation";
            readonly x?: undefined;
            readonly y?: undefined;
        };
    };
    private appendFilter;
    undo(): void;
    redo(): void;
    setVisName(index: number, name: string): void;
    setMeta(meta: IMutField[]): void;
    setOnMetaChange(onMetaChange?: (fid: string, diffMeta: Partial<IMutField>) => void): void;
    setDefaultConfig(defaultConfig?: IDefaultConfig): void;
    resetVisualization(name?: string): void;
    addVisualization(defaultName?: string | ((index: number) => string)): void;
    removeVisualization(index: number): void;
    duplicateVisualization(index: number): void;
    setFilterEditing(index: number): void;
    closeFilterEditing(): void;
    setSegmentKey(sk: ISegmentKey): void;
    setVisualConfig(...args: KVTuple<IVisualConfigNew>): void;
    setCoordSystem(mode: ICoordMode): void;
    setVisualLayout(...args: KVTuple<IVisualLayout>): any;
    setVisualLayout(...args: KVTuple<IVisualLayout>[]): any;
    reorderField(stateKey: keyof DraggableFieldState, sourceIndex: number, destinationIndex: number): void;
    moveField(sourceKey: keyof DraggableFieldState, sourceIndex: number, destinationKey: keyof DraggableFieldState, destinationIndex: number): void;
    modFilter(index: number, sourceKey: keyof Omit<DraggableFieldState, 'filters'>, sourceIndex: number): void;
    removeField(sourceKey: keyof DraggableFieldState, sourceIndex: number): void;
    writeFilter(index: number, rule: IFilterRule | null): void;
    transpose(): void;
    createBinField(stateKey: keyof Omit<DraggableFieldState, 'filters'>, index: number, binType: 'bin' | 'binCount', binNumber?: number): string;
    createLogField(stateKey: keyof Omit<DraggableFieldState, 'filters'>, index: number, scaleType: 'log10' | 'log2' | 'log', logNumber?: number): void;
    createDateTimeDrilledField(stateKey: keyof Omit<DraggableFieldState, 'filters'>, index: number, drillLevel: (typeof DATE_TIME_DRILL_LEVELS)[number], name: string, format: string, offset: number | undefined): void;
    createDateFeatureField(stateKey: keyof Omit<DraggableFieldState, 'filters'>, index: number, drillLevel: (typeof DATE_TIME_FEATURE_LEVELS)[number], name: string, format: string, offset: number | undefined): void;
    setFieldAggregator(stateKey: keyof Omit<DraggableFieldState, 'filters'>, index: number, aggName: IAggregator): void;
    setFilterAggregator(index: number, aggName: IAggregator | ''): void;
    applyDefaultSort(sortType?: ISortMode): void;
    exportCurrentChart(): string;
    exportAllCharts(): string[];
    exportCode(): {
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
    }[];
    importCode(data: IChartForExport[] | IVisSpecForExport[]): void;
    appendRaw(data: string): void;
    importRaw(data: string[]): void;
    appendFromCode(data: IVisSpecForExport | IChartForExport): void;
    setAskvizFeedback(show: boolean): void;
    replaceNow(chart: IChart): void;
    selectVisualization(index: number): void;
    setShowDataConfig(show: boolean): void;
    setShowInsightBoard(show: boolean): void;
    setShowDataBoard(show: boolean): void;
    showEmbededMenu(position: [number, number]): void;
    setShowCodeExportPanel(show: boolean): void;
    setShowVisualConfigPanel(show: boolean): void;
    closeEmbededMenu(): void;
    setFilters(props: Filters): void;
    updateCurrentDatasetMetas(fid: string, diffMeta: Partial<IMutField>): void;
    openRemoveConfirmModal(index: number): void;
    closeRemoveConfirmModal(): void;
    setGeographicData(data: IGeographicData, geoKey: string, geoUrl?: IGeoUrl): void;
    clearGeographicData(): void;
    changeSemanticType(stateKey: keyof Omit<DraggableFieldState, 'filters'>, index: number, semanticType: ISemanticType): void;
    updatePaint(paintMap: IPaintMapV2 | null, name: string): void;
    updateGeoKey(key: string): void;
    updateTableCollapsedHeader(node: INestNode): void;
    resetTableCollapsedHeader(): void;
    setShowGeoJSONConfigPanel(show: boolean): void;
    setShowBinSettingPanel(show: boolean): void;
    setShowLogSettingPanel(show: boolean): void;
    setCreateField(field: ICreateField): void;
    updateSelectedMarkObject(newMarkObj: Record<string, string | number | undefined>): void;
    updateShowErrorResolutionPanel(errCode: number, msg?: string): void;
    setShowPainter(show: boolean): void;
    updateLastSpec(spec: string): void;
    setComputedFieldFid(fid?: string): void;
    upsertComputedField(fid: string, name: string, sql: string): void;
    removeComputedField(sourceKey: keyof DraggableFieldState, sourceIndex: number): void;
}
export declare function renderSpec(spec: Specification, meta: IMutField[], name: string, visId: string): IChart;
