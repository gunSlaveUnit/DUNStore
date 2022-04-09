import React from 'react';
import {A} from 'hookrouter';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><A href="/">Home</A></li>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                    </ul>
                </nav>
            </header>
        );
    }
}