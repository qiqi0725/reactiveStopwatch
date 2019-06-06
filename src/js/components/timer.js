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
 * @property {array} buttons - Button components
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
        };
        this.state = {
            time: '00:00:00.00',
            lapTime: '00:00:00.00',
            initTime: new Date(),
            lapCounter: 1,
            timer: null,
            lapTimer: null,
            buttonManager: <ButtonManager scenario={0} functions={this.functions} />,
        };
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
     * @param {Date} newTime
     * Used to modify the time states
     */
    updateTime(newTime) {
        this.setState({
            time: millisecondsToString(newTime),
            lapTime: millisecondsToString(newTime),
        });
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
            timer: setInterval(() => {
                this.updateTime(new Date() - this.state.initTime);
            }, 10),
            buttonManager: <ButtonManager scenario={1} functions={this.functions} />,
        });
    }

    /**
     * @function
     * @memberof Timer
     * @name startLapTime
     * @description Start lap interval
     * @param {*} currentLap
     */
    startLapTime(currentLap) {

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
        this.setState({
            time: '00:00:00.00',
            lapTime: '00:00:00.00',
            initTime: new Date(),
            buttonManager: <ButtonManager scenario={0} functions={this.functions} />
        });
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
                            {(this.state.lapTime)}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}