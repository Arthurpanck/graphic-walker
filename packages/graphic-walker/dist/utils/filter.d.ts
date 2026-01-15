import { IFilterRule, SetToArray } from '../interfaces';
export declare function encodeFilterRule(rule: IFilterRule | null): SetToArray<IFilterRule> | null;
export declare function decodeFilterRule(rule: SetToArray<IFilterRule> | null): IFilterRule | null;
