import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const PostsCard = ({ post }: any) => {

    return (
        <Card sx={{ marginTop: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {post.date.toString().replace('T', ' ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${post.id}`}>
                    <Button size="small" variant="outlined" >Abrir</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default PostsCard