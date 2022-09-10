import React, { useState } from "react";
import "./Modal.css"
import { useUserAccount } from "../Context/UserAccountContext";

export function Modal() {

    const { removeAddress } = useUserAccount()

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Sterge adresa
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2 className="confirmation-message">Esti sigur ca vrei sa stergi adresa?</h2>
                        <button onClick={removeAddress} className="confirmation-btn">
                            DA
                        </button>
                        <button className="close-modal" onClick={toggleModal}>
                            INCHIDE
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}