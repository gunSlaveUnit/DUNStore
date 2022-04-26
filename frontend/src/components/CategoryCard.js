import React from 'react';
import {A, navigate} from 'hookrouter';
import {CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";

export default function CategoryCard({product}) {
    return (
        <Grid item md={6}>
            <CardActionArea style={{backgroundColor: "#27282b", height: 320, width: 400, borderRadius: "1.8em"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.poster}
                    alt={`${product.title} poster`}
                />
                <CardContent>
                    <A href={`/catalog/${product.slug}/list`} style={{textDecoration: 'none'}}>
                        <Typography variant="h4" sx={{fontWeight: 'bold'}} align={"center"} style={{color: "#eceded"}}>
                            {product.title}
                        </Typography>
                    </A>
                </CardContent>
            </CardActionArea>
        </Grid>
    );
}