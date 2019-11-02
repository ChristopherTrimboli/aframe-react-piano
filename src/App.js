import React from 'react';
import './App.css';
import Octave from './Octave';

const App = () => {
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = ["1", "2", "3", "4", "5", "6", "7", "8"]

  let startingPosition = -20;

  return (
    <div className="App">
            <a id="enterVRButton" href="#">Enter VR</a>

      <a-scene vr-mode-ui="enterVRButton: #enterVRButton" inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">

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
