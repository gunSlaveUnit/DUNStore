import React, {useEffect} from 'react';
import {A, navigate} from 'hookrouter';
import {useCookies} from "react-cookie";
import {
    ButtonBase,
    Link,
    Grid,
    Stack,
    styled,
    Typography, Card, Icon, ButtonGroup, Button
} from "@mui/material";
import * as CartAPI from "../apis/CartAPI";
import DeleteIcon from "@mui/icons-material/Delete";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function CartProduct(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [amount, setAmount] = React.useState(props.card.amount)

    useEffect(() => {
        handleUpdate()
    }, [amount])

    function handleProductCardTitleClicked() {
        navigate(`/catalog/${props.group}/detail/${props.card.slug}`)
    }

    function handleUpdate() {
        CartAPI.update(cookies["access"], props.group, props.card.slug, amount, props.card.id)
            .then(_ => {
            })
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
                        <Img alt={`${props.card.info.title} logo`} src={props.card.info.image}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Link onClick={() => handleProductCardTitleClicked()}>
                                <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}}
                                            style={{color: "#eceded"}}
                                            component="div">
                                    {props.card.info.title}
                                </Typography>
                            </Link>
                            <Typography variant="body2" style={{color: "#6c6964"}} gutterBottom>
                                ID: 1030114
                            </Typography>
                            {Object.keys(props.card.info).map(f => {
                                if (!avoidedServiceFields.includes(f))
                                    return (
                                        <Typography variant="body1" key={f} style={{color: "#eceded"}}>
                                            {f.charAt(0).toUpperCase() + f.slice(1).replace(/_/g, " ") + ": " + props.card.info[f]}
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
                                {props.card.info.price}&#8381;
                            </Typography>

                            <Button variant={"contained"} startIcon={<DeleteIcon/>} onClick={() => {
                                CartAPI.del(cookies["access"], props.card.id)
                                    .then(_ => {
                                    })
                            }}
                                    style={{
                                        borderRadius: 10,
                                        background: "#ae718f",
                                        borderStyle: "solid",
                                        borderWidth: 3,
                                        borderColor: "#664350",
                                    }} size={"small"}>
                                <Typography variant={"small"} textTransform={"capitalize"}>
                                    Remove
                                </Typography>
                            </Button>

                            <ButtonGroup style={{marginTop: 100}}>
                                <Icon sx={{backgroundColor: "#eceded", fontSize: 50, borderRadius: 15}}>
                                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                                        {amount}
                                    </Typography>
                                </Icon>
                                <Icon sx={{color: "#7a9cbc", fontSize: 40}} onClick={() => {
                                    setAmount(amount + 1);
                                    handleUpdate()
                                }}>add_circle</Icon>
                                <Icon sx={{color: "#7a9cbc", fontSize: 40}} onClick={() => {
                                    setAmount(amount - 1);
                                    handleUpdate()
                                }}>remove_circle</Icon>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}