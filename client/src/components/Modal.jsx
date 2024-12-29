import ReactDOM from 'react-dom/client'

function Modal({ children }) {
    return ReactDOM?.createPortal(
        <div>
            {children}
        </div>,
        document.getElementById("portal")
    )
}

export default Modal