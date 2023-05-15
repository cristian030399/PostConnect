import { Container, Card, CardContent, Typography, CardActions } from "@mui/material";
import Divider from '@mui/material/Divider';
import React, { useState, useEffect } from "react";
import postService from "../../services/post.service";
import PostsCard from "../../components/Posts/PostsCard";
import ButtonNewPost from "../../components/Posts/ButtonNewPost";
import Modal from "../../components/Modal/Modal";
import ModalContentFormNewPost from "../../components/Posts/ModalContentFormNewPost";


const HomePage: React.FC = () => {
    const [posts, setPosts] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    const handleClickOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        postService.getPosts().then(data => {
            setPosts(data)
        })
    }, [])

    return (
        <Container maxWidth="sm">
            <h2>Todos los Post</h2>
            <ButtonNewPost setModalOpen={handleClickOpenModal} ></ButtonNewPost>
            <Divider sx={{ marginTop: 2 }} />
            {posts.map((post: any) => {
                return (
                    <PostsCard post={post} key={post.id}></PostsCard>
                )
            })}
            <Modal open={modalOpen} handleClose={handleCloseModal}>
                <ModalContentFormNewPost handleClose={handleCloseModal}></ModalContentFormNewPost>
            </Modal>
        </Container >
    )
}

export default HomePage