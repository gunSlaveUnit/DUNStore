import React from 'react';
import {Container, Typography} from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Container gutterBottom>
                <Typography variant={"h6"} align={"center"} color={"whitesmoke"}>
                    &copy; GURU {new Date().getFullYear()}. All rights reserved
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;