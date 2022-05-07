import {
    Box,
    Button,
    Container,
    FormControl, FormHelperText,
    Grid,
    InputLabel, MenuItem,
    Select,
    styled,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';

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

export default function Order() {
    const [obtainWayValue, setObtainWayValue] = React.useState(0);
    const [paymentMethodValue, setpaymentMethodValue] = React.useState(0);
    const [pointIssue, setPointIssue] = React.useState('');

    const handleChangeObtainWay = (event, newValue) => {
        setObtainWayValue(newValue);
    };

    const handleChangepaymentMethod = (event, newValue) => {
        setpaymentMethodValue(newValue);
    };

    const handleChangepointIssue = (event) => {
        setPointIssue(event.target.value);
    };

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
                            <CssTextField id={"phone"} type={"tel"}
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

                <Tabs value={paymentMethodValue} onChange={handleChangepaymentMethod}
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
                    </Box>

                }
            </div>

            <Typography variant={"h4"}
                        align={"left"}
                        mt={7} style={{color: "#7a9cbc"}}
                        gutterBottom>
                Total price: 10000
            </Typography>

            <Button onClick={() => {
            }} variant={"contained"}
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