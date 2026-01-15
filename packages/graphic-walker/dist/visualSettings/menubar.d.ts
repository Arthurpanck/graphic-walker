import React from 'react';
export declare const MenubarContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ButtonWithShortcutProps {
    label: string;
    shortcut: string;
    disabled: boolean;
    handler: () => void;
    icon?: JSX.Element;
}
export declare const ButtonWithShortcut: React.FC<ButtonWithShortcutProps>;
declare const _default: React.FunctionComponent<{}>;
export default _default;
