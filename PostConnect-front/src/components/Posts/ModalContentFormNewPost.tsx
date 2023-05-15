import { DialogActions, DialogContent, DialogTitle, DialogContentText, Button, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import postService from '../../services/post.service'
import { useNavigate } from 'react-router'

const ModalContentFormNewPost = ({ handleClose }: any) => {
    const [titlePost, setTitlePost] = useState('')
    const [contentPost, setContentPost] = useState('')
    const navigate = useNavigate()

    const addNewPost = (e: React.FormEvent) => {
        e.preventDefault()
        postService.addPost({ title: titlePost, content: contentPost }).then((data) => {
            navigate(0)
        })
    }

    return (
        <>
            <DialogTitle>Agregar nuevo Post</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>
                    ¿Qué quieres publicar?
                </DialogContentText>
                <Box component='form' onSubmit={(e) => addNewPost(e)} id='NewPostForm'>
                    <TextField
                        id="title"
                        label="Título del post"
                        type="text"
                        fullWidth
                        variant="outlined"
                        sx={{ marginTop: 1 }}
                        value={titlePost}
                        onChange={(e) => setTitlePost(e.target.value)}
                    />
                    <TextField
                        id="content"
                        label="Contenido del post"
                        type="text"
                        fullWidth
                        rows={4}
                        multiline
                        variant="outlined"
                        sx={{ marginTop: 1 }}
                        value={contentPost}
                        onChange={(e) => setContentPost(e.target.value)}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' form='NewPostForm' variant='contained'>Agregar</Button>
            </DialogActions>
        </>
    )
}

export default ModalContentFormNewPost