import { IField } from "../interfaces";
export declare class Field<T extends IField> {
    protected _field: T;
    constructor(f: T);
    asDimension(): T;
    asMeasure(): T;
    asGeo(role: T['geoRole']): T;
    switchAnalyticType(analyticType: T['analyticType'] | string): T;
}
