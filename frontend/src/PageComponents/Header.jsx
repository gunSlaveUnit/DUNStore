import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {A, navigate} from 'hookrouter';
import DeleteIcon from "@mui/icons-material/Delete";
import * as API from "../API";
import {ShoppingCart} from "@mui/icons-material";
import {useCookies} from "react-cookie";
import {signin} from "../User";

const Header = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tokenAPI = {
        token: () => cookies.token,
        setToken: token => setCookie('token', token),
    };

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
                                sx={{borderRadius: '8px', marginX: 3}}
                                onClick={() => {signin("bruh", "bruh#chew")
                                    .then(t => tokenAPI.setToken(t))}}
                        >Sign In</Button>
                        <Button style={{ borderRadius: '8px',
                                backgroundColor: "#227173"
                            }} variant={"contained"} size={"large"}>
                            Sign Up
                        </Button>
                        <Button startIcon={<ShoppingCart/>} size={"large"}
                                    style={{borderRadius: '8px', color: "#227173"}}
                                    onClick={() => navigate("/cart")}>
                                Cart
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;