import React from 'react';
const BlackKey = props => {
    return (
        <>
            <a-box color="black" depth="0.1" height="2" width="0.5" 
                position={props.blackKey_X_Position} 
                event-set__enter="_event: mouseenter; color: #8FF7FF"
                event-set__leave="_event: mouseleave; color: black"
                playnote={props.note + props.octave}
            >
            </a-box>
        </>
    )
}
export default BlackKey;