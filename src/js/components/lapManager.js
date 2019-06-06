import React from 'react';
import { millisecondsToString, pad } from '../misc';

export default class LapManager extends React.Component {

    constructor(props) {
        super(props);
        this.displayAllLaps = this.displayAllLaps.bind();
        

        const green = "#15b222";
        const red = "#ff2d2d";

        this.state = {
            lapTime: this.props.lapTime,
            lapCounter: this.props.lapCounter,
            maxLapID: 0,
            minLapID: 0
        }

        this.allLaps.push({
            key: lapCounter,
            value: lapTime
        });
    }


    componentDidMount() {
        console.log('Lap Manager is mounted');
    }

    componentDidCatch() {
        console.error('Exception caught in the Lap Manager component');
    }


    // display all laps
    displayAllLaps() {
        this.allLaps.push({
            key: props.lapCounter,
            value: props.lapTime
        });
        let all = this.allLaps.map((item, key) =>
            <div id={`lapBlock${key}`}>
                <span id={`lap${key}`}>
                    {`Lap ${pad(key)}`}
                </span>
                <span id={`timeLap${key}`}>
                    {(item)}
                </span>
            </div>
        );
        return all;
    }

    render() {
        return displayAllLaps();
    }
}