// import React, {useState, useEffect} from 'react'

// https://picsum.photos/id/237/200/300
// https://api.imgflip.com/get_memes

// function MemeGenerator(){
//     const [inputs, setInputs] = useState({
//         topText: "",
//         bottomText: "",
//     })
//     // const handleChange = inputName => ({target}) => setInputs(state => ({...state, [inputName]:target.value}))
//     const [randomImg, setRandomImg] = useState("https://picsum.photos/id/237/200/300")
//     const [allMemeImgs, setAllMemeImgs] = useState("")

// useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//     .then(response => response.json())
//     .then(response => {
//         const { memes } = response.data
//         setAllMemeImgs(memes)
//     })
// })

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const randomNumber = Math.floor(Math.random() * allMemeImgs.length)
//         const randomMeme = allMemeImgs[randomNumber].url
//         setRandomImg(randomMeme)
//     }
//     return(
//         <>
//             <form
//                 onSubmit={handleSubmit}
//                 className="meme-form"
//             >
//                 <input
//                     type="text"
//                     key="topText"
//                     name="topText"
//                     value={inputs.topText}
//                     placeholder="Top text"
//                     onChange={({target}) => setInputs(state => ({...state, topText:target.value}))}
//                 />
//                 <input
//                     type="text"
//                     key="bottomText"
//                     name="bottomText"
//                     value={inputs.bottomText}
//                     placeholder="Bottom text"
//                     onChange={({target}) => setInputs(state => ({...state, bottomText:target.value}))}
//                 />
//                 <button>Gen</button>
//             </form>
//             <div className="meme">
//                 <img
//                     src={randomImg}
//                     alt=""
//                 />
//                 <h2 className="top">
//                     {inputs.topText}
//                 </h2>
//                 <h2 className="bottom">
//                     {inputs.bottomText}
//                 </h2>
//             </div>
//         </>
//     )
// }

// export default MemeGenerator




// PRACTICE AREA ******************************************************************************
import React from 'react'

class MemeGenerator extends React.Component {
    constructor(){
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://picsum.photos/id/237/200/300",
            allMemeImgs: "",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => this.setState({
            allMemeImgs: response
        }))
    }

    render(){
        return(
            <React.Fragment>
                <form className="meme-form">
                    <input 
                        type="text" 
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="Top text"
                    />
                    <input 
                        type="text" 
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder="Bottom text"
                    />
                    <button>GEN!</button>
                </form>
                <div className="meme">
                    <img 
                        src={this.state.randomImg} 
                        alt="" 
                    />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </React.Fragment>
        )
    }
}

export default MemeGenerator