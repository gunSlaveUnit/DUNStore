import React from "react";
import {signin} from "./User";

export let show = false;


const SignInModal = ({tokenAPI}) => {
    return (
        <div className="SignInModal">
            <label>Create an account on GURU</label>
            <p>
                <input id='username' type="text" placeholder={"Enter a username"}/>
            </p>
            <p>
                <input id='password' type="password" placeholder={"Enter a password"}/>
            </p>
            <button onClick={() => {
                signin(document.getElementById('username').value,
                    document.getElementById('password').value)
                    .then(t => tokenAPI.setToken(t));
            }}>Submit
            </button>
        </div>
    );
}

export default SignInModal;