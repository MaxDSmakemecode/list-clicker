import React, {Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://picsum.photos/id/237/200/300",
            allMemeImgs: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            this.setState({
                allMemeImgs: memes
            })
        })
    }

    handleChange(event){
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomImgUrl = this.state.allMemeImgs[randomNumber].url
        this.setState({
            randomImg: randomImgUrl
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top text"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom text"
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                    <img 
                        src={this.state.randomImg} 
                        alt=""
                    />
                </div>
            </div>
        )
    }
}

export default MemeGenerator