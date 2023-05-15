import React from "react";
import { Card, CardContent, Typography } from "@mui/material";


const CommentCard = ({ comment }: any) => {
    return (
        <Card sx={{ marginTop: 3 }}>
            <CardContent>
                <Typography >
                    {comment.content}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {comment.date.toString().replace('T', ' ')}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CommentCard