import React from 'react';

import Button from './button';

/**
 * @class
 * @name ButtonManager
 * @author Yu Qi Liu
 * @author Vincent Boivin
 * @classdesc Component in charge of buttons states and their side effects.
 */
export default class ButtonManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scenario: props.scenario,
        };
        this.buttons = {
            startButton: <Button
                id='start'
                name='Start'
                bAction={props.functions.start}
                isDisabled={false} />,
            lapButtonDisabled: <Button
                id='lap'
                name='Lap'
                bAction={null}
                isDisabled={true} />,
            lapButtonEnabled: <Button
                id='lap'
                name='Lap'
                bAction={props.startLapTime}
                isDisabled={false} />,
            resetButton: <Button
                id='reset'
                name='Reset'
                bAction={props.reset}
                isDisabled={false} />,
            stopButton: <Button
                id='stop'
                name='Stop'
                bAction={props.stop}
                isDisabled={false} />,
            resumeButton: <Button
                id='resume'
                name='Resume'
                bAction={props.resume}
                isDisabled={false} />,
        };
    }

    executeScenario(num) {
        switch (num) {
        case 0:
            // 0: lapDisabled start
            return [this.buttons.lapButtonDisabled, this.buttons.startButton];
        case 1:
            // 1: lapEnabled stop
            return [this.buttons.lapButtonEnabled, this.buttons.startButton];
        case 2:
            // 2: reset resume
            return [this.buttons.resetButton, this.buttons.resumeButton];
        default:
            return null;
        }
    }

    render() {
        return this.executeScenario(this.state.scenario);
    }
}
