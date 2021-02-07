import React, { useState, useEffect } from 'react'

// https://picsum.photos/id/237/200/300
// https://api.imgflip.com/get_memes

function MemeGenerator(){
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("https://picsum.photos/id/237/200/300")
    const [allMemeImgs, setAllMemeImgs] = useState("")

    // constructor(){
    //     super()

    //     this.state = {
    //         topText: "",
    //         bottomText: "",
    //         randomImg: "https://picsum.photos/id/237/200/300",
    //         allMemeImgs: "",
    //     }

    //     this.handleChange = this.handleChange.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    // componentDidMount(){
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(response => response.json())
    //     .then(response => {
    //         const { memes } = response.data
    //         this.setState({
    //             allMemeImgs: memes
    //         })
    //     })
    // }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            setAllMemeImgs(memes)
        })
    })

    const handleChange = (event) => {
        setTopText(event.target.value)
    }

    // handleSubmit(event){
    //     event.preventDefault()
    //     const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
    //     const randomMeme = this.state.allMemeImgs[randomNumber].url
    //     this.setState({
    //         randomImg: randomMeme
    //     })
    // }
    return(
        <>
            <form 
            // onSubmit={this.handleSubmit} 
            className="meme-form">
                <input
                    type="text"
                    name="topText" 
                    value={topText}
                    placeholder="Top text"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText" 
                    // value={this.state.bottomText}
                    placeholder="Bottom text"
                    // onChange={this.handleChange}
                />
                <button>Gen</button>
            </form>
            <div className="meme">
                <img 
                    // src={randomImg} 
                    alt=""
                />
                <h2 className="top">
                    {topText}
                </h2>
                <h2 className="bottom">
                    {/* {this.state.bottomText} */}
                </h2>
            </div>
        </>
    )
}

export default MemeGenerator