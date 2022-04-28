import React from 'react';
import {navigate} from 'hookrouter';
import {CardActionArea, CardContent, Grid, Typography} from "@mui/material";

export default function CategoryCard({product}) {
    function handleCategoryOnClicked() {
        navigate(`/catalog/${product.slug}/list`)
    }

    return (
        <Grid item md={4}>
            <CardActionArea style={{backgroundColor: "#27282b", height: 300, width: 320, borderRadius: "1.8em"}}
                            onClick={handleCategoryOnClicked}>
                <CardContent>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}} align={"center"} style={{color: "#eceded"}}>
                        {product.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Grid>
    );
}