import React from 'react'
import './index.css'

export default function Song({ currentSong, isPlaying }) {
    return (
        <div className='Song'>
            <div className={`cover ${ isPlaying ? 'cover-active' : '' }`}>
                <img src={ currentSong.cover } alt={ currentSong.name }/>
                <div className={`inner-circle ${ isPlaying ? 'breathe-inner' : '' }`} style={{ background: currentSong.color[1] }}></div> 
                <div className={`outer-circle ${ isPlaying ? 'breathe-outer' : '' }`} style={{ background: currentSong.color[0] }}></div> 
            </div> 
            <h2>{ currentSong.name }</h2>
            <h3>{ currentSong.artist }</h3> 
        </div> 
    )
}
