import React from "react";

export default function Modal ({ children, onClose }) {
    return <>
        <div className="modal">
            <div className="modal-contenido">
                <button className="btn" onClick={onClose}>❌</button>
                {children}
            </div>
        </div>
    </>
}