import React from 'react';
import { millisecondsToString, pad } from '../misc';

export default class LapManager extends React.Component {

    constructor(props) {
        super(props);

        // const green = "#15b222";
        // const red = "#ff2d2d";

        // let allLaps = [];

        this.state = {
            // lapCounter: props.counter,
            // lapTime: props.lapTime,
            max: {},
            min: {},
            allLaps: props.allLaps
        }
        // this.allLaps = [];

    }

    componentWillReceiveProps(){
        console.log('reached');
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

    updateAllLaps() {
        if (this.state.allLaps && this.state.lapCounter != this.state.prevLapCounter) {
            this.allLaps.push({
                key: this.state.lapCounter,
                value: this.state.lapTime
            });
        }
        
    }

    // display all laps
    displayAllLaps() {

        if (!this.state.allLaps){
            return null
        }
        // updateAllLaps();
        let finalDisplay = [];
        for (const [key, value] of Object.entries(this.allLaps)) {
            console.log("@@@@@@" + value);

            finalDisplay.push(<div id={`lapBlock${key}`}>
                <span id={`lap${key}`}>
                    {`Lap ${pad(key)}`}
                </span>
                <span id={`timeLap${key}`}>
                    {(value)}
                </span>

            </div>);
        }
        // let all = this.allLaps.map((item, key) =>
        //     <div id={`lapBlock${key}`}>
        //         <span id={`lap${key}`}>
        //             {`Lap ${pad(key)}`}
        //         </span>
        //         <span id={`timeLap${key}`}>
        //             {(item)}
        //         </span>
        //     </div>
        // );
        return finalDisplay;
    }

    render() {
       
        // return (
        //     // <div id={`lapBlock${this.lapCounter}`}>
        //     //     <span id={`lap${this.lapCounter}`}>
        //     //         {`Lap ${pad(this.lapCounter)}`}
        //     //     </span>
        //     //     <span id={`timeLap${this.lapCounter}`}>
        //     //         {(this.lapTime)}
        //     //     </span>
        //     // </div>
        //     this.displayAllLaps()
        // );
        this.updateAllLaps();
        return this.displayAllLaps();
    }
}