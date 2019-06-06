import React from 'react';

import '../../css/button.css';

/**
 * @class Button
 * @classdesc Component with 4 states (id,name,buttonAction,isVisible)
 * @author Vincent Boivin
 */
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            buttonAction: props.bAction,
            isVisible: props.isVisible,
        };
    }

    /**
     * 
     */
    componentDidMount(){
        console.log(`Button ${this.state.name} has been mounted`);
    }

    /**
     * 
     */
    componentDidCatch(){
        console.error('Error caught in button');
    }

    /**
     * 
     */
    render() {
        return (
            this.state.isVisible ?
                <button id={this.state.id} onClick={this.state.buttonAction} key={this.state.key}>{this.state.name}</button>
                :
                null
        )
    }
}