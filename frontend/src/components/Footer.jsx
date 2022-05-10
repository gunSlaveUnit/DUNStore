import React from 'react';
import {Typography} from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Typography variant={"h6"}
                        style={{color: "#ededed", display: "flex", flexDirection: "column"}}
                        align={"center"} mt={7} bottom={0}>
                &copy; GURU {new Date().getFullYear()}. All rights reserved
            </Typography>
        </footer>
    );
}

export default Footer;