import React from 'react';

// import global styles
import './styles/app.css'

// Components 
import Player from './components/Player'
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;
