import React, { useEffect, useState } from 'react'
import './CSS/Header.css'
// import Logo_back from '/public/Images/logo_black.png'
const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <div className={`header ${scrolled ? "scrolled" : ""}`}>
                <div className="logo">
                    <img
                        src={scrolled ? "public/Images/logo_black.png" : "public/Images/logo_white.png"}
                        alt="logo"
                        className='black_logo' />
                </div>
                {/* laptop menu */}
                <div className="menu">
                    <ul className={scrolled ? "menu-black" : "menu-white"}>
                        <li>Home</li>
                        <li>Rooms</li>
                        <li>Gallery</li>
                        <li>Activities</li>
                    </ul>
                    <button>Contact Us</button>
                </div>


                {/* menu icon */}

                <div onClick={() => setMenuOpen(!menuOpen)} className={`humburger ${scrolled ? "black" : "white"}`}>
                    <i class="bi bi-list"></i>
                </div>
                {menuOpen && (

                    <div className="mobile-menu">
                        <ul>
                            <li onClick={() => setMenuOpen(false)}>Home</li>
                            <li onClick={() => setMenuOpen(false)}>Rooms</li>
                            <li onClick={() => ssetMenuOpen(false)}>Gallery</li>
                            <li onClick={() => setMenuOpen(false)}>Activities</li>
                        </ul>
                    </div>


                )}
            </div>

        </>
    )
}

export default Header