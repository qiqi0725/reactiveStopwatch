import React from 'react';
import Button from './button';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainTime: "00:00:00.00",
            lapTime: "00:00:00.00",
            initTime: new Date(),
            initLapTime: new Date()
        };
    }

    // update time on main timer
    updateMainTime(newTime) {
        this.setState({
            mainTime: this.millisecondsToString(newTime)
        })
    }

    // start timer
    startTime(){

        // hide start, show stop
        Button.setState({
            isStartButtonVisible: false,
            isStopButtonVisible: true
        })

        this.mainTimer = setInterval(() => {
            this.updateMainTime(new Date() - this.state.initTime);
        }, 10);

    }

    // start lap timers
    // indicate colors for >2 laps
    startLapTime(){

        this.lapTimer = setInterval(() => {
            
        })
    }

    // stop timer
    stopTime(){

        // hide stop, show reset resume
        Button.setState({
            isStopButtonVisible: false,
            isResetButtonVisible: true,
            isResumeButtonVisible: true
        })

        clearInterval(this.mainTimer);
    }

    // reset timer
    resetTime(){

        // hide reset resume, show lap start
        Button.setState({
            isResetButtonVisible: false,
            isResumeButtonVisible: false,
            isLapButtonVisible: true,
            isStartButtonVisible: true
        })
        this.setState({
            mainTime: "00:00:00.00",
            initTime: new Date()
        })
    }

    // resume timer
    resumeTime(){

        // hide resume reset, show start lap
        Button.setState({
            isResumeButtonVisible: false,
            isResetButtonVisible: false,
            isStartButtonVisible: true,
            isLapButtonVisible: true
        })

        this.startTime();
    }

    // convert milliseconds to string
    millisecondsToString(milli){
        let milliseconds = parseInt((milli%1000)/10);
        let seconds = parseInt((milli/1000)%60);
        let minutes = parseInt((milli/(1000*60))%60);
        let hours = parseInt((milli/(1000*60*60))%24);

        return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds) + "." + milliseconds;
    }

    // pad single digit
    pad(num){
        return num >= 10 ? num : '0' + num;
    }

    render() {
        return (
            <div id="time">{this.state.mainTime.toString()}</div>
        );
    }
}