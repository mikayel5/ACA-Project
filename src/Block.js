import React, {Component} from 'react';
import './index.css';

class Block extends Component{
    constructor (props) {
        super(props)
        this.state = {
            title: this.props.title,
            url: this.props.url,
        }
    }

    videoClose = () => {
        
    }
    

    render () {
        return ( 
        <>
            <div className="video">
                <iframe title={this.state.title} width="300" height="300"
                    src={this.state.url}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </>
        )
    }
}





export default Block;