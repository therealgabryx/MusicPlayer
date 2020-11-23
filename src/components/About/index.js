import React from 'react'
import './index.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faInstagram, faReact, faHtml5, faCss3, faJs, faGit, faSass, faJsSquare, faCss3Alt, faNpm, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import ReactSvg from './assets/reactjs-icon.svg'
import FirebaseSvg from './assets/firebase-icon.svg'
import ChillhopPng from './assets/chillhop-logo.png'

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
                <div className="content">
                    <div className="developedby">
                        <p>developed by</p>
                        <p><strong>Gabriele 'Gabryx' Concli</strong></p>
                    </div>
                    <div className="contact"> 
                        <p>find me on</p>
                        <div className="icons"> 
                            <a href="http://linkedin.gabryx.com"> 
                                <FontAwesomeIcon size='1x' icon={faLinkedinIn} alt="LinkedIn"/> 
                            </a> 
                            <a href="http://github.gabryx.com"> 
                                <FontAwesomeIcon size='1x' icon={faGithub} alt="GitHub"/> 
                            </a>
                            <a href="http://ig.gabryx.com"> 
                                <FontAwesomeIcon size='1x' icon={faInstagram} alt="Instagram"/> 
                            </a>
                        </div>
                        <div className="lines"><div/><div/><div/></div>
                    </div> 
                    <div className="tech"> 
                        <div id="title">tech stack</div>
                        {/* <div className="stack-head">
                            <img src={ReactSvg} alt="React"/>
                            <img src={FirebaseSvg} alt="Firebase"/>
                        </div>  */}
                        <div className="stack">
                            <div className="row stack-head">
                                <img src={ReactSvg} alt="React"/>
                                <img src={FirebaseSvg} alt="Firebase"/>
                            </div>
                            <div className="row">
                                <FontAwesomeIcon size='1x' icon={faHtml5} alt="Html5"/>
                                <FontAwesomeIcon size='1x' icon={faCss3Alt} alt="Css3"/>
                                <FontAwesomeIcon size='1x' icon={faJsSquare} alt="Js"/>
                                <FontAwesomeIcon size='1x' icon={faSass} alt="Sass"/>
                            </div>
                            <div className='row'>
                                <FontAwesomeIcon size='1x' icon={faGit} alt="Git"/>
                                <FontAwesomeIcon size='1x' icon={faNpm} alt="Npm"/>
                            </div>
                        </div>
                    </div>
                    <div className="music">
                        <p>music from</p>
                        <img src={ChillhopPng} alt="Chillhop Music" style={{ width:'8rem', display:'inline-block', padding:'0.6rem 0' }}/>
                    </div> 
                    <div className="issue">
                        <p>found an issue?</p> 
                        <a href="https://github.com/therealgabryx/MusicPlayer">fix it on GitHub</a>
                    </div>

                </div> 
            </div>
            <div></div>
        </React.Fragment>
    )
}
