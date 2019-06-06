import React from 'react';

import Button from './button';

export default class ButtonManager extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = {
            startButton: <Button
                id='start'
                name='Start'
                bAction={this.startTime}
                isDisabled={false} />,
            lapButtonDisabled: <Button
                id='lap'
                name='Lap'
                bAction={this.startLapTime}
                isDisabled={true} />,
            lapButtonEnabled: <Button
                id='lap'
                name='Lap'
                bAction={this.startLapTime}
                isDisabled={false} />,
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
                isDisabled={false} />,
        };
        this.state = {
            scenario: props.scenario
        }
    }

    executeScenario(num){
        switch(num) {
            case 0:
                // 0: lapDisabled start
                return
                this.buttons.lapButtonDisabled;
                this.buttons.startButton;
              break;
            case 1:
              // 1: lapEnabled stop
              return
                this.buttons.lapButtonEnabled;
                this.buttons.startButton;
              break;
            case 2:
                // 2: reset resume
                return
                this.buttons.resetButton;
                this.buttons.resumeButton;
            default:
              console.log("ERROR: INVALID SCENARIO, WHICH BUTTON DID YOU PRESS??");
          }
    }

    render(){
        return (
            executeScenario(this.state.scenario)
        );
    }    
}

