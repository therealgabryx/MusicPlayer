import React from 'react'
import './index.css'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

// components
import LibrarySong from '../LibrarySong'

export default function Library({ songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus, setLibraryStatus, aboutStatus, setAboutStatus }) {
    // handlers
    const handleOuterClick = () => {
        if(aboutStatus) {
            setAboutStatus(!aboutStatus);
        }
        setTimeout(() => {
            setLibraryStatus(!libraryStatus);
        }, 50); 
    }

    return (
        <React.Fragment>
            <div className={`Library ${ libraryStatus ? 'active-library' : '' }`}> 
                <div className="head">
                    <h2>Library</h2> 
                    <a onClick={() => { setAboutStatus(!aboutStatus) }}>
                        <FontAwesomeIcon size='1x' icon={ faInfoCircle } style={{ fontSize:'1.5rem', display:'inline-block', margin:'0.2rem 0 0 2.5rem' }}/>
                    </a>
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
            <div onClick={() => { handleOuterClick() }} className={`Library-back ${ libraryStatus ? 'active-back' : '' }`}></div>
        </React.Fragment>
    )
}
