import React from 'react'
import './index.css'

// utils
import { playAudio } from '../../util'

export default function LibrarySong({ songs, setSongs, song, setCurrentSong, audioRef, isPlaying, libraryStatus, setLibraryStatus }) {
    const songSelectHandler = () => { 
        setCurrentSong(song);
        setLibraryStatus(!libraryStatus);
        // add active state 
        const newSongs = songs.map(savedSong => {
            if(savedSong.id === song.id) {
                return {
                    ...savedSong,
                    active: true 
                }
            } else {
                return {
                    ...savedSong,
                    active: false 
                }
            } 
        });  

        setSongs(newSongs); 

        // check if the song is playing 
        playAudio(isPlaying, audioRef);
    } 
    
    return (
        <div onClick={songSelectHandler} className={`LibrarySong ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name}/>
            <div className='song-description'>
                <h3>{song.name}</h3>  
                <h4>{song.artist}</h4>
            </div>
        </div> 
    )
}
