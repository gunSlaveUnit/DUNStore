import React, {useEffect} from "react";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import * as API from "../API";
import CategoryCard from "../Cards/CategoryCard";
import {Container, Grid, Typography} from "@mui/material";

export default function Home() {
    const [categories, setCategories] = React.useState([]);

    useEffect(() => {
        API.list('categories').then(p => setCategories(p));
    }, []);

    return (
        <div className="Home">
            <Header/>
            <main>
                <article>
                    <Container maxWidth={"md"} sx={{marginTop: 12}}>
                        <Typography variant={"h2"} align={"center"}
                                    gutterBottom color={"whitesmoke"}
                                    sx={{fontWeight: 'bold'}}>Popular categories</Typography>
                        <Grid container spacing={4}>
                            {categories.map(c => <CategoryCard key={c.id} title={c.title} slug={c.slug}/>)}
                        </Grid>
                    </Container>
                </article>
            </main>
            <Footer/>
        </div>
    );
}