import React, {Component} from 'react';
import './index.css';

class Block extends Component{
    constructor (props) {
        super(props)
    }  


    
    render (){
        return(
        <div className = "blocks">
            <div className = "info">
                <div className = "video">
                <iframe width="300" height="200"
                        src={this.props.url}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                 </iframe>
    
                </div>
                <div className = "metadata">
                    <p className = "title"></p>
                    <p className = "description"></p>

                </div>

            </div>

        </div>
        )
    }
}





export default Block;