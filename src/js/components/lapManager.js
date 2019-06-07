import React from 'react';
import { millisecondsToString, pad } from '../misc';

export default class LapManager extends React.Component {

    constructor(props) {
        super(props);

        // const green = "#15b222";
        // const red = "#ff2d2d";

        this.state = {
            // lapCounter: props.counter,
            // lapTime: props.lapTime,
            max: {},
            min: {},
            allLaps: null,
        }
        this.finalDisplay = [];
    }

    componentWillReceiveProps(){
        this.setState({
            allLaps: this.props.allLaps,
        });
        this.updateLaps();
        this.setState({
            allLaps: null,
        });
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
                min: {lapCounter: this.state.lapTime},
            });
        }
        else if (allLaps().getValue(this.state.lapCounter) > allLaps.getValue(this.state.maxLapID)) {
            this.setState({
                max: {lapCounter: this.state.lapTime},
            })
        }
    }

    // display all laps
    updateLaps() {

        if (!this.state.allLaps){
            return null
        }

        // updateAllLaps();
        for (const [key, value] of Object.entries(this.state.allLaps).reverse()) {
            this.finalDisplay.push(<div id={`lapBlock${key}`}>
                <span id={`lap${key}`}>
                    {`Lap ${pad(key)}`}
                </span>
                <span id={`timeLap${key}`}>
                    {(value)}
                </span>

            </div>);
        }
    }

    render() {
       
        return this.finalDisplay;
    }
}