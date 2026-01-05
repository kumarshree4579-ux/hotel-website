import React, { useRef } from 'react'
import './CSS/Rooms.css'

const Rooms = () => {
    const rooms = [
        {
            id: 1,
            title: "Double Room",
            price: "From $150 / Night",
            image: "public/Images/1.jpg",
            desc: {
                size: 15,
                unit: "m2",
                extra: "King Size Bed"
            }
        },
        {
            id: 2,
            title: "Delux Room",
            price: "From $190 / Night",
            image: "public/Images/2.jpg",
            desc: {
                size: 21,
                unit: "m2",
                extra: "Balcony"
            }
        },
        {
            id: 3,
            title: "Spurior Room",
            price: "From $240 / Night",
            image: "public/Images/3.jpg",
            desc: {
                size: 24,
                unit: "m2",
                extra: "Garden View"
            }
        },
        {
            id: 4,
            title: "Double Room",
            price: "From $150 / Night",
            image: "public/Images/4.jpg",
            desc: {
                size: 26,
                unit: "m2",
                extra: "Patio View"
            }
        },
         {
            id: 5,
            title: "Double Room",
            price: "From $150 / Night",
            image: "public/Images/4.jpg",
            desc: {
                size: 26,
                unit: "m2",
                extra: "Patio View"
            }
        },
         {
            id: 6,
            title: "Double Room",
            price: "From $150 / Night",
            image: "public/Images/4.jpg",
            desc: {
                size: 26,
                unit: "m2",
                extra: "Patio View"
            }
        },
         {
            id: 7,
            title: "Double Room",
            price: "From $150 / Night",
            image: "public/Images/4.jpg",
            desc: {
                size: 26,
                unit: "m2",
                extra: "Patio View"
            }
        },
         {
            id: 8,
            title: "Double Room",
            price: "From $150 / Night",
            image: "public/Images/4.jpg",
            desc: {
                size: 26,
                unit: "m2",
                extra: "Patio View"
            }
        },
    ]



    const slideRef = useRef(null);

// Rewrite from here
const CARD_WIDTH = 420; // 400 + gap (adjust if needed)

const scrollLeft = () => {
    const slider = slideRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft <= 0) {
        // if at first → jump to last
        slider.scrollLeft = maxScroll;
    } else {
        slider.scrollBy({
            left: -CARD_WIDTH,
            behavior: "smooth",
        });
    }
};

const scrollRight = () => {
    const slider = slideRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 5) {
        // if at last → jump to first
        slider.scrollLeft = 0;
    } else {
        slider.scrollBy({
            left: CARD_WIDTH,
            behavior: "smooth",
        });
    }
};


    
    // const scrollLeft = () => {
    //     slideRef.current.scrollBy({
    //         left: -400,
    //         behavior: "smooth"
    //     })
    // }
    // const scrollRight = () => {
    //     slideRef.current.scrollBy({
    //         left: 400,
    //         behavior: "smooth"
    //     })
    // }
    return (
        <>
            <section className='rooms'>
                <div className="title">
                    <small>
                        Luxury experience
                    </small>
                    <h2>
                        Our Rooms
                    </h2>
                </div>

                <div className="slide-wrapper">
                    <button className='arrow left' onClick={scrollLeft}><i className="bi bi-arrow-left"></i></button>
                    <div className="room-slider" ref={slideRef}>
                        {rooms.map((room) => (
                            <div className="card" key={room.id}>
                                <div className="image-box">
                                    <img src={room.image} alt={room.title} />
                                </div>
                                <div className="card-content">
                                    <span>{room.price}</span>
                                    <h3>{room.title}</h3>
                                    <span className='desc'>{room.desc.size}m<sup>2</sup>-{room.desc.extra}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='arrow right' onClick={scrollRight}><i className="bi bi-arrow-right"></i></button>
                </div>
            </section>
        </>
    )
}

export default Rooms