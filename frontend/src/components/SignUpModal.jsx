import React from "react";
import {signup} from "../apis/User";

const SignUpModal = ({tokenAPI}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    function handleLogIn() {
        let email = document.getElementById('email').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        signup(email, username, password)
            .then(t => tokenAPI.setToken(t))
    }

    return (
        <React.Fragment>
            <button onClick={() => setIsOpen(true)}>
                Sign Up
            </button>

            {isOpen &&
                <div>
                    <input id={"email"} type={"email"} placeholder={"Enter an email"}/>
                    <input id={"username"} type={"text"} placeholder={"Enter a username"}/>
                    <input id={"password"} type={"password"} placeholder={"Enter a password"}/>
                    <input id={"retype-password"} type={"password"} placeholder={"Retype password"}/>
                    <button onClick={handleLogIn}>Sign Up</button>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                </div>}
        </React.Fragment>
    )
}

export default SignUpModal;