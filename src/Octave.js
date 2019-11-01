import React from 'react';
import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';

const Octave = props => {

    let whiteKey_X_Position = props.startingPosition.whiteKey;
    let blackKey_X_Position = props.startingPosition.blackKey;

    return (
        props.notes.map((note, index) => {
            blackKey_X_Position = blackKey_X_Position + 0.6;
            whiteKey_X_Position = whiteKey_X_Position + 0.6;
            return (
                <>
                    {
                        note !== "E" && note !== "B" ? 
                        <BlackKey 
                            note={note + "#"} 
                            key={index + "blackKey"} 
                            blackKey_X_Position={`${blackKey_X_Position} 1.5 -2.9`}
                            {...props}
                        /> : null
                    }
                    <WhiteKey 
                        key={index + "whiteKey"}
                        whiteKey_X_Position={`${whiteKey_X_Position} 0.5 -3`}
                        note={note}
                        {...props}
                    />
                </>
                )
        })
    )
}
export default Octave;