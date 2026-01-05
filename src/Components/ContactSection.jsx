import React, { useState } from 'react'
import './CSS/ContactSection.css'
export default function ContactSection() {
    const [tab, setTab] = useState('contact')
    return (
        <>
            <div className="contact-wrapper">
                {/* left */}
                <div className="contact-left">
                    <p className='tag'>Luxury Hotel Experience</p>
                    <h2>Address</h2>
                    <p>Baker Street 567, Los Angeles 11023</p>
                    <p> California - US</p>
                    <div className="info">
                        <p><strong>Bookings</strong></p>
                        <p>+91 8090451929</p>
                    </div>
                    <div className="info">
                        <p><strong>Questions</strong></p>
                        <p>shreekumarverma9@gmail.com</p>
                    </div>

                </div>



                {/* right */}

                <div className="contact-right">
                    <div className="tabs">
                        <button className={tab === "contact" ? "active" : ""} onClick={() => setTab('contact')}>Contact Us</button>
                        <button className={tab === "availability" ? "active" : ""} onClick={() => setTab('availability')}>Availability Request</button>
                    </div>


                    {tab === "contact" ? <ContactForm /> : <AvailabiltyForm />}
                </div>
            </div>
        </>

    )
}




function ContactForm() {
     const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        // Handle the form submission logic here
    };
    return (
    <>
        <form className='contact-form' onSubmit={handleSubmit}>
            <div className="conact-grid">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Last name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Telephone' />
            </div>
            <textarea placeholder='Message'></textarea>

            <div className="contact-bottom">
                <span>Are you human? 3+1=?</span>
                <button>Submit</button>
            </div>
        </form>

    </>)
}



function AvailabiltyForm() {
    const [adult, setAdult]= useState(1);
    const [child, setChild]= useState(0);
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        // Handle the form submission logic here
    };
    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="calender">Calender UI</div>

                <div className="conact-grid">
                    <select>
                        <option>Select Room</option>
                        <option>Double Room</option>
                        <option>Deluxe Room</option>
                        <option>Superior Room</option>
                        <option>Junior Room</option>
                    </select>
                    <div className="counter">Adults   <span><button className='span-btn' onClick={()=>adult > 1 && setAdult(adult - 1)}>-</button></span>{adult}<span><button className='span-btn' onClick={()=>setAdult(adult+1)}>+</button></span></div>
                    <div className="counter">Children <span><button className='span-btn' onClick={()=>child>0 && setChild(child-1)}>-</button></span>{child}<span><button className='span-btn' onClick={()=>setChild(child+1)}>+</button></span></div>
                    <input type="text" placeholder='Name and Last name' />
                    <input type="text" placeholder='Email' />
                </div>
                <div className="contact-bottom">
                    <span>Are you human? 3+1=?</span>
                    <button>Submit</button>
                </div>
            </form>


        </>)
}
