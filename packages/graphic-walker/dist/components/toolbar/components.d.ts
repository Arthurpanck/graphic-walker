import { KeyboardEvent, MouseEvent } from "react";
export declare const useHandlers: (action: () => void, disabled: boolean, triggerKeys?: string[], allowPropagation?: boolean) => {
    onClick: (ev: MouseEvent) => void;
    onKeyDown: (ev: KeyboardEvent) => void;
    onMouseOut: (ev: MouseEvent) => void;
};
export declare const ToolbarContainer: import("styled-components").StyledComponent<"div", any, {
    dark: boolean;
}, never>;
export declare const ToolbarSplitter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ToolbarItemContainerElement: import("styled-components").StyledComponent<"div", any, {
    split: boolean;
    dark: boolean;
}, never>;
