import React from 'react'
import "./CSS/Facilities.css"
import FeaturesCard from './FeaturesCard'

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      icon: "fa-solid fa-bath",
      title: "Large Bath Room",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
    },
    {
      id: 2,
      icon: "fa-solid fa-wifi",
      title: "High Speed Wifi",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
    },
    {
      id: 3,
      icon: "fa-solid fa-temperature-arrow-down",
      title: "Air Condition",
      desc: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
      id: 4,
      icon: "fa-solid fa-hands-bubbles",
      title: "Wahsing Machine",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
    },
  ]
  return (
    <section className='main-facilities'>
      <div className="facilities-title">
        <small>Luxury Hotel Experience</small>
        <h2>Main Facilities</h2>
      </div>
        <div className="features">
          {facilities.map((item) =>
            < FeaturesCard key={item.id} iclass={item.icon} title={item.title} desc={item.desc} />
          )}
        </div>
        <div className="marquee">
          <div className="track">
            <div className="content">
             &nbsp; Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience
            </div>
          </div>
        </div>
    </section>
  )
}

export default Facilities
