import React from 'react';
import './index.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function Player({ audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo }) {
    // event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying); 
        } else { 
            audioRef.current.play(); 
            setIsPlaying(!isPlaying); 
        } 
    } 

    const timeUpdateHandler = (e) => { 
        const currentTime = e.target.currentTime;
        const duration = e.target.duration; 
        setSongInfo({ ...songInfo, currentTime, duration })
    } 

    const getTime = (time) => {
        return(
            // quickly format time in minutes and seconds format 
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        ) 
    } 

    const dragHandler = (e) => { 
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value }); 
    } 

    return (
        <div className='Player'>
            <div className='time-control'>
            <p>{ getTime(songInfo.currentTime) }</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type='range'/>
            <p>{ getTime(songInfo.duration) }</p>
            </div> 
            <div className="play-control"> 
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleDoubleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={ isPlaying ? faPause : faPlay }/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleDoubleRight}/>
            </div> 
        </div>
    )
}
