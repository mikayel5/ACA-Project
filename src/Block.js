import React, {Component} from 'react';
import './index.css';

class Block extends Component{


    render (){
        return(
        <div className = "blocks">
            <div className = "info">
                <div className = "video">

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