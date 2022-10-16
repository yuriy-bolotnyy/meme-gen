import React from "react";
import "./MemeGrid.css"
// import "../memesData"
import memesData from "../memesData";

const MemeGrid = () => {
    let randomIndex = Math.floor(Math.random()*memesData.data.memes.length)
    console.dir(memesData.data.memes[randomIndex].url)

    const randomImg = () => {
        const randomEl = Math.floor(Math.random()*memesData.data.memes.length)
        return memesData.data.memes[randomEl].url
    } 

    const cnahgeImg = () => {
        document.querySelector(".imgContainer>img").src = randomImg()
    }

    return (
        <div className="inputGrid">
            <input className="top" type="text" placeholder="Top text"/>
            <input className="bottom" type="text" placeholder="Bottom text"/>
            <button onClick={cnahgeImg}>Get a new meme image</button>

            <div className="imgContainer">
                {/* <img src="https://i.imgflip.com/emccr.jpg" alt="image" /> */}
                <img src={randomImg()} alt="image" />
            </div>
            
        </div>
    )
}

export default MemeGrid