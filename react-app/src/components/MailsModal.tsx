import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './MailsModal.css'

interface IProps {
    show: boolean;
    handleClose: () => void;
    modalInput: string;
}

export const MailsModal = ({ show, handleClose, modalInput }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
                <Modal.Body><i className="fa fa-check send-mail" aria-hidden="true">
                </i>{modalInput}</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
