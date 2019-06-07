/* eslint-disable class-methods-use-this */
import React from 'react';

import '../../css/button.css';

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
        this.buttons = {
            startButton: <button id='start' onClick={props.functions.start}>{'start'}</button>,
            lapButtonDisabled: <button id='lap' disabled={true}>{'lap'}</button>,
            lapButtonEnabled: <button id='lap' onClick={props.functions.lap}>{'lap'}</button>,
            resetButton: <button id='reset' onClick={props.functions.reset}>{'reset'}</button>,
            stopButton: <button id='stop' onClick={props.functions.stop}>{'stop'}</button>,
            resumeButton: <button id='resume' onClick={props.functions.resume}>{'resume'}</button>,
        };
    }

    chooseButtons(b1, b2) {
        return (<div className='stopwatchButtons'>{b1}{b2}</div>);
    }

    renderScenario(num) {
        switch (num) {
        case 0:
            // 0: lapDisabled start
            return (this.chooseButtons(this.buttons.lapButtonDisabled, this.buttons.startButton));
        case 1:
            // 1: lapEnabled stop
            return (this.chooseButtons(this.buttons.lapButtonEnabled, this.buttons.stopButton));
        case 2:
            // 2: reset resume
            return (this.chooseButtons(this.buttons.resetButton, this.buttons.resumeButton));
        default:
            return null;
        }
    }

    render() {
        return this.renderScenario(this.props.scenario);
    }
}
