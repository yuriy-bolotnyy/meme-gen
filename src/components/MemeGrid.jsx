import React from "react";
import "./MemeGrid.css"

const MemeGrid = () => {
    return (
        <form className="inputGrid">
            <input className="top" type="text" placeholder="Top text"/>
            <input className="bottom" type="text" placeholder="Bottom text"/>
            <button>Get a new meme image</button>
        </form>
    )
}

export default MemeGrid