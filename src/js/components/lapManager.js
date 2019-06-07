import React from 'react';
import { millisecondsToString, pad } from '../misc';

export default class LapManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // lapCounter: props.counter,
            // lapTime: props.lapTime,
            // max: {key: 0, value: 0},
            // min: {key: 0, value: 0},
            allLaps: null,
            killAllLaps: false,
        }
        this.maxTime = 0;
        this.minTime = 99999;
    }
 
    componentWillReceiveProps() {
        this.setState({
            allLaps: this.props.allLaps,
            killAllLaps: this.props.killAllLaps
        });
        console.log("DO YOU WANT TO CLEAR ALL LAPS? " + this.state.killAllLaps);
    }

    componentDidMount() {
        console.log('Lap Manager is mounted');
    }

    componentDidCatch() {
        console.error('Exception caught in the Lap Manager component');
    }

    // keep track of fastest and slowest laps
    updateMinMax() {
        if (allLaps().getValue(this.state.lapCounter) < allLaps.getValue(this.state.minLapID)) {
            this.setState({
                min: { lapCounter: this.state.lapTime },
            });
        }
        else if (allLaps().getValue(this.state.lapCounter) > allLaps.getValue(this.state.maxLapID)) {
            this.setState({
                max: { lapCounter: this.state.lapTime },
            })
        }
    }

    // display all laps
    updateLaps() {
        const finalDisplay = [];

        if (!this.state.allLaps) {
            return null;
        }
        for (const [key, value] of Object.entries(this.state.allLaps).reverse()) {
            let lapStyle = { color: "white" };
            if (value <= this.minTime) {
                lapStyle = { color: "green" }
                this.minTime = value;
                value = millisecondsToString(value);
            }
            else if (value >= this.maxTime) {
                lapStyle = { color: "red" }
                this.maxTime = value;
                value = millisecondsToString(value);
            }

            

            finalDisplay.push(<div id={`lapBlock${key}`} style={lapStyle}>
                <span id={`lap${key}`}>
                    {`Lap ${pad(key)}`}
                </span>
                <span id={`timeLap${key}`}>
                    {(value)}
                </span>

            </div>);
        }

        if (this.state.killAllLaps) {
            this.allLaps = [];
            console.log("I KILLED ALL LAPS" + this.allLaps);
        }
        return finalDisplay;
    }

    render() {
        // return this.finalDisplay;
        return this.updateLaps();
    }
}