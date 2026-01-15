import React from 'react';
interface PaginationProps {
    total: number;
    onPrev: () => void;
    onNext: () => void;
    onPageChange?: (index: number) => void;
    pageIndex: number;
    pageSize?: number;
    extendPageNumber?: number;
}
export default function Pagination(props: PaginationProps): React.JSX.Element | null;
export {};
