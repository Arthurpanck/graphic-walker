import React from 'react';
interface ModalProps {
    onClose?: () => void;
    show?: boolean;
    title?: string;
    containerStyle?: React.CSSProperties;
    children?: React.ReactNode | Iterable<React.ReactNode>;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
