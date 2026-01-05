import React from 'react'
import './CSS/Testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {

    const testimonials = [
        {
            Name: "Roberta",
            Date: "12 Oct",
            img: "public/Images/testimonial_1.jpg",
            comment: "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud."
        },
        {
            Name: "Roberta",
            Date: "2 Nov",
            img: "public/Images/testimonial_1.jpg",
            comment: "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud."
        },
        {
            Name: "Roberta",
            Date: "3 Dec",
            img: "public/Images/testimonial_1.jpg",
            comment: "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud."
        }
    ]


    return (
        <>
            <section className='testimonial-section'>
                <div className="testimonial-overlay">
                    <h5>Testimonials</h5>
                    <h2>What Clients Says</h2>
                    <div className="testimonial-card">
                        <Swiper pagination={{ clickable: true, }} modules={[Pagination, Navigation]} className="mySwiper" loop={true} >
                            {/* Generate Swiper dynamically */}
                            {testimonials.map((item, index) =>
                                <SwiperSlide>
                                    <div className="testimonials-swiper" key={index}>
                                        <div className="swiper-left">
                                            <img src={item.img} alt={item.Name} /> &emsp;
                                            <p>
                                                {item.Name} <br/>
                                                <small>{item.Date}</small>
                                            </p>
                                        </div>
                                        <div className="swiper-right">
                                            <p>"{item.comment}"</p>
                                        </div>
                                    </div>


                                </SwiperSlide>
                            )}
                        </Swiper>

                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Testimonials
