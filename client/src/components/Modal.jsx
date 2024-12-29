import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='bg-black/50 z-50 max-h-screen overflow-hidden fixed top-0 left-0 w-full flex items-center justify-center mb-5'>
            {children}
        </div>,
        document.getElementById("portal")
    );
}

export default Modal;
