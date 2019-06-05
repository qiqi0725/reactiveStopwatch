import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTime: "00:00:00.00",
            initTime: new Date()
        };
    }

    // update time on main timer
    updateDisplayTime(newTime) {
        this.setState({
            displayTime: this.millisecondsToString(newTime)
        })
    }

    // start timer
    startTime(){
        this.mainTimer = setInterval(() => {
            this.updateDisplayTime(new Date() - this.state.initTime);
        }, 10);

    }

    // stop timer
    stopTime(){
        clearInterval(this.mainTimer);
    }

    // reset timer
    resetTime(){
        this.setState({
            displayTime: "00:00:00.00",
            initTime: new Date()
        })
    }

    // resume timer
    resumeTime(){
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
            <div id="time">{this.state.displayTime.toString()}</div>
        );
    }
}