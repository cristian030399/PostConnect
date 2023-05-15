import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import postService from "../../services/post.service";
import commentService from "../../services/comment.service";
import { Container, Divider, Typography, Button } from "@mui/material";
import { Post } from "../../types/Post.type";
import CommentCard from "../../components/Comment/CommentCard";
import { Comment } from "../../types/Comment.type";
import Modal from "../../components/Modal/Modal";
import ModalContentFormNewComment from "../../components/Comment/ModalContentFormNewComment";

const PostPage = () => {
    const [post, setPost] = useState<Post>()
    const [comments, setCommenst] = useState<Comment[]>([])
    const [modalOpen, setModalOpen] = useState(false)

    const params = useParams()

    const handleClickOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    useEffect(() => {
        const id = params.id
        postService.getPost(id as string).then((data) => {
            setPost(data)
        })
        commentService.getComments(id as string).then((data) => {
            setCommenst(data)
        })

    }, [])
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" display="block">
                {post?.title}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {post?.date.toString().replace('T', ' ')}
            </Typography>
            <Typography  >
                {post?.content}
            </Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Typography variant="h5" display="block">
                Comentarios
            </Typography>
            <Button variant="contained" onClick={handleClickOpenModal}>Agregar comentario</Button>
            {comments.map((comment) => {
                return (
                    <CommentCard comment={comment} key={comment?.id}></CommentCard>
                )
            })}
            <Modal open={modalOpen} handleClose={handleCloseModal}>
                <ModalContentFormNewComment handleClose={handleCloseModal} post_id={params.id}></ModalContentFormNewComment>
            </Modal>
        </Container >
    )
}

export default PostPage