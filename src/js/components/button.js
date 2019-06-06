import React from 'react';

import '../../css/button.css';

/**
 * @class
 * @name Button
 * @author Yu Qi Liu
 * @author Vincent Boivin
 * @classdesc Button component
 */
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            buttonAction: props.bAction,
            isDisabled: props.isDisabled,
        };
    }

    componentDidMount(){
        console.log(`Button ${this.state.name} has been mounted`);
    }

    componentDidCatch(){
        console.error('Error caught in button');
    }

    render() {
        return (
            <button id={this.state.id} onClick={this.state.buttonAction} disabled={this.state.isDisabled}>{this.state.name}</button>
        )
    }
}