import React from "react";
import {signin} from "../apis/User";
import {Button, Typography} from "@mui/material";

const SignInModal = ({tokenAPI}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    function handleLogIn() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        signin(username, password)
            .then(t => tokenAPI.setToken(t))
    }

    return (
        <React.Fragment>
            <Button onClick={() => setIsOpen(true)} variant={"contained"}
                    style={{marginRight: 15, borderRadius: 10, background: "#ae718f", borderStyle: "solid", borderWidth: 3, borderColor: "#664350"}} size="medium">
                <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                    Sign In
                </Typography>
            </Button>

            {isOpen &&
                <div>
                    <input id={"username"} type={"text"} placeholder={"Enter a username"}/>
                    <input id={"password"} type={"password"} placeholder={"Enter a password"}/>
                    <Button onClick={handleLogIn} variant={"contained"}>Sign In</Button>
                    <Button onClick={() => setIsOpen(false)} variant={"contained"}>Close</Button>
                </div>}
        </React.Fragment>
    )
}

export default SignInModal;