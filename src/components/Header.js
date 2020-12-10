import React, {Component} from 'react'

class Header extends Component{
    render(){
        return(
            <header>
                <img
                    className="header-img" 
                    src="https://www.hurraki.de/w/images/c/cf/Trollface.jpg" 
                    alt="Problem?" 
                />
                <p>Meme Generator</p>
            </header>
        )
    }
}

export default Header