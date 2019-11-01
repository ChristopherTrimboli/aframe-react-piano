import React from 'react';
const BlackKey = props => {
    return (
        <>
            <a-box color="black" depth="0.1" height="2" width="0.5" position={props.blackKey_X_Position} onClick={() => props.playNote(props.note, props.octave)}></a-box>
        </>
    )
}
export default BlackKey;