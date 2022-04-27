import React, {useEffect} from "react";
import * as API from "../apis/API";
import CategoryCard from "./CategoryCard";
import Loader from "./Loader/Loader";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import {A} from "hookrouter";

export default function Home() {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        API.list('categories')
            .then(p => setCategories(p))
            .then(_ => setLoading(false));
    }, []);

    return (
        <Container sx={{marginTop: 11}} fixed>
            <Container maxWidth={"sm"} style={{alignSelf: "center"}}>
                <Box
                    component="img"
                    sx={{
                        height: 120,
                        width: 120,
                        maxHeight: {xs: 120, md: 120},
                        maxWidth: {xs: 120, md: 120},
                    }}
                    alt="GURU Store Logo"
                    src="../logo.png"
                />
                <Typography variant={"h1"} sx={{fontWeight: 'bold'}} ml={3} align={"center"} gutterBottom
                            style={{display: "inline-block", color: "#eceded"}} gutterBottom>GURU</Typography>
                <Typography variant={"h5"} align={"center"}
                            style={{color: "#eceded"}} gutterBottom>Computer store where you can pick up components for
                    your needs and tasks</Typography>
            </Container>

            {loading && <Loader/>}

            {categories.length ? (
                <Container maxWidth={"lg"} style={{alignItems: "center"}}>
                    <Grid container mt={6}
                          align="center" justify="center" >
                        {categories.map(c => <CategoryCard key={c.id} product={c}/>)}
                    </Grid>
                </Container>
            ) : (
                loading ? null : <p>No categories</p>
            )}
        </Container>

    );
}