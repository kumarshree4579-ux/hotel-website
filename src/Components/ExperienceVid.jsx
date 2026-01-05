import React from 'react'
import "./CSS/ExperienceVid.css"

const ExperienceVid = () => {
    return (
        <section className='experience-vid'>
            <div className="section_video">
                <video autoPlay muted loop src='public/Video/video_1.mp4'>
                </video>
            </div>
            <div className="section_content">
                <div className="title">
                    <small>Luxury Hotel Experience</small>
                    <h2>Unique and Luxury Rooms<br />for your stay</h2>
                </div>
            </div>
        </section>
    )
}

export default ExperienceVid
