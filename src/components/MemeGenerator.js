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
            console.log(this.state.allMemeImgs)
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
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMeme
        })
    }
    
    render(){
        return(
            <main>
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
                        placeholder="Bottom text"
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img 
                        src={this.state.randomImg} 
                        alt="Meme image"
                    />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </main>
        )
    }
}

export default MemeGenerator