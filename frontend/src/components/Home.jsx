import React, {useEffect} from "react";
import * as API from "../apis/API";
import CategoryCard from "./CategoryCard";
import Loader from "./Loader";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import {A} from "hookrouter";

export default function Home() {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        API.list('categories')
            .then(p => setCategories(p))
            .then(_ => setLoading(false))
    }, []);

    return (
        <Container sx={{marginTop: 11}} fixed>
            <Container maxWidth={"sm"} style={{alignSelf: "center"}}>
                <Box
                    component="img"
                    sx={{
                        height: 210,
                        width: 520,
                    }}
                    alt="GURU Store Logo"
                    src="../logo.png"
                />
                <Typography variant={"h5"} align={"center"} mt={2}
                            style={{color: "#eceded"}} gutterBottom>Computer store where you can pick up components for
                    your needs and tasks</Typography>
            </Container>

            {loading && <Loader/>}

            {categories.length ? (
                <Container style={{alignItems: "center"}}>
                    <Grid container mt={1} spacing={3}
                          align="center" justify="center">
                        {categories.map(c => <CategoryCard key={c.id} product={c}/>)}
                    </Grid>
                </Container>
            ) : (
                loading ? null :
                    <Typography variant={"h3"}
                                align={"center"}
                                mt={7} style={{color: "#7a9cbc"}}
                                gutterBottom
                    >
                        No categories
                    </Typography>
            )}
        </Container>

    );
}