import React, { useState } from 'react'
import './CSS/ContactSection.css'
export default function ContactSection(){
    const [tab,setTab] =useState('contact')
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
                    <button className={tab ==="contact" ? "active" :""} onClick={()=>setTab('contact')}>Contact Us</button>
                    <button className={tab ==="availability" ? "active" :""} onClick={()=>setTab('availability')}>Availability Request</button>
                </div>


                {tab==="contact" ?<ContactForm/>:<AvailabiltyForm/>}
            </div>
        </div>
    </>

  )
}




function ContactForm(){
    return(<>
        <form className='contact-form'>
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



function AvailabiltyForm(){
    return(<>
        <form className="conatc-form">
            <div className="calender">Calender UI</div>

            <div className="conact-grid">
                <select>
                    <option>Select Room</option>
                    <option>Double Room</option>
                    <option>Deluxe Room</option>
                    <option>Superior Room</option>
                    <option>Junior Room</option>
                </select>
                <div className="counter">Adults  - 1 +</div>
                <div className="counter">Childer - 0 +</div>
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
