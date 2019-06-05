import React from 'react';
import Button from './button';
import Timer from './timer';

import styles from '../../css/lap.css';

export default class LapTimer extends Timer {

startLapTime(){

}

render(){
    return(
        // `<div id="lapBlock${lapCounter}">\n` +
        // `<span id="lap${lapCounter}">Lap ${pad(lapCounter)}</span>\n` +
        // `<span id="timeLap${lapCounter}">00:00:00.00</span>\n` +
        // `</div>\n`;
    );
}

}