import React, { useEffect } from 'react';
import './index.css'

// utils
import { playAudio } from '../../util'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function Player({ songs, setSongs, audioRef, currentSong, setCurrentSong, isPlaying, setIsPlaying, songInfo, setSongInfo }) {
    // useEffect 
    useEffect(() => {
        const newSongs = songs.map((savedSong) => {
            if (savedSong.id === currentSong.id) {
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
    }, [currentSong]); 
    
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

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id); 

        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]); 
        } 

        if (direction === 'skip-back') { 
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]); 
                playAudio(isPlaying, audioRef); 
                return;
            } else {
                setCurrentSong(songs[(currentIndex - 1) % songs.length]); 
            }
        } 

        playAudio(isPlaying, audioRef); 
    } 

    return (
        <div className='Player'>
            <div className='time-control'>
            <p>{ getTime(songInfo.currentTime) }</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type='range'/>
            <p>{ songInfo.duration ? getTime(songInfo.duration) : '0:00' }</p>
            </div> 
            <div className="play-control"> 
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className='skip-back' size='2x' icon={faAngleDoubleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={ isPlaying ? faPause : faPlay }/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className='skip-forward' size='2x' icon={faAngleDoubleRight}/>
            </div> 
        </div>
    )
}
