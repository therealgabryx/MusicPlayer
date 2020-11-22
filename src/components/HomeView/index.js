import React from 'react'
import './index.css'

// components 
import Player from '../Player'
import Song from '../Song'
import Nav from '../Nav'

export default function HomeView({ libraryStatus, setLibraryStatus, currentSong, songs, setSongs, audioRef, setCurrentSong, isPlaying, setIsPlaying, songInfo, setSongInfo }) {
    return (
        <div className='HomeView'>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
            <Song currentSong={currentSong}/>
            <Player songs={songs} setSongs={setSongs} audioRef={audioRef} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo}/>
        </div> 
    )
}
