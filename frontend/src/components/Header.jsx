import React from 'react';
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import {A} from "hookrouter";
import {AppBar, Box, Button, ButtonGroup, Container, Toolbar, Typography} from "@mui/material";

const Header = ({tokenAPI}) => {
    return (
        <header>
            <AppBar style={{backgroundColor: "#18181c"}} position={"fixed"}>
                <Container fixed>
                    <Toolbar sx={{justifyContent: "space-between"}}>
                        <Toolbar>
                            <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 120,
                            }}
                            alt="GURU Store Logo"
                            src="../logo.png"
                        />
                        <Typography variant={"h5"} style={{display: "inline-block"}} ml={1}>
                            <A href={'/'} style={{textDecoration: 'none', color: "#6c6964"}}>Home</A>
                        </Typography>
                        </Toolbar>

                        <Toolbar>
                            <Button style={{color: "#eceded"}}>
                                <Typography variant={"h5"} textTransform={"capitalize"}>
                                    Stores
                                </Typography>
                            </Button>
                            <Button style={{color: "#eceded"}}>
                                <Typography variant={"h5"} textTransform={"capitalize"}>
                                    Contact
                                </Typography>
                            </Button>
                            <Button style={{color: "#eceded"}}>
                                <Typography variant={"h5"} textTransform={"capitalize"}>
                                    About
                                </Typography>
                            </Button>
                            <SignInModal tokenAPI={tokenAPI}/>
                            <SignUpModal tokenAPI={tokenAPI}/>
                        </Toolbar>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

export default Header;