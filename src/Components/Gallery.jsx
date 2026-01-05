import React from 'react'
import './CSS/Gallery.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';



const Gallery = () => {

    const gallery = [
        {
            id: 1,
            img: "public/Images/1.jpg",
            alt: "Room"
        },
        {
            id: 2,
            img: "public/Images/2.jpg",
            alt: "Room"
        },
        {
            id: 3,
            img: "public/Images/3.jpg",
            alt: "Room"
        },
        {
            id: 4,
            img: "public/Images/4.jpg",
            alt: "Room"
        },
        {
            id: 5,
            img: "public/Images/5.jpg",
            alt: "Room"
        },
    ]
    return (
        <section className='gallery'>
            <div className="title">
                <small>Luxury Hotel Experience</small>
                <h2>Interior Gallery</h2>
            </div>
            <div className="gallery_swiper">
                <Swiper navigation={true} loop={true} slidesPerView={3} centeredSlides={true} spaceBetween={30} modules={[Navigation]} className="gallery-swiper-slide" >
                    {gallery.map((item) =>
                        <SwiperSlide>
                            <div className="Swiper-card" key={item.id}>
                                <img src={item.img} alt={item.alt} />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="gallery-btn">
                <button>
                    FullScreen Gallery
                </button>
            </div>


           
        </section>
    )
}

export default Gallery
