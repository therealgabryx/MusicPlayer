import React from 'react'
import './index.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 

export default function Nav({ libraryStatus, setLibraryStatus }) { 
    return (
        <div className='Nav'>
            <h1>music</h1> 
            <button onClick={() => {setLibraryStatus(!libraryStatus)}}>
                <FontAwesomeIcon size='2x' icon={libraryStatus ? faTimes : faBars}/> 
            </button>
        </div> 
    )
}
