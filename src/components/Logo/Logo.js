import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt 
            className='Tilt shadow-2 br4 border'
            tiltMaxAngleX={25} 
            tiltMaxAngleY={25} 
            perspective={1000} 
            transitionSpeed={1500} 
            scale={1.1} 
            style={{height: '150px', width: '150px'}}
            >
                <div className='Tilt-Inner'>
                    <img src={brain} alt='logo' style={{size: '150%', paddingTop: '40px'}} />
                </div>
            </Tilt>
        </div>
    ) 
}

export default Logo