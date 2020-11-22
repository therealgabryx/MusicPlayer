import React, { useState, useRef } from 'react';

// import global styles
import './styles/app.css' 

// import songs data
import data from './appdata/data'

// Components 
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {  
  // state
  const [songs, setSongs] = useState(data()); 
  const [currentSong, setCurrentSong] = useState(songs[0]); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  }); 
  const [libraryStatus, setLibraryStatus] = useState(false);

  // refs
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration })
  } 

  return ( 
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/> 
      <Song currentSong={currentSong}/> 
      <Player songs={songs} setSongs={setSongs} audioRef={audioRef} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo}/>
      <Library audioRef={audioRef} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/> 
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  ); 
} 

export default App;
