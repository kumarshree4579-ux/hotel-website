import React, { useRef } from 'react'
import './CSS/Rooms.css'
const Rooms = () => {
const rooms = [
    {
        id:1,
        title:"Double Room",
        price:"From $150 / Night",
        image:"public/Images/1.jpg"
    },
    {
        id:2,
        title:"Delux Room",
        price:"From $190 / Night",
        image:"public/Images/2.jpg"
    },
    {
        id:3,
        title:"Spurior Room",
        price:"From $240 / Night",
        image:"public/Images/3.jpg"
    },
    {
        id:4,
        title:"Double Room",
        price:"From $150 / Night",
        image:"public/Images/4.jpg"
    },
]



const slideRef = useRef(null);
const scrollLeft=()=>{
    slideRef.current.scrollBy({
        left:-350,
        behavior:"smooth"
    })
}
const scrollRight=()=>{
slideRef.current.scrollBy({
        left:350,
        behavior:"smooth"
    })
}
  return (
  <>
  <div className="slide-wrapper">
  <button className='arrow left' onClick={scrollLeft}><i class="bi bi-arrow-left"></i></button>
    <div className="room-slider" ref={slideRef}>
        {rooms.map((room)=>(
            <div className="card" key={room.id}>
                <div className="image-box">
                    <img src={room.image} alt={room.title} />
                </div>
                <div className="card-content">
                    <span>{room.price}</span>
                    <h3>{room.title}</h3>
                </div>
            </div>
        ))}

    </div>

    <button className='arrow right' onClick={scrollRight}><i class="bi bi-arrow-right"></i></button>
   </div>
   </>
  )
}

export default Rooms