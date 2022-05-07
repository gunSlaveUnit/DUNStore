import {
    Box,
    Button, Card, CardContent, CardMedia,
    Container,
    FormControl, FormHelperText,
    Grid,
    InputLabel, MenuItem,
    Select, Stack,
    styled,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';
import * as OrderAPI from "../apis/OrderAPI";
import {useCookies} from "react-cookie";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#ae718f',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ae718f',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ae718f',
        },
        '&:hover fieldset': {
            borderColor: '#ae718f',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ae718f',
        },
    },
});

const CardTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#27282b',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#27282b',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#27282b',
        },
        '&:hover fieldset': {
            borderColor: '#27282b',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#27282b',
        },
    },
});

export default function Order() {
    const [obtainWayValue, setObtainWayValue] = React.useState(0);
    const [paymentMethodValue, setPaymentMethodValue] = React.useState(0);
    const [pointIssue, setPointIssue] = React.useState('');
    const [cookies, setCookie, removeCookie] = useCookies();
    const [contact, setContact] = React.useState({});
    const [address, setAddress] = React.useState({});
    const [isPaid, setIsPaid] = React.useState(false);

    useEffect(() => {}, [contact, address, isPaid]);

    const handleChangeObtainWay = (event, newValue) => {
        setObtainWayValue(newValue);
    };

    const handleChangePaymentMethod = (event, newValue) => {
        setPaymentMethodValue(newValue);
    };

    const handleChangepointIssue = (event) => {
        setPointIssue(event.target.value);
    };

    const handleDeliveryAddress = () => {
        let body = {}
        body["city"] = document.getElementById("city").value
        body["street"] = document.getElementById("street").value
        body["house"] = document.getElementById("house").value

        let building = document.getElementById("building").value
        if (building !== '')
            body["building"] = building

        let frame = document.getElementById("frame").value
        if (frame !== '')
            body["frame"] = frame

        let entrance = document.getElementById("entrance").value
        if (entrance !== '')
            body["entrance"] = entrance

        let floor = document.getElementById("floor").value
        if (floor !== '')
            body["floor"] = floor

        OrderAPI.create("addresses", body, cookies["access"])
            .then(r => {
                setAddress(r)
            })
    }

    const handleContactData = () => {
        let body = {}
        body["name"] = document.getElementById("name").value
        body["surname"] = document.getElementById("surname").value
        body["phone"] = document.getElementById("phone").value

        let altPhone = document.getElementById("alt_phone").value
        if (altPhone !== '')
            body["alt_phone"] = altPhone

        setContact(body)
    }

    const handlePaymentMethod = () => {
        let cardPaymentInfo = {
            "cardNumber": document.getElementById("cardNumber").value,
            "validityMonth": document.getElementById("validityMonth").value,
            "validityYear": document.getElementById("validityYear").value,
            "cvvcvc": document.getElementById("cvvcvc").value,
        }

        OrderAPI.pay(cardPaymentInfo, cookies["access"])
            .then(r => setIsPaid(r))
    }

    const handleOrderConfirm = () => {
        //handleContactData()
        //handleDeliveryAddress()
        if (paymentMethodValue === 1)
            handlePaymentMethod()
    }

    return (
        <Container sx={{marginTop: 11}} fixed>
            <div className={"ReceiverSection"}>
                <Typography variant={"h4"}
                            align={"left"}
                            mt={7} style={{color: "#7a9cbc"}}>
                    1. Contact details
                </Typography>

                <Typography variant={"h6"}
                            align={"left"}
                            style={{color: "#7a9cbc"}}
                            gutterBottom>
                    Receiver
                </Typography>

                <Box sx={{width: '50%'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={"auto"}>
                            <CssTextField id={"name"} type={"text"}
                                          label={"Name"}
                                          required
                                          sx={{
                                              label: {color: '#ededed'},
                                              input: {color: '#ededed'},
                                              minWidth: "50%"
                                          }} margin={"dense"}/>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <CssTextField id={"surname"} type={"text"}
                                          label={"Surname"}
                                          required
                                          sx={{
                                              label: {color: '#ededed'},
                                              input: {color: '#ededed'},
                                              minWidth: "50%"
                                          }} margin={"dense"}/>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <CssTextField id={"phone"} type={"tel"}
                                          pattern={""}
                                          label={"Phone number"}
                                          required
                                          sx={{
                                              label: {color: '#ededed'},
                                              input: {color: '#ededed'},
                                              minWidth: "50%"
                                          }} margin={"dense"}/>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <CssTextField id={"alt_phone"} type={"tel"}
                                          pattern={""}
                                          label={"Phone number if we don't get through"}
                                          sx={{
                                              label: {color: '#ededed'},
                                              input: {color: '#ededed'},
                                              minWidth: "50%"
                                          }} margin={"dense"}/>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <div className={"ObtainSection"}>
                <Typography variant={"h4"}
                            align={"left"}
                            mt={7} style={{color: "#7a9cbc"}}
                            gutterBottom>
                    2. How to obtain
                </Typography>

                <Box sx={{width: '50%'}}>
                    <Tabs value={obtainWayValue} onChange={handleChangeObtainWay} aria-label="icon label tabs example"
                          gutterBottom>
                        <Tab icon={<LocationOnIcon/>} label="Pickup" style={{color: "#ededed"}}/>
                        <Tab icon={<LocalShippingIcon/>} label="Delivery" style={{color: "#ededed"}}/>
                    </Tabs>
                </Box>

                {obtainWayValue === 0 &&
                    <Box sx={{width: '50%'}} mt={3}>
                        <FormControl required sx={{m: 1, minWidth: "50%"}}>
                            <InputLabel id="demo-simple-select-required-label"
                                        style={{color: "#ededed", borderColor: "#ededed"}}>Age</InputLabel>
                            <Select style={{color: "#ededed", borderColor: "#ededed"}}
                                    sx={{label: {color: '#ededed'}, input: {color: '#ededed'}}}
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={pointIssue}
                                    label="Point of issue *"
                                    onChange={handleChangepointIssue}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText style={{color: "#ededed"}}>Required</FormHelperText>
                        </FormControl>
                    </Box>
                }

                {obtainWayValue === 1 &&
                    <Box sx={{width: '50%'}} mt={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={"auto"}>
                                <CssTextField id={"city"} type={"text"}
                                              label={"City"}
                                              required
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={"auto"}>
                                <CssTextField id={"street"} type={"text"}
                                              label={"Street"}
                                              required
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CssTextField id={"house"} type={"text"}
                                              label={"House"}
                                              required
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CssTextField id={"building"} type={"text"}
                                              label={"Building"}
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CssTextField id={"frame"} type={"text"}
                                              label={"Frame"}
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CssTextField id={"entrance"} type={"text"}
                                              label={"Entrance"}
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CssTextField id={"floor"} type={"text"}
                                              label={"Floor"}
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CssTextField id={"flat"} type={"text"}
                                              label={"Flat"}
                                              sx={{
                                                  label: {color: '#ededed'},
                                                  input: {color: '#ededed'},
                                              }} margin={"dense"}/>
                            </Grid>
                        </Grid>
                    </Box>
                }
            </div>

            <div className={"PaymentMethod"}>
                <Typography variant={"h4"}
                            align={"left"}
                            mt={7} style={{color: "#7a9cbc"}}
                            gutterBottom>
                    3. Confirmation and payment
                </Typography>

                <Tabs value={paymentMethodValue} onChange={handleChangePaymentMethod}
                      aria-label="icon label tabs example"
                      gutterBottom>
                    <Tab icon={<PaidIcon/>} label="Cash or card upon receipt" style={{color: "#ededed"}}/>
                    <Tab icon={<CreditCardIcon/>} label="Bank card online" style={{color: "#ededed"}}/>
                </Tabs>

                {paymentMethodValue === 0 &&
                    <React.Fragment/>
                }

                {paymentMethodValue === 1 &&
                    <Box sx={{width: '50%'}} mt={3}>
                        <Typography variant={"h6"}
                                    align={"left"}
                                    style={{color: "#7a9cbc"}}
                                    gutterBottom>
                            Card details
                        </Typography>

                        <Card sx={{
                            maxWidth: "70%", borderRadius: "1.0em",
                            marginLeft: 17,
                            marginTop: 5,
                            width: 340,
                            height: 220,
                            position: "absolute",
                            backgroundColor: "#ededed"
                        }}>
                            <CardContent style={{width: "100%", height: "100%"}}>
                                <Card sx={{
                                    width: "100%",
                                    height: 50,
                                    marginTop: 2,
                                    position: "absolute",
                                    backgroundColor: "#888"
                                }}/>
                                <Box className={"SecretCode"}
                                     sx={{
                                         width: '100%', height: "50%",
                                         display: 'flex',
                                         flexDirection: 'row-reverse',
                                         justify: "flex-end",
                                     }}>

                                    <CardTextField id={"cvvcvc"} type={"password"}
                                                   inputProps={{maxLength: 3}}
                                                   pattern={"[0-9]{3}"}
                                                   placeholder={"CVV / CVC"}
                                                   required
                                                   sx={{maxWidth: "30%", marginRight: 4, marginTop: 16}}
                                                   margin={"dense"}/>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            maxWidth: "70%", borderRadius: "1.0em",
                            width: 340,
                            height: 220,
                            position: "absolute",
                            backgroundColor: "#ededed"
                        }}>
                            <CardMedia style={{padding: 15, width: "100%"}}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 20,
                                        width: 40,
                                    }}
                                    alt="Visa Inc Logo"
                                    src={"../BankLogos/VisaIncLogo.svg"}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: 20,
                                        width: 40,
                                    }}
                                    alt="Mastercard Logo"
                                    src={"../BankLogos/MastercardLogo.svg"}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: 20,
                                        width: 40,
                                    }}
                                    alt="Mir Logo"
                                    src={"../BankLogos/MirLogo.svg"}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: 20,
                                        width: 40,
                                    }}
                                    alt="UnionPay Logo"
                                    src={"../BankLogos/UnionPayLogo.svg"}
                                />
                            </CardMedia>
                            <CardContent style={{padding: 15, width: "100%"}}>
                                <CardTextField id={"cardNumber"} type={"tel"}
                                               pattern={"[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"}
                                               placeholder={"0000 0000 0000 0000"}
                                               required
                                               sx={{width: "90%"}} margin={"dense"}/>

                                <Box className={"Validity"} sx={{width: '100%'}}>
                                    <Stack direction={"row"} sx={{width: '100%'}}>
                                        <CardTextField id={"validityMonth"} type={"tel"}
                                                       pattern={"[0-9]{2}"}
                                                       placeholder={"month"}
                                                       required
                                                       sx={{maxWidth: "30%"}} margin={"dense"}/>

                                        <Typography variant={"h5"} marginTop={2.5} marginRight={1}
                                                    marginLeft={1}>/</Typography>

                                        <CardTextField id={"validityYear"} type={"tel"}
                                                       pattern={"[0-9]{2}"}
                                                       placeholder={"year"}
                                                       required
                                                       sx={{maxWidth: "30%"}} margin={"dense"}/>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </div>

            <Typography variant={"h4"}
                        align={"left"}
                        mt={paymentMethodValue === 0 ? 3 : 40} style={{color: "#7a9cbc"}}
                        gutterBottom>
                Total price: 10000
            </Typography>

            <Button onClick={() => handleOrderConfirm()} variant={"contained"}
                    style={{
                        marginRight: 15,
                        borderRadius: 10,
                        background: "#ae718f",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderColor: "#664350"
                    }} size="medium">
                <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                    Confirm and order
                </Typography>
            </Button>
        </Container>
    )
}