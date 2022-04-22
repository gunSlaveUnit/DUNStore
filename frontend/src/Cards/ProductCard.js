import React from 'react';
import {A, navigate} from 'hookrouter';
import {Box, Button, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {add} from "../CartAPI";
import {useCookies} from "react-cookie";

export default function ProductCard(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tokenAPI = {
        token: () => cookies.token,
        setToken: token => setCookie('token', token),
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                bgcolor: 'whitesmoke',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                marginY: 5
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: {md: 'flex-start'},
                    m: 3,
                    minWidth: {md: 350},
                }}>
                <Box sx={{width: 1}}>
                    <Typography variant={"h4"} sx={{
                        color: '#222328', fontWeight: 'bold',
                        underline: "none",
                    }}>
                        <A href={`/catalog/${props.group}/detail/${props.slug}`} style={{textDecoration: 'none'}}>
                            {props.title}
                        </A>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mt: 1.5,
                        p: 0.5,
                        borderRadius: '5px',
                        color: 'primary.main',
                        fontWeight: 'medium',
                        display: 'flex',
                        fontSize: 12,
                        alignItems: 'center',
                        '& svg': {
                            fontSize: 21,
                            mr: 0.5,
                        },
                    }}
                >
                </Box>
            </Box>
            <Button startIcon={<AddShoppingCartIcon/>} size={"large"}
                    style={{borderRadius: '8px', display: "flex", marginRight: "auto"}}
                    onClick={() => {
                        add(tokenAPI.token(), props.group, props.slug).then(() => {})
                    }}>
                Add to a cart
            </Button>
        </Box>
    );
}