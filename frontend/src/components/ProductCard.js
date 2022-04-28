import React, {useEffect} from 'react';
import {A, navigate} from 'hookrouter';
import {add} from "../apis/CartAPI";
import {useCookies} from "react-cookie";
import {Button, ButtonBase, CardActionArea, CardContent, Grid, Paper, Stack, styled, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ProductCard(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tokenAPI = {
        token: () => cookies.token,
        setToken: token => setCookie('token', token),
    };

    const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published", "price"];

    function handleProductOnClicked() {
        /* Move to product detail page */
        navigate(`/catalog/${props.group}/detail/${props.card.slug}`)
    }

    return (
        <CardActionArea
            style={{
                p: 2,
                flexGrow: 1,
                backgroundColor: "#27282b",
                height: 300,
                width: 800,
                padding: 10,
                borderRadius: "1.8em"
            }} onClick={handleProductOnClicked}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 256, height: 256}}>
                        <Img alt="complex" src="/static/images/grid/complex.jpg"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}} style={{color: "#eceded"}}
                                        component="div">
                                {props.card.title}
                            </Typography>
                            <Typography variant="body2" style={{color: "#6c6964"}} gutterBottom>
                                ID: 1030114
                            </Typography>
                            {Object.keys(props.card).map(f => {
                                if (!avoidedServiceFields.includes(f))
                                    return (
                                        <Typography variant="body1" key={f} style={{color: "#eceded"}}>
                                            {f.charAt(0).toUpperCase() + f.slice(1).replace(/_/g, " ") + ": " + props.card[f]}
                                        </Typography>
                                    )
                            })}
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{color: "#6c6964"}}>
                                Available in
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}} style={{color: "#eceded"}}
                                        component="div" align={"right"}>
                                {props.card.price}&#8381;
                            </Typography>
                            <Button onClick={() => {
                                add(tokenAPI.token(), props.group, props.card.slug, 1).then(() => {
                                })
                            }} variant={"contained"} startIcon={<AddShoppingCartIcon/>}
                                    style={{
                                        borderRadius: 10,
                                        background: "#7a9cbc",
                                        borderStyle: "solid",
                                        borderWidth: 3,
                                        borderColor: "#435567",
                                    }} size={"small"}>
                                <Typography variant={"small"} textTransform={"capitalize"}>
                                    Add to cart
                                </Typography>
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </CardActionArea>
    );
}