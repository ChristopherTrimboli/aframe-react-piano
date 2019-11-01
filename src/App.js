import React from 'react';
import './App.css';
import Octave from './Octave';

const App = () => {
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = ["1", "2", "3"]

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
                    startingPosition={{"whiteKey": startingPosition, "blackKey": startingPosition + 0.3}}
                    />
          })
        }
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
