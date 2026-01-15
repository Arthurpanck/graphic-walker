import React, { HTMLAttributes } from "react";
export declare const ShadowDomContext: React.Context<{
    root: ShadowRoot | null;
}>;
interface IShadowDomProps extends HTMLAttributes<HTMLDivElement> {
    onMount?: (shadowRoot: ShadowRoot) => void;
    onUnmount?: () => void;
}
export declare const ShadowDom: React.FC<IShadowDomProps>;
export {};
