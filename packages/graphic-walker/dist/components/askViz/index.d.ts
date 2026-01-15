import React from 'react';
import { IAskVizFeedback, IViewField } from '../../interfaces';
declare const _default: React.FunctionComponent<{
    api?: string | ((metas: IViewField[], query: string) => {
        readonly visId: string;
        readonly name?: string | undefined;
        readonly encodings: {
            readonly dimensions: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly measures: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly rows: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly columns: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly color: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly opacity: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly size: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly shape: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly theta: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly radius: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly longitude: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly latitude: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly geoId: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly details: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly filters: readonly {
                readonly rule: {
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
                readonly enableAgg?: boolean | undefined;
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly text: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
        };
        readonly config: {
            readonly defaultAggregated: boolean;
            readonly geoms: readonly string[];
            readonly showTableSummary: boolean;
            readonly coordSystem?: import("../../interfaces").ICoordMode | undefined;
            readonly stack: import("../../interfaces").IStackMode;
            readonly showActions: boolean;
            readonly interactiveScale: boolean;
            readonly sorted: import("../../interfaces").ISortMode;
            readonly zeroScale: boolean;
            readonly scaleIncludeUnmatchedChoropleth?: boolean | undefined;
            readonly background?: string | undefined;
            readonly useSvg?: boolean | undefined;
            readonly format: {
                readonly numberFormat?: string | undefined;
                readonly timeFormat?: string | undefined;
                readonly normalizedNumberFormat?: string | undefined;
            };
            readonly primaryColor?: string | undefined;
            readonly colorPalette?: string | undefined;
            readonly scale?: {
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
            readonly resolve: {
                readonly x?: boolean | undefined;
                readonly y?: boolean | undefined;
                readonly color?: boolean | undefined;
                readonly opacity?: boolean | undefined;
                readonly shape?: boolean | undefined;
                readonly size?: boolean | undefined;
            };
            readonly size: {
                readonly mode: "auto" | "fixed";
                readonly width: number;
                readonly height: number;
            };
            readonly geojson?: {
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
            readonly geoKey?: string | undefined;
            readonly geoUrl?: {
                type: "GeoJSON" | "TopoJSON";
                url: string;
            } | undefined;
            readonly limit: number;
            readonly folds?: string[] | undefined;
        };
    } | {
        visId: string;
        name?: string | undefined;
        encodings: {
            dimensions: {
                dragId: string;
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
            coordSystem?: import("../../interfaces").ICoordMode | undefined;
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
            stack: import("../../interfaces").IStackMode;
            showActions: boolean;
            zeroScale: boolean;
            background?: string | undefined;
            scaleIncludeUnmatchedChoropleth?: boolean | undefined;
        };
    } | PromiseLike<{
        readonly visId: string;
        readonly name?: string | undefined;
        readonly encodings: {
            readonly dimensions: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly measures: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly rows: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly columns: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly color: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly opacity: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly size: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly shape: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly theta: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly radius: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly longitude: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly latitude: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly geoId: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly details: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly filters: readonly {
                readonly rule: {
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
                readonly enableAgg?: boolean | undefined;
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
            readonly text: readonly {
                readonly dragId: string;
                readonly sort?: import("../../interfaces").ISortMode | undefined;
                readonly fid: string;
                readonly name: string;
                readonly aggName?: string | undefined;
                readonly semanticType: import("../../interfaces").ISemanticType;
                readonly analyticType: import("../../interfaces").IAnalyticType;
                readonly cmp?: string | undefined;
                readonly geoRole?: import("../../interfaces").IGeoRole | undefined;
                readonly computed?: boolean | undefined;
                readonly expression?: {
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
                readonly timeUnit?: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second" | undefined;
                readonly basename?: string | undefined;
                readonly path?: string[] | undefined;
                readonly offset?: number | undefined;
                readonly aggergated?: boolean | undefined;
            }[];
        };
        readonly config: {
            readonly defaultAggregated: boolean;
            readonly geoms: readonly string[];
            readonly showTableSummary: boolean;
            readonly coordSystem?: import("../../interfaces").ICoordMode | undefined;
            readonly stack: import("../../interfaces").IStackMode;
            readonly showActions: boolean;
            readonly interactiveScale: boolean;
            readonly sorted: import("../../interfaces").ISortMode;
            readonly zeroScale: boolean;
            readonly scaleIncludeUnmatchedChoropleth?: boolean | undefined;
            readonly background?: string | undefined;
            readonly useSvg?: boolean | undefined;
            readonly format: {
                readonly numberFormat?: string | undefined;
                readonly timeFormat?: string | undefined;
                readonly normalizedNumberFormat?: string | undefined;
            };
            readonly primaryColor?: string | undefined;
            readonly colorPalette?: string | undefined;
            readonly scale?: {
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
            readonly resolve: {
                readonly x?: boolean | undefined;
                readonly y?: boolean | undefined;
                readonly color?: boolean | undefined;
                readonly opacity?: boolean | undefined;
                readonly shape?: boolean | undefined;
                readonly size?: boolean | undefined;
            };
            readonly size: {
                readonly mode: "auto" | "fixed";
                readonly width: number;
                readonly height: number;
            };
            readonly geojson?: {
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
            readonly geoKey?: string | undefined;
            readonly geoUrl?: {
                type: "GeoJSON" | "TopoJSON";
                url: string;
            } | undefined;
            readonly limit: number;
            readonly folds?: string[] | undefined;
        };
    } | {
        visId: string;
        name?: string | undefined;
        encodings: {
            dimensions: {
                dragId: string;
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
                sort?: import("../../interfaces").ISortMode | undefined;
                fid: string;
                name: string;
                aggName?: string | undefined;
                semanticType: import("../../interfaces").ISemanticType;
                analyticType: import("../../interfaces").IAnalyticType;
                cmp?: string | undefined;
                geoRole?: import("../../interfaces").IGeoRole | undefined;
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
            coordSystem?: import("../../interfaces").ICoordMode | undefined;
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
            stack: import("../../interfaces").IStackMode;
            showActions: boolean;
            zeroScale: boolean;
            background?: string | undefined;
            scaleIncludeUnmatchedChoropleth?: boolean | undefined;
        };
    }>) | undefined;
    feedbackApi?: string | ((data: IAskVizFeedback) => void) | undefined;
    headers?: Record<string, string> | undefined;
}>;
export default _default;
