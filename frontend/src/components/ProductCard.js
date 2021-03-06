import React from 'react';
import {navigate} from 'hookrouter';
import {useCookies} from "react-cookie";
import {
    ButtonBase,
    Link,
    Grid,
    Stack,
    styled,
    Typography, Card
} from "@mui/material";
import Delete from "./Delete";
import Update from "./Update";
import AddItemCardConfirmModal from "./AddItemCardConfirmModal";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ProductCard(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    function handleProductCardTitleClicked() {
        /**
         * Navigate to detail product page
         */

        navigate(`/catalog/${props.group}/detail/${props.card.slug}`)
    }

    const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published", "price", "image"];

    return (
        <Card
            style={{
                p: 2,
                flexGrow: 1,
                backgroundColor: "#27282b",
                height: 260,
                width: 750,
                padding: 30,
                marginBottom: 30,
                borderRadius: "1.8em"
            }}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 256, height: 256}}>
                        <Img alt={`${props.card.title} logo`} src={props.card.image}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Link onClick={() => handleProductCardTitleClicked()} style={{cursor: "pointer"}}>
                                <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}}
                                            style={{color: "#eceded"}}
                                            component="div">
                                    {props.card.title}
                                </Typography>
                            </Link>
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

                            {cookies["access"] &&
                                <AddItemCardConfirmModal categorySlug={props.group} productSlug={props.card.slug}/>
                            }

                            {cookies["is_superuser"] === "true" && <Update what={props.group} slug={props.card.slug}/>}
                            {cookies["is_superuser"] === "true" && <Delete what={props.group} product={props.card}/>}
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}