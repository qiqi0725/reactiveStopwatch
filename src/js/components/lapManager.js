import React from 'react';
import { millisecondsToString, pad } from '../misc';

export default class LapManager extends React.Component {

    constructor(props) {
        super(props);

        // const green = "#15b222";
        // const red = "#ff2d2d";

        // let allLaps = [];

        this.state = {
            lapTime: props.lapTime,
            lapCounter: props.lapCounter,
            prevLapCounter: 0,
            prevLapTime: 0,
            maxLapID: 0,
            minLapID: 0
        }
        this.allLaps = [];

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
                minLapID: this.state.lapCounter
            })
        }
        else if (allLaps().getValue(this.state.lapCounter) > allLaps.getValue(this.state.maxLapID)) {
            this.setState({
                maxLapID: this.state.lapCounter
            })
        }
    }

    updateAllLaps() {
        console.log(this.state.lapCounter);
        if (this.state.lapCounter != this.state.prevLapCounter) {
            this.allLaps.push({
                key: this.state.lapCounter,
                value: this.state.lapTime
            });
            this.setState({
                prevLapCounter : this.state.lapCounter,
                prevLapTime : this.state.lapTime
            })
            // console.log(this.allLaps);
        }
        
    }

    // display all laps
    displayAllLaps() {
        updateAllLaps();
        let finalDisplay = [];
        for (const [key, value] of Object.entries(this.allLaps)) {


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
        return null;
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
        // this.displayAllLaps();
        return null;
    }
}