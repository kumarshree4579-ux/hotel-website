import React from 'react'
import './CSS/AboutUs.css'
import FeaturesCard from './FeaturesCard'
const AboutUs = () => {
  const features = [
    {
      id: 1,
      icon: "fa-solid fa-square-parking",
      title: "Private Parking",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
    },
    {
      id: 2,
      icon: "fa-brands fa-accessible-icon",
      title: "Accessible",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
    },
    {
      id: 3,
      icon: "fa-solid fa-dog",
      title: "Per Friendly",
      desc: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
      id: 4,
      icon: "fa-solid fa-umbrella-beach",
      title: "Patio Garden",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
    }
  ]

  return (
    <>

      <section className='about'>
        <div className="about_content">
          <span className='about_label'>ABOUT US</span>
          <h2 className='about_title'>Makes your self at home and enjoy a unique experience</h2>
          <p className='about_subtitle'>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim.</p>

          <p className='about_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

          <p className='about_sign'>ShreeKumar...the Owner</p>
        </div>



        <div className="about_images">
          <img src="public/Images/home_2.jpg" alt="bedroom" className='image images_main' />
          <img src="public/Images/home_1.jpg" alt="bathroom" className='image image_overlay' />
        </div>


      </section>
      <hr className='about_hr' />

      <section className='features'>
        {features.map((item) =>
          <FeaturesCard key={item.id} iclass={item.icon} title={item.title} desc={item.desc} />

        )}
      </section>
    </>
  )
}

export default AboutUs