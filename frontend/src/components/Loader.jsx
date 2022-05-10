import React from "react";
import {CircularProgress, Stack, Typography} from "@mui/material";

const Loader = () => {
    return (
        <Stack alignItems="center" mt={7}>
            <CircularProgress size={"4rem"} disableShrink
                              style={{color: "#7a9cbc"}}/>
            <Typography variant={"h5"}
                                align={"center"}
                                mt={1} style={{color: "#7a9cbc"}}
                                gutterBottom
                    >
                        Loading ...
                    </Typography>
        </Stack>
    )
}

export default Loader;