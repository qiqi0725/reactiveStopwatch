import React from 'react';
import { millisecondsToString, pad } from '../misc';

export default class LapManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allLaps: props.allLaps,
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
    }

    componentDidMount() {
        console.log('Lap Manager is mounted');
    }

    componentDidCatch() {
        console.error('Exception caught in the Lap Manager component');
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
            }
            else if (value >= this.maxTime) {
                lapStyle = { color: "red" }
                this.maxTime = value;
            }

            finalDisplay.push(<div id={`lapBlock${key}`} style={lapStyle}>
                <span id={`lap${key}`}>
                    {`Lap ${pad(key)}`}
                </span>
                <span id={`timeLap${key}`}>
                    {key == 1 ? value : millisecondsToString(value)}
                </span>

            </div>);
        }

        if (this.state.killAllLaps) {
            this.setState({
                allLaps: [],
            });
        }
        return finalDisplay;
    }

    render() {
        // return this.finalDisplay;
        return this.updateLaps();
    }
}