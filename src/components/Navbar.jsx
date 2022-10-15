import React from "react";
import trollFace from "../../public/assets/epic-troll-face-transparent.png";
import "./Navbar.css"

const Navbar = () => {
    return (
            <header className="navbar">
                <img src={trollFace} alt="troll face" />
                <h2>Meme Generator</h2>
            </header>
    )
}

export default Navbar