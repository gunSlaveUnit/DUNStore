import React from 'react';
import {A} from 'hookrouter';
import {Box, Link, Typography} from "@mui/material";

export default function ProductCard(props) {
    return (
        <A href={`/catalog/${props.group}/detail/${props.slug}`} style={{textDecoration: 'none'}}>
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
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {md: 'flex-start'},
                        m: 3,
                        minWidth: {md: 350},
                    }}
                >
                    <Box sx={{width: 1}}>
                        <Typography variant={"h4"} sx={{
                        color: '#222328', fontWeight: 'bold',
                        underline: "none",
                    }}>
                        {props.title}
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
            </Box>
        </A>
    );
}