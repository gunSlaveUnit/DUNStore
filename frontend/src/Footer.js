import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                &copy; GURU {new Date().getFullYear()}. All rights reserved
            </div>
        );
    }
}