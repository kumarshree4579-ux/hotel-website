import React from 'react'
import "./CSS/Hero.css"
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="video-wrapper">
                    <video autoPlay muted loop src="public/Video/hero_video.mp4"></video>
                </div>
                <div className="hero-content">
                    <p>Luxury Hotel Experience</p>
                    <h1>A unique Experience <br />
                        where to stay</h1>
                        <div className='tripAdvison-container'>
                            <img src="public/Images/TripAdvisor_Logo_white.svg" alt="tripAdvison" />
                            
                        </div>
                </div>
            </section>


        </>
    )
}

export default Hero