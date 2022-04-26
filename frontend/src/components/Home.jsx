import React, {useEffect} from "react";
import * as API from "../apis/API";
import CategoryCard from "./CategoryCard";
import Loader from "./Loader/Loader";
import {Box, Container, Paper, Typography} from "@mui/material";
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
        <Container style={{marginTop: 50}}>
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
            <Typography variant={"h1"} style={{display: "inline-block", color: "#eceded"}}>
                GURU
            </Typography>
            {loading && <Loader/>}
            {categories.length ? (
                <div>
                    {categories.map(c => <CategoryCard key={c.id} product={c}/>)}
                </div>
            ) : (
                loading ? null : <p>No categories</p>
            )}
        </Container>
    );
}