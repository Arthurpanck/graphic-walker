import React, { ReactNode } from "react";
import type { IDarkMode } from "../interfaces";
export interface CalloutProps {
    target: string;
    children: ReactNode;
    darkModePreference?: IDarkMode;
}
declare const Callout: React.NamedExoticComponent<CalloutProps>;
export default Callout;
