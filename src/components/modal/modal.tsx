import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Overlay from '../overlay/overlay';

type ModalProps = {
  children: ReactNode;
}


export default function Modal({children}: ModalProps) {
  const modalElement = document.getElementById('modal') as HTMLElement;

  return createPortal((
    <>
      <div>
        {children}
      </div>
      <Overlay/>
    </>
  ), modalElement);
}
