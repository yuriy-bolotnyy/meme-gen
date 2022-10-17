import React from "react";
import "./MemeGrid.css"
// import "../memesData"
import memesData from "../memesData";

const MemeGrid = () => {
    const [meme, setMeme] = React.useState({
        topText: "Top text", 
        bottomText: "Bottom text", 
        imgUrl: "https://i.imgflip.com/tau4.jpg",
        allMemeImages: memesData,
        randomImg: () => {
            const randomEl = Math.floor(Math.random()*allMemeImages.data.memes.length)
            return memsData.data.memes[randomEl].url
        } 
    })

    console.log(`Top text: ${meme.topText} | Bottom text: ${meme.bottomText} | img:${meme.imgUrl}`)

    let randomIndex = Math.floor(Math.random()*memesData.data.memes.length)
    console.dir(memesData.data.memes[randomIndex].url)

    const randomImg = (memsData) => {
        const randomEl = Math.floor(Math.random()*memsData.data.memes.length)
        return memsData.data.memes[randomEl].url
    } 

    const cnahgeImg = () => {
        // document.querySelector(".imgContainer>img").src = randomImg()
        // setImgUrl(randomImg())
        setMeme(prevMeme => ({...prevMeme, imgUrl:randomImg(meme.allMemeImages)}))
        console.log(`updated to ---> Top text: ${meme.topText} | Bottom text: ${meme.bottomText} | img:${meme.imgUrl}`)

    }


    return (
        <div className="inputGrid">
            <input className="top" type="text" placeholder={meme.topText}/>
            <input className="bottom" type="text" placeholder={meme.bottomText}/>
            <button onClick={cnahgeImg}>Get a new meme image</button>

            <div className="imgContainer">
                {/* <img src="https://i.imgflip.com/emccr.jpg" alt="image" /> */}
                {/* <img src={randomImg()} alt="image" /> */}
                <img src={meme.imgUrl} alt="image" />
                {/* <img src={imgUrl} alt="imageUrl" /> */}
            </div>
            
        </div>
    )
}

export default MemeGrid