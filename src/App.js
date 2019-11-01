import React from 'react';
import './App.css';
import Octave from './Octave';
import Tone from 'tone';

const App = () => {
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = ["1", "2", "3"]

  const synth = new Tone.Synth().toMaster();

  const playNote = (note, octave) => {
    synth.triggerAttackRelease(note + octave, "8n");
  }

  let startingPosition = 1.0;

  return (
    <div className="App">
      <a-scene>
        {
          octaves.map((octave, index) => {
            startingPosition = startingPosition + 4.2;
            return <Octave 
                    octave={octave} 
                    notes={notes} 
                    key={index} 
                    playNote={playNote} 
                    startingPosition={{"whiteKey": startingPosition, "blackKey": startingPosition + 0.3}}
                    />
          })
        }
      </a-scene>
    </div>
  );
}

export default App;
