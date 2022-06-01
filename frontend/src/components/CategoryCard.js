import React from 'react';
import {navigate} from 'hookrouter';
import {Box, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

export default function CategoryCard({product}) {
    function handleCategoryOnClicked() {
        /**
         * Navigate to catalog with products of this category
         */

        navigate(`/catalog/${product.slug}/list`)
    }

    return (
        <Grid item md={4}>
            <CardActionArea style={{backgroundColor: "#27282b", height: 300, width: 320, borderRadius: "1.8em"}}
                            onClick={handleCategoryOnClicked}>
                <CardMedia>
                    <Box
                        component="img"
                        sx={{
                            height: 280,
                            width: 280,
                            maxHeight: {xs: 300, md: 220},
                            maxWidth: {xs: 300, md: 220},
                            padding: 1
                        }}
                        alt={`${product.title} poster`}
                        src={product.image}
                    />
                </CardMedia>

                <CardContent>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}} align={"center"} style={{color: "#ededed"}}>
                        {product.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Grid>
    );
}