import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                    </ul>
                </nav>
            </header>
        );
    }
}