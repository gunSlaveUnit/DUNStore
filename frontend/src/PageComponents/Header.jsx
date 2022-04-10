import React from 'react';
import {A} from 'hookrouter';
import * as USER_API from '../User';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><A href="/">Home</A></li>
                    <li><button onClick={() => USER_API.signin}>Sign In</button></li>
                    <li><button onClick={() => USER_API.signup}>Sign Up</button></li>
                    <li><button onClick={() => USER_API.signout('ed0a337c4840504d542b5b50d56fdd9762b12293')}>Sign Out</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;