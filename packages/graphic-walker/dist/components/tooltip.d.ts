import React from "react";
import type { IDarkMode } from "../interfaces";
export interface TooltipProps {
    children: JSX.Element;
    content: string | JSX.Element | JSX.Element[];
    /** @default 250 */
    showDelay?: number;
    /** @default 250 */
    hideDelay?: number;
    /** @default 3_000 */
    autoHide?: number;
    darkModePreference: IDarkMode;
}
declare const Tooltip: React.NamedExoticComponent<TooltipProps>;
export default Tooltip;
