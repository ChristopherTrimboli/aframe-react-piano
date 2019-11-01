import React from 'react';
const WhiteKey = props => {
    return (
        <>
            <a-box color="tomato" depth="0.1" height="4" width="0.5" 
            position={props.whiteKey_X_Position} 
            event-set__enter="_event: mouseenter; color: yellow"
            event-set__leave="_event: mouseleave; color: tomato"
            playnote={props.note + props.octave}
            >
            </a-box>
        </>
    )
}
export default WhiteKey;