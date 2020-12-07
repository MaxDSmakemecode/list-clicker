import React, {Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "",
            allMemeImgs: [],
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
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

    handleClick(){
        this.setState({
            randomImg: this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
        })
        console.log(this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url)
    }

    render(){
        return(
            <React.Fragment>
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
                    <button 
                        onClick={this.handleClick}
                    >Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </React.Fragment>
        )
    }
}

export default MemeGenerator