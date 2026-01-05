import React from 'react'
import './CSS/FeaturesCard.css'

const FeaturesCard = ({iclass,title,desc}) => {
  return (
    <div className="features_card" >
            <i className={iclass}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
  )
}

export default FeaturesCard
