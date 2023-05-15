import { DialogActions, DialogContent, DialogTitle, DialogContentText, Button, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import commentService from '../../services/comment.service'

const ModalContentFormNewComment = ({ handleClose, post_id }: any) => {
    const [contentComment, setContentComment] = useState('')
    const navigate = useNavigate()

    const addNewComment = (e: React.FormEvent) => {
        e.preventDefault()
        commentService.addComment({ post_id, content: contentComment }).then((data) => {
            navigate(0)
        })
    }

    return (
        <>
            <DialogTitle>Agregar comentario</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>
                    ¿Qué opinas del post?
                </DialogContentText>
                <Box component='form' onSubmit={(e) => addNewComment(e)} id='NewPostForm'>
                    <TextField
                        id="content"
                        label="Comentario"
                        type="text"
                        fullWidth
                        rows={4}
                        multiline
                        variant="outlined"
                        sx={{ marginTop: 1 }}
                        value={contentComment}
                        onChange={(e) => setContentComment(e.target.value)}
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

export default ModalContentFormNewComment