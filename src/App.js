import React, { useState } from 'react';

// import global styles
import './styles/app.css' 

// import songs data
import data from './appdata/data'

// Components 
import Player from './components/Player'
import Song from './components/Song'

function App() {  
  // state
  const [songs, setSongs] = useState(data()); 
  const [currentSong, setCurrentSong] = useState(songs[0]); 
  const [isPlaying, setIsPlaying] = useState(false);

  return ( 
    <div className="App">
      <Song currentSong={ currentSong }/>
      <Player currentSong={ currentSong } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying }/>
    </div>
  ); 
} 

export default App;
