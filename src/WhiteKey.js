import React from 'react';
const WhiteKey = props => {
    return (
        <>
            <a-box color="tomato" depth="0.1" height="4" width="0.5" position={props.whiteKey_X_Position} onClick={() => props.playNote(props.note, props.octave)}></a-box>
        </>
    )
}
export default WhiteKey;