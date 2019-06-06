import React from 'react';

import Button from './button';

export default class ButtonManager extends React.Component {
    constructor(props){
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
            scenario: props.scenario
        }
    }

    render(){
        return (
            // 0: lap start
            // 1: lap stop
            // 2: reset resume
        );
    }    
}

