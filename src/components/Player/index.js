import React from 'react';
import './index.css'


// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function Player() {
    return (
        <div className='Player'>
            <div className='time-control'>
                <p>Start Time</p>
                <input type='range'/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleDoubleLeft}/>
                <FontAwesomeIcon className='play' size='2x' icon={faPlay}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleDoubleRight}/>
            </div>
        </div>
    )
}
