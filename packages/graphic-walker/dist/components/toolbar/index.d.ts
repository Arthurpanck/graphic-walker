import React, { CSSProperties } from "react";
import type { IDarkMode } from "../../interfaces";
import { ToolbarItemProps } from "./toolbar-item";
export interface ToolbarProps {
    darkModePreference?: IDarkMode;
    items: ToolbarItemProps[];
    styles?: Partial<{
        root: CSSProperties & Record<string, string>;
        container: CSSProperties & Record<string, string>;
        item: CSSProperties & Record<string, string>;
        icon: CSSProperties & Record<string, string>;
        splitIcon: CSSProperties & Record<string, string>;
    }>;
}
declare const Toolbar: React.NamedExoticComponent<ToolbarProps>;
export default Toolbar;
export type { ToolbarItemProps };
