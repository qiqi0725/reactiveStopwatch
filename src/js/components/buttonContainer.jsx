import React from 'react';

import Button from './button';

import '../../css/buttonContainer.css'

export default class ButtonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttons: { 
                startButton: <Button
                id='start'
                name='Start'
                bAction={null}
                isVisible={true} />,
                lapButton: <Button
                id='lap'
                name='Lap'
                bAction={null}
                isVisible={true} />,
                resetButton: <Button
                id='reset'
                name='Reset'
                bAction={null}
                isVisible={false} />,
                stopButton: <Button
                id='stop'
                name='Stop'
                bAction={null}
                isVisible={false} />,
                resumeButton: <Button
                id='resume'
                name='Resume'
                bAction={null}
                isVisible={false} /> 
            }
        }
    }

    componentDidMount(){
        console.log(`The button container has been mounted with its buttons`);
    }

    render(){
        return(
            <div className='stopwatchButtons'>
                {Object.values(this.state.buttons)}
            </div>
        )
    }
}