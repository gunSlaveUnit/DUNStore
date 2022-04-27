import React from "react";
import {CircularProgress} from "@mui/material";

const Loader = () => {
    return (
        <CircularProgress disableShrink style={{color: "#ededed"}}/>
    )
}

export default Loader;