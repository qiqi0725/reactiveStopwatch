/* eslint-disable class-methods-use-this */
import React from 'react';

import styles from '../../css/timer.css';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '00:00:00.00',
            initTime: new Date(),
        };
    }

    // update time on main timer
    updatetime(newTime) {
        this.setState({
            time: this.millisecondsToString(newTime),
        });
    }

    // start timer
    startTime() {
        // hide start, show stop
        Button.setState({
            isStartButtonVisible: false,
            isStopButtonVisible: true,
        });

        this.timer = setInterval(() => {
            this.updatetime(new Date() - this.state.initTime);
        }, 10);
    }

    // stop timer
    stopTime() {
        // hide stop, show reset resume
        Button.setState({
            isStopButtonVisible: false,
            isResetButtonVisible: true,
            isResumeButtonVisible: true,
        });

        clearInterval(this.timer);
    }

    // reset timer
    resetTime() {
        // hide reset resume, show lap start
        Button.setState({
            isResetButtonVisible: false,
            isResumeButtonVisible: false,
            isLapButtonVisible: true,
            isStartButtonVisible: true,
        });
        this.setState({
            time: '00:00:00.00',
            initTime: new Date(),
        });
    }

    // resume timer
    resumeTime() {
        // hide resume reset, show start lap
        Button.setState({
            isResumeButtonVisible: false,
            isResetButtonVisible: false,
            isStartButtonVisible: true,
            isLapButtonVisible: true,
        });

        this.startTime();
    }

    // convert milliseconds to string
    millisecondsToString(milli) {
        const milliseconds = parseInt((milli % 1000) / 10, 10);
        const seconds = parseInt((milli / 1000) % 60, 10);
        const minutes = parseInt((milli / (1000 * 60)) % 60, 10);
        const hours = parseInt((milli / (1000 * 60 * 60)) % 24, 10);

        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}.${milliseconds}`;
    }

    // pad single digit
    pad(num) {
        return num >= 10 ? num : `0${num}`;
    }

    render() {
        return (
            <div id="time">{this.state.time.toString()}</div>
        );
    }
}