import './style.css';

function Modal({ children, title}) {
    return (
        <>
        <div className="overlay">
        </div>
        <div className="dialog">
            <h2>{title}</h2>
            {children}
        </div>
        </>
    );
}

export default Modal;