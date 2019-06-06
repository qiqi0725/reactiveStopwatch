import React from 'react';

import Button from './button';
import {millisecondsToString, pad} from '../misc';

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
        this.buttons = {
                startButton: <Button
                id='start'
                name='Start'
                bAction={this.startTime}
                isDisabled={false} />,
                lapButton: <Button
                id='lap'
                name='Lap'
                bAction={this.startLapTime}
                isDisabled={true} />,
                resetButton: <Button
                id='reset'
                name='Reset'
                bAction={this.resetTime}
                isDisabled={false} />,
                stopButton: <Button
                id='stop'
                name='Stop'
                bAction={this.stopTime}
                isDisabled={false} />,
                resumeButton: <Button
                id='resume'
                name='Resume'
                bAction={this.resumeTime}
                isDisabled={false} /> 
            };
        this.state = {
            time: '00:00:00.00',
            lapTime : '00:00:00.00',
            initTime: new Date(),
            lapCounter: 1,
            timer: null,
            lapTimer: null,
            displayedButtons: [this.buttons.startButton, this.buttons.lapButton],
            };
    }

    componentDidMount(){
        console.log('Timer is mounted');
    }

    componentDidCatch(){
        console.error('Excetipn caught in the timer component');
    }

    componentWillUnmount(){
        if(this.timer){
        clearInterval(this.timer);
        }
        if(this.lapTimer){
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
            displayedButtons: [this.buttons.lapButton, this.buttons.stopButton],
            timer: setInterval(() =>{
                this.updateTime(new Date() - this.state.initTime);
            }, 10),
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
        Button.setState({
            isStopButtonVisible: false,
            isResetButtonVisible: true,
            isResumeButtonVisible: true,
        });

        clearInterval(this.state.timer);
        clearInterval(this.state.lapTimer);
    }

    /**
     * @function
     * @memberof Timer
     * @name resetTime
     * @description Reset all states
     */
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

    /**
     * @function
     * @memberof Timer
     * @name resumeTime
     * @description Restarts intervals
     */
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

    render() {
        return (
            <div className='stopwatch-adaptive'>
                <div id='time'>
                    {(this.state.time)}
                </div>
                <div className="stopwatchButtons">
                    {this.state.displayedButtons}
                </div>
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