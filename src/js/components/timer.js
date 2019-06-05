/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTime = "00:00:00.00"
        };
    }

    updateDisplayTime(newTime) {
        this.setState({
            displayTime = newTime
        })
    }

    render() {
        return <div id = "time" > { this.displayTime } < /div>;
    }
}