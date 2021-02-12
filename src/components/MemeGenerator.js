import React, { useState, useEffect } from 'react'

// https://picsum.photos/id/237/200/300
// https://api.imgflip.com/get_memes

function MemeGenerator(){
    const [inputs, setInputs] = useState({
        topText: "",
        bottomText: "",
    })
    // const handleChange = inputName => ({target}) => setInputs(state => ({...state, [inputName]:target.value}))
    const [randomImg, setRandomImg] = useState("https://picsum.photos/id/237/200/300")
    const [allMemeImgs, setAllMemeImgs] = useState("")

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            setAllMemeImgs(memes)
        })
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemeImgs.length)
        const randomMeme = allMemeImgs[randomNumber].url
        setRandomImg(randomMeme)
    }
    return(
        <>
            <form 
                onSubmit={handleSubmit} 
                className="meme-form"
            >
                <input
                    type="text"
                    key="topText"
                    name="topText" 
                    value={inputs.topText}
                    placeholder="Top text"
                    onChange={({target}) => setInputs(state => ({...state, topText:target.value}))}
                />
                <input
                    type="text"
                    key="bottomText"
                    name="bottomText" 
                    value={inputs.bottomText}
                    placeholder="Bottom text"
                    onChange={({target}) => setInputs(state => ({...state, bottomText:target.value}))}
                />
                <button>Gen</button>
            </form>
            <div className="meme">
                <img 
                    src={randomImg} 
                    alt=""
                />
                <h2 className="top">
                    {inputs.topText}
                </h2>
                <h2 className="bottom">
                    {inputs.bottomText}
                </h2>
            </div>
        </>
    )
}

export default MemeGenerator