import React, {Component} from 'react'

class MemeGenerator extends Component{
    state = {
        topText: "",
        bottomText: "",
        randomImg: "https://picsum.photos/id/237/200/300",
        allMemeImgs: "",
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            this.setState({
                allMemeImgs: memes
            })
            console.log(this.state.allMemeImgs)
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMeme
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
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
                        placeholder="Top text"
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img 
                        src={this.state.randomImg}
                        alt=""
                    />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>            
        )
    }
}

export default MemeGenerator