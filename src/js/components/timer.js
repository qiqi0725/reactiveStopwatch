/* eslint-disable max-len */
/* eslint-disable import/named */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';

import { millisecondsToString, pad } from '../misc';
import ButtonManager from './buttonManager';
import LapManager from './lapManager';

import '../../css/timer.css';

/**
 * @class
 * @name Timer
 * @author Yu Qi Liu
 * @author Vincent Boivin
 * @classdesc Component used for lap timer and main timer
 */
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.startTime = this.startTime.bind(this);
        this.startLapTime = this.startLapTime.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.stopTime = this.stopTime.bind(this);
        this.resetTime = this.resetTime.bind(this);
        this.resumeTime = this.resumeTime.bind(this);
        this.functions = {
            start: this.startTime,
            stop: this.stopTime,
            update: this.updateTime,
            reset: this.resetTime,
            resume: this.resumeTime,
            lap: this.startLapTime,
        };
        this.state = {
            time: '00:00:00.00',
            timeMs: 0,
            lapTime: '00:00:00.00',
            lapTimeMs: 0,
            lapInitTime: null,
            initTime: null,
            lapCounter: 1,
            timer: null,
            lapTimer: null,
            buttonManager: <ButtonManager scenario={0} functions={this.functions} />,
            lapManager: <LapManager allLaps={null} killAllLaps={false} />
        };
        this.allLaps = {};
        this.firstLapTimer = null;
    }

    componentDidMount() {
        console.log('Timer is mounted');
    }

    componentDidCatch() {
        console.error('Exception caught in the timer component');
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        if (this.lapTimer) {
            clearInterval(this.lapTimer);
        }
    }

    /**
     * @function
     * @memberof Timer
     * @name updateTime
     * @param {Date} newTimeMs
     * Updates time of main timer or lap timer
     */
    updateTime(newTimeMs) {
        this.setState({
            timeMs: newTimeMs,
            time: millisecondsToString(newTimeMs),
        });

        if (this.state.lapCounter === 1) {
            this.setState({
                lapTimeMs: newTimeMs,
                lapTime: millisecondsToString(newTimeMs),
            });
        }
    }

    // Updates time of ongoing lap timer
    updateLapTime(newTimeMs) {
        this.setState({
            // lapTime: millisecondsToString(newTimeMs),
            lapTime: newTimeMs
        })
    }

    /**
     * @function
     * @memberof Timer
     * @name startTime
     * @description Start the timer interval
     */
    startTime() {
        // hide start, show stop
        this.setState({
            initTime: this.state.timeMs ? new Date() - this.state.timeMs : new Date(),
            timer: setInterval(() => {
                this.updateTime(new Date() - this.state.initTime);
            }, 76),
            buttonManager: <ButtonManager scenario={1} functions={this.functions} />,

        });
    }

    /**
     * @function
     * @memberof Timer
     * @name stopTime
     * @description Clear all intervals
     */
    stopTime() {
        // hide stop, show reset resume
        clearInterval(this.state.timer);
        clearInterval(this.state.lapTimer);
        this.setState({
            buttonManager: <ButtonManager scenario={2} functions={this.functions} />,
            // lapInitTime: new Date()
        });
    }

    /**
     * @function
     * @memberof Timer
     * @name resetTime
     * @description Reset all states
     */
    resetTime() {
        // hide reset resume, show lap start
        clearInterval(this.state.timer);
        clearInterval(this.state.lapTimer);
        this.setState({
            time: '00:00:00.00',
            lapTime: '00:00:00.00',
            timeMs: 0,
            lapTimeMs: 0,
            initTime: null,
            initLapTime: null,
            lapCounter: 1,
            buttonManager: <ButtonManager scenario={0} functions={this.functions} />,
            lapManager: <LapManager allLaps={null} killAllLaps={true} />,

        });
        this.allLaps = {};
    }

    /**
     * @function
     * @memberof Timer
     * @name resumeTime
     * @description Restarts intervals
     */
    resumeTime() {
        // hide resume reset, show start lap
        this.startTime();
        this.startLapTime(false);
    }

    /**
     * @function
     * @memberof Timer
     * @name startLapTime
     * @description Start lap interval
     */
    startLapTime(isNewLap) {
        // clear previous lap timer
        if (this.state.lapCounter >= 1 && this.state.lapCounter && isNewLap) {
            clearInterval(this.state.lapTimer);
        }

        if (isNewLap) {
            this.allLaps[this.state.lapCounter] = this.state.lapTime;
            this.setState({
                lapTimeMs: 0,
            });
        }
        // calculate time for latest lap
        this.setState({
            lapInitTime: this.state.lapTimeMs ? new Date() - this.state.lapTimeMs : new Date(),
            lapTimer: setInterval(() => {
                this.updateLapTime(new Date() - this.state.lapInitTime);
            }, 76),
            lapCounter: isNewLap ? this.state.lapCounter + 1 : this.state.lapCounter,
            lapManager: <LapManager allLaps={this.allLaps} killAllLaps={false} />
        });
    }

    render() {
        return (
            <div className='stopwatch-adaptive'>
                <div id='time'>
                    {(this.state.time)}
                </div>
                {this.state.buttonManager}
                <div id='laps'>
                    <div id={`lapBlock${this.state.lapCounter}`}>
                        <span id={`lap${this.state.lapCounter}`}>
                            {`Lap ${pad(this.state.lapCounter)}`}
                        </span>
                        <span id={`timeLap${this.state.lapCounter}`}>
                            {millisecondsToString(this.state.lapTime)}
                        </span>
                    </div>
                    {this.state.lapManager}
                </div>
            </div>
        );
    }
}