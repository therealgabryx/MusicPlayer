import React from 'react'
import './index.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function About({ aboutStatus, setAboutStatus }) {
    return (
        <React.Fragment>
            <div className={`About ${ aboutStatus ? 'active-about' : '' }`}>
                <div className="head">
                    <h2>About</h2>
                    <a onClick={() => { setAboutStatus(!aboutStatus) }}>
                        <FontAwesomeIcon size='2x' icon={ aboutStatus ? faAngleRight : faAngleLeft }/>
                    </a>
                </div>
            </div>
            <div></div>
        </React.Fragment>
    )
}
