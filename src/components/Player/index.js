import React, { useEffect, useState } from 'react';
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

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)` 
    } 

    // state
    const [isSkipForwardClicked, setIsSkipForwardClicked] = useState(false);
    const [isSkipBackwardsClicked, setIsSkipBackwardsClicked] = useState(false);

    return (
        <div className='Player'>
            <div className='time-control'>
            <p>{ getTime(songInfo.currentTime) }</p>
                <div style={{background:`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track"> 
                    <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type='range'/>
                    <div style={trackAnim} className="animate-track"></div>
                </div>
            <p>{ songInfo.duration ? getTime(songInfo.duration) : '0:00' }</p>
            </div> 
            <div className="play-control"> 
                <a onClick={() => skipTrackHandler('skip-back')} onTouchStart={() => { setIsSkipBackwardsClicked(!isSkipBackwardsClicked) }} onTouchEnd={() => { setIsSkipBackwardsClicked(!isSkipBackwardsClicked) }} style={{ color:`${ isSkipBackwardsClicked ? 'darkgray' : 'black' }` }} >
                    <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleDoubleLeft}/>
                </a>
                <a onClick={playSongHandler}>
                    <FontAwesomeIcon className='play' size='2x' icon={ isPlaying ? faPause : faPlay }/>
                </a>
                <a onClick={() => skipTrackHandler('skip-forward')} onTouchStart={() => { setIsSkipForwardClicked(!isSkipForwardClicked) }} onTouchEnd={() => { setIsSkipForwardClicked(!isSkipForwardClicked) }} style={{ color:`${ isSkipForwardClicked ? 'darkgray' : 'black' }` }}>
                    <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleDoubleRight}/> 
                </a> 
            </div> 
        </div> 
    ) 
} 
