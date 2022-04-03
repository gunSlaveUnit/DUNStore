import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <small>&copy; GURU {new Date().getFullYear()}. All rights reserved</small>
            </footer>
        );
    }
}