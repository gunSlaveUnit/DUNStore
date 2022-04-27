import React from 'react';
import {Typography} from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Typography variant={"h6"} style={{color: "#ededed"}} align={"center"} mt={5}>
                &copy; GURU {new Date().getFullYear()}. All rights reserved
            </Typography>
        </footer>
    );
}

export default Footer;