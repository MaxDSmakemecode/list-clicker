import React, {Component} from 'react'

// https://picsum.photos/id/237/200/300
// https://api.imgflip.com/get_memes

class MemeGenerator extends Component{
    constructor(){
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://picsum.photos/id/237/200/300",
            allMemeImgs: [],
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            console.log(memes[0])
            this.setState({ allMemeImgs: memes })
        })
    }

    handleChange(event){
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length + 1)
    }

    render(){
        return(
            <div>
                <form className="meme-form">
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
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator