import React, {useEffect} from 'react';
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import {A, navigate} from "hookrouter";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {useCookies} from "react-cookie";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const cookieAPI = {
        setCookies: (name, value) => setCookie(name, value)
    }
    useEffect(() => {}, [cookies])

    function handleSignOut() {
        removeCookie("access")
        removeCookie("refresh")
        removeCookie("username")
        removeCookie("email")
    }

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
                            {!cookies['refresh'] && <SignInModal cookies={cookieAPI}/>}
                            {!cookies['refresh'] && <SignUpModal cookies={cookieAPI}/>}
                            {cookies['refresh'] &&
                                <Button onClick={() => navigate('/cart')}
                                        startIcon={<ShoppingCartIcon style={{ color: "#7a9cbc", fontSize: "30" }}/>} >
                                    <Typography variant={"h5"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                                        Cart
                                    </Typography>
                                </Button>
                            }
                            {cookies['refresh'] &&
                                <Button onClick={() => handleSignOut()} variant={"contained"}
                                        style={{
                                            marginRight: 15,
                                            borderRadius: 10,
                                            background: "#ae718f",
                                            borderStyle: "solid",
                                            borderWidth: 3,
                                            borderColor: "#664350"
                                        }} size="medium">
                                    <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                                        Sign Out
                                    </Typography>
                                </Button>
                            }
                        </Toolbar>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

export default Header;