/* eslint-disable class-methods-use-this */
import React from 'react';

import styles from '../../css/button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStartButtonVisible: true,
            isStopButtonVisible: false,
            isResumeButtonVisible: false,
            isResetButtonVisible: false,
            isLapButtonVisible: true,
            isLapButtonDisabled: true,
        };
    }

    render() {
        const visibleButtons = [];

        this.isStartButtonVisible ? visibleButtons += <button id="start" onClick="startTime()">start</button> : button;
        this.isStopButtonVisible ? visibleButtons += <button id="stop" onClick="stopTime()">stop</button> : button;
        this.isResumeButtonVisible ? visibleButtons += <button id="resume" onClick="resumeTime()">resume</button> : button;
        this.isResetButtonVisible ? visibleButtons += <button id="reset" onClick="resetTime()">reset</button> : button;

        if (isLapButtonVisible && isLapButtonDisabled) {
            visibleButtons += <button id="lap" onClick="startLapTime(false)" disabled>lap</button>;
        } else if (isLapButtonVisible) {
            visibleButtons += <button id="lap" onClick="startLapTime(false)">lap</button>;
        }

        return (
            <div className="stopwatchButtons">
                {visibleButtons}
            </div>
        );
    }
}