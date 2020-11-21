import React from 'react'
import './index.css'

export default function Song({ currentSong }) {
    return (
        <div className='Song'>
            <img src={ currentSong.cover } alt={ currentSong.name }/>
            <h2>{ currentSong.name }</h2>
            <h3>{ currentSong.artist }</h3>
        </div>
    )
}
