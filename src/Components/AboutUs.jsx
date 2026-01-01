import React from 'react'
import './CSS/AboutUs.css'
const AboutUs = () => {
  return (
    <>
    
      <section className='about'>
        <div className="about_content">
            <span className='about_label'>ABOUT US</span>
            <h2 className='about_title'>Makes your self at home and enjoy a unique experience</h2>
            <p className='about_subtitle'>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim.</p>

            <p className='about_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <p className='about_sign'>Vedprakash...the Owner</p>
        </div>



        <div className="about_images">
            <img src="public/Images/home_2.jpg" alt="bedroom" className='image images_main'/>
            <img src="public/Images/home_1.jpg" alt="bathroom"  className='image image_overlay'/>
        </div>
      </section>
        {/* <hr /> */}
    </>
  )
}

export default AboutUs