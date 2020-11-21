import React from 'react'
import './index.css'

// components
import LibrarySong from '../LibrarySong'

export default function Library({ songs, setSongs, setCurrentSong, audioRef, isPlaying }) {
    return (
        <div className='Library'> 
            <h2>Library</h2> 
            <div className="library-songs"> 
                { songs.map((song) => (
                    <LibrarySong songs={songs} setSongs={setSongs} song={song} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} key={song.id}/> 
                )) }  
            </div> 
        </div> 
    )
}
