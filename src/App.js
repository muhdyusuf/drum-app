
import { useState,useEffect } from 'react';
import './App.css';


function App() {
  
  function  playAudio(e) {
    
      document.getElementById('display').innerText=e.target.id.replace(/-/g," ")
      document.getElementById(e.target.innerText).play()

  }
  useEffect(() => {
    function handleKey(e){
        let target=document.getElementById(e.key.toUpperCase())
        if(!target) return
        target.parentElement.click()
      }

    window.addEventListener('keydown', handleKey);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [])
  
  
  return (
    <div className="App"   >
     <div id="drum-machine">
       <div id="display">
         
       </div>
       <div id="drum-pad">
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Heater-1'>Q
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id='Q'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Heater-2'>W
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id='W'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Heater-3'>E
          <audio className='clip' src="
          https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id='E'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Heater-4'>A
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id='A'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Clap'>S
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id='S'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Open-HH'>D
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id='D'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id="Kick-n'-Hat">Z
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id='Z'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Kick'>X
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id='X'></audio>
          </div>
          <div onClick={(e)=>playAudio(e)}  className='drum-pad' id='Closed-HH'>C
          <audio className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id='C'></audio>
          </div>
       </div>
     </div>
      

      

      
      
    </div>
  );
}

export default App;
