import React from "react";
import "./MemeGrid.css"
// import "../memesData"
import memesData from "../memesData";

const MemeGrid = () => {
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
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

    const handleChange = (event) => {
        setMeme(prevState => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    }
    

    return (
        <main className="inputGrid">
            <input className="top" name="topText" type="text" placeholder="Top text" onChange={handleChange}/>
            <input className="bottom" name="bottomText" type="text" placeholder="Bottom text" onChange={handleChange}/>
            <button onClick={cnahgeImg}>Get a new meme image</button>

            <div className="meme">
                {/* <img src="https://i.imgflip.com/emccr.jpg" alt="image" /> */}
                {/* <img src={randomImg()} alt="image" /> */}
                <span className="helper"></span><img src={meme.imgUrl} alt="image" className="meme--image"/>
                {/* <img src={imgUrl} alt="imageUrl" /> */}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default MemeGrid