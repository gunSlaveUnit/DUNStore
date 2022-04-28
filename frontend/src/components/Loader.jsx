import React from "react";
import {CircularProgress, Stack} from "@mui/material";

const Loader = () => {
    return (
        <Stack alignItems="center" mt={7}>
            <CircularProgress size={"4rem"} disableShrink
                              style={{color: "#ae718f"}}/>
        </Stack>
    )
}

export default Loader;