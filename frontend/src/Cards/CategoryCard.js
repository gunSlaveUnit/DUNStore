import React from 'react';
import Box from '@mui/material/Box';
import {A} from 'hookrouter';
import {Card, CardContent, Grid, Typography} from "@mui/material";

export default function CategoryCard(props) {
    return (
        <Grid item key={props.slug} xs={12} sm={6} md={4} minHeight={"md"}>
            <A href={`/catalog/${props.slug}/list`} style={{textDecoration: 'none'}}>
                <Card sx={{
                    color: 'whitesmoke',
                    fontSize: 30,
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                }}>
                    <CardContent>
                        <Box sx={{width: 1}}>
                            <Typography variant={"h4"} sx={{
                                fontWeight: 'bold',
                                underline: "none",
                                align: 'center',
                                color: "#222328",
                            }}
                            >{props.title}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </A>
        </Grid>
    );
}