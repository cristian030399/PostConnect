import React from 'react'
import Button from '@mui/material/Button';

const ButtonNewPost = ({setModalOpen}: any) => {
    return (
        <Button variant="contained" onClick={setModalOpen}>Nuevo Post</Button>
    )
}

export default ButtonNewPost