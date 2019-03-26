import React, {Component} from 'react';
import './index.css';

class Block extends Component{
    constructor (props) {
        super(props)
    }

    render () {
        return ( 
        <>
            <div className="video">
                <iframe title={this.props.title} width="300" height="300"
                    src={this.props.url}
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