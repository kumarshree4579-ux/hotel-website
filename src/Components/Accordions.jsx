import React, { useState } from 'react'
import './CSS/Accordions.css'
const Accordions = () => {
    const data = [
        {
            title: "Tour Eiffel - Duration 60min",
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
        },
        {
            title: "Tour Eiffel - Duration 60min",
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
        },
        {
            title: "Tour Eiffel - Duration 60min",
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
        },
        {
            title: "Tour Eiffel - Duration 60min",
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
        },
    ]
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordions = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <>
            <section className='accordions'>
                <div className="title">
                    <small>Luxury Hotel Experience</small>
                    <h2>Interior Gallery</h2>
                </div>
                <div className="accordions-container">
                    {data.map((item, index) => (
                        <div className='accordions-item' key={index}>
                            <div className="accordions-header" onClick={() => toggleAccordions(index)}>
                                <h3>{item.title}</h3>
                                <span className='icon'>
                                    {activeIndex === index ? "x" : "+"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="accordions-content">
                                    <p>{item.content}</p>
                                </div>
                            )}


                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Accordions