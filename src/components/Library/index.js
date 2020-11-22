import React from 'react'
import './index.css'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// components
import LibrarySong from '../LibrarySong'

export default function Library({ songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus, setLibraryStatus }) {
    return (
        <div className={`Library ${ libraryStatus ? 'active-library' : '' }`}> 
            <div className="head">
                <h2>Library</h2> 
                <a onClick={() => { setLibraryStatus(!libraryStatus) }}>
                    <FontAwesomeIcon size='2x' icon={ libraryStatus ? faAngleRight : faAngleLeft }/>
                </a>
            </div>
            <div className="library-songs"> 
                { songs.map((song) => (
                    <LibrarySong songs={songs} setSongs={setSongs} song={song} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}  key={song.id}/> 
                )) }  
            </div> 
        </div> 
    )
}
