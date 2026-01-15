export declare function reorder(list: any[], originalIndex: number, targetIndex: number): any[];
export interface movedLists {
    originList: any[];
    targetList: any[];
}
export declare function move(originalList: any[], originIndex: number, targetList: any[], targetIndex: number): movedLists;
