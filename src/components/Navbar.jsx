import React from "react";
import trollFace from "../../public/assets/epic-troll-face-transparent.png";
import "./Navbar.css"

const Navbar = () => {
    return (
            <nav className="navbar">
                <div className="navbar--img-container">
                    <img src={trollFace} alt="troll face" />
                </div>
                <div>
                    <span className="navbar--text">Meme Generator</span>
                </div>
                 
            </nav>
    )
}

export default Navbar