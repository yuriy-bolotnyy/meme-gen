import React from "react";
import "./Meme.css"

const Meme = () => {
    return (
        <div className="inputForm">
            <div className="textInputContainer">
                <input className="header" type="text" placeholder="Shut Up"/>
                <input className="footer" type="text" placeholder="and take"/>
            </div>
                <button>Get a new meme image</button>
        </div>
    )
}

export default Meme