import { ISemanticType } from "../../interfaces";
/**
 *
 * @param semanticTypeList semanticTypeList.length <= 2，调用时，手动将columns 和 rows的最后一个元素组合传进来
 * @returns geom(mark) type
 */
export declare function autoMark(semanticTypeList: ISemanticType[]): string;
