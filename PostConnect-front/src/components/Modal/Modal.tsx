import React from 'react'
import ReactDOM from 'react-dom';
import { Dialog } from '@mui/material';

const Modal = ({children, open, handleClose}: any) => {
    return ReactDOM.createPortal(
        <Dialog
            maxWidth={"md"}
            fullWidth={true}
            open={open}
            onClose={handleClose}
        >
            {children}
        </Dialog>
        , document.body)
}

export default Modal
