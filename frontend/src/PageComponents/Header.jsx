import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {A} from 'hookrouter';

const Header = () => {
    const [token, setToken] = React.useState(null);
    const tokenAPI = {token, setToken};

    return (
        <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Container fixed>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Typography variant={"h3"} color={"whitesmoke"} sx={{
                                fontWeight: 'bold',
                                underline: "none",
                            }}
                    ><A href={'/'} style={{textDecoration: 'none', color:"whitesmoke"}}>GURU</A></Typography>
                    <Box mr={3}>
                        <Button color={"inherit"} variant={"outlined"} mr={1} size={"large"}
                                sx={{borderRadius: '8px', marginX: 3}}>Sign In</Button>
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