import React, { ReactNode } from "react";
import { ToolbarButtonItem } from "./toolbar-button";
import { ToolbarToggleButtonItem } from "./toolbar-toggle-button";
import { ToolbarSelectButtonItem } from "./toolbar-select-button";
import { useHandlers } from "./components";
import { ToolbarProps } from ".";
export interface IToolbarItem {
    key: string;
    icon: (props: React.ComponentProps<'svg'> & {
        title?: string;
        titleId?: string;
    }) => JSX.Element;
    label: string;
    /** @default false */
    disabled?: boolean;
    menu?: ToolbarProps;
    form?: JSX.Element;
    styles?: Partial<Pick<NonNullable<ToolbarProps['styles']>, 'item' | 'icon' | 'splitIcon'>>;
}
export declare const ToolbarItemSplitter = "-";
export type ToolbarItemProps = (ToolbarButtonItem | ToolbarToggleButtonItem | ToolbarSelectButtonItem | typeof ToolbarItemSplitter);
export interface IToolbarProps<P extends Exclude<ToolbarItemProps, typeof ToolbarItemSplitter> = Exclude<ToolbarItemProps, typeof ToolbarItemSplitter>> {
    item: P;
    darkModePreference: NonNullable<ToolbarProps['darkModePreference']>;
    styles?: ToolbarProps['styles'];
    openedKey: string | null;
    setOpenedKey: (key: string | null) => void;
    renderSlot: (node: ReactNode) => void;
}
export declare const ToolbarItemContainer: React.NamedExoticComponent<{
    darkModePreference: NonNullable<ToolbarProps['darkModePreference']>;
    props: IToolbarProps;
    handlers: ReturnType<typeof useHandlers> | null;
    children: unknown;
} & React.HTMLAttributes<HTMLDivElement>>;
declare const ToolbarItem: React.NamedExoticComponent<{
    item: ToolbarItemProps;
    darkModePreference: NonNullable<ToolbarProps['darkModePreference']>;
    styles?: ToolbarProps['styles'];
    openedKey: string | null;
    setOpenedKey: (key: string | null) => void;
    renderSlot: (node: ReactNode) => void;
}>;
export default ToolbarItem;
