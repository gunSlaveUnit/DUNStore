import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";

const Header = () => {
    const [token, setToken] = React.useState(null);
    const tokenAPI = {token, setToken};

    return (
        <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Container fixed>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Typography variant="h3" sx={{fontWeight: 'bold'}}>GURU</Typography>
                    <Box mr={3}>
                        <Button color={"inherit"} variant={"outlined"} mr={1} size={"large"} sx={{borderRadius: '8px'}}>Sign In</Button>
                        <Button style={{ borderRadius: '8px',
                                backgroundColor: "#227173"
                            }} variant={"contained"} size={"large"}>
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;