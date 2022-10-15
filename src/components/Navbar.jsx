import React from "react";
import trollFace from "../../public/assets/epic-troll-face-transparent.png";
import "./Navbar.css"

const Navbar = () => {
    return (
            <header className="navbar">
                {/* <div className="navbar--img-container"> */}
                    <img src={trollFace} alt="troll face" />
                {/* </div> */}
                {/* <div> */}
                    <h2>Meme Generator</h2>
                {/* </div> */}
                 
            </header>
    )
}

export default Navbar