import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isStartButtonVisible = true,
            isStopButtonVisible = false,
            isResumeButtonVisible = false,
            isResetButtonVisible = false,
            isLapButtonVisible = true,
            isLapButtonDisabled = true
        };
    }

    render() {

        let visibleButtons = "";

        isStartButtonVisible ? visibleButtons += '<button id="start" onclick="startTime()">start</button>' : button;
        isStopButtonVisible ? visibleButtons += '<button id="stop" onclick="stopTime()">stop</button>' : button;
        isResumeButtonVisible ? visibleButtons += '<button id="resume" onclick="resumeTime()">resume</button>' : button;
        isResetButtonVisible ? visibleButtons += '<button id="reset" onclick="resetTime()">reset</button>' : button;

        if (isLapButtonVisible && isLapButtonDisabled){
            visibleButtons += '<button id="lap" onclick="startLapTime(false)" disabled>lap</button>';
        }
        else if(isLapButtonVisible){
            visibleButtons += '<button id="lap" onclick="startLapTime(false)">lap</button>';
        }

        return (
            <div class="stopwatchButtons"> 
                {visibleButtons}
            </div>
        );
    }

}