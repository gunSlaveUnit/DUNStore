import React from "react";
import {signin} from "../apis/User";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, styled,
    TextField,
    Typography
} from "@mui/material";
import {useCookies} from "react-cookie";
import {navigate} from "hookrouter";

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

const SignInModal = ({cookies}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleLogIn() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        signin(email, password)
            .then(r => setAccount(r))
            .then(_ => setIsOpen(false))
            .then(_ => navigate('/'))
    }

    function setAccount(r) {
        cookies.setCookies("access", r.access)
        cookies.setCookies("refresh", r.refresh)
        cookies.setCookies("username", r.user.username)
        cookies.setCookies("email", r.user.email)
        cookies.setCookies("is_superuser", r.user.is_superuser)
        cookies.setCookies("id", r.user.id)
    }

    return (
        <React.Fragment>
            <Button onClick={() => setIsOpen(true)} variant={"contained"}
                    style={{
                        marginRight: 15,
                        borderRadius: 10,
                        background: "#ae718f",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderColor: "#664350"
                    }} size="medium">
                <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                    Sign In
                </Typography>
            </Button>

            {isOpen &&
                <Dialog open={isOpen} onClose={setIsOpen} aria-labelledby={"form-dialog-title"}
                        PaperProps={{
                            style: {
                                backgroundColor: '#1e1e21',
                                boxShadow: 'none',
                                borderRadius: "1.8em"
                            },
                        }}>
                    <DialogTitle id={"form-dialog-title"}>
                        <Typography variant={"h4"} style={{color: "#eceded"}}>
                            Sign In
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant={"h6"} style={{color: "#eceded"}}>
                                Sign in to get all functionality and buy whatever you
                                want
                            </Typography>

                        </DialogContentText>
                        <CssTextField autoFocus margin={"dense"} id={"email"} label={"Email"} type={"email"}
                                      fullWidth required sx={{label: {color: '#ededed'}, input: {color: '#ededed'}}}/>
                        <CssTextField margin={"dense"} id={"password"} label={"Password"} type={"password"}
                                      fullWidth required sx={{label: {color: '#ededed'}, input: {color: '#ededed'}}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleLogIn} variant={"contained"}
                                style={{
                                    marginRight: 15,
                                    borderRadius: 10,
                                    background: "#ae718f",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#664350"
                                }} size="medium">
                            <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                                Sign In
                            </Typography>
                        </Button>
                        <Button onClick={() => setIsOpen(false)} variant={"contained"}
                                style={{
                                    borderRadius: 10,
                                    background: "#7a9cbc",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#435567"
                                }} size={"medium"}>
                            <Typography variant={"h6"} textTransform={"capitalize"}>
                                Close
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </React.Fragment>
    )
}

export default SignInModal;