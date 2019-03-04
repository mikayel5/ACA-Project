import React, {Component} from 'react';
import './css/Header.css';

class Content extends Component {

    // eventHandler = (event) => {
    //     event.target.parentNode.childNodes.forEach(button => {
    //         if (button === event.target) {
    //             button.style.backgroundColor = "red"
    //         } else {
    //             button.style.background = "transparent"
    //         }
    //     });
        
    // }

    render (){
        return (
            <div className = "main">
                <div className = "tabs">
                    <button onClick={this.eventHandler}>About Artist</button>
                    <button onClick={this.eventHandler}>Song Name</button>
                    <button onClick={this.eventHandler}>Genres</button>
                        
                </div>
                <div className="searchField" id = "bySongName">
                    <div className="searchWrapper">
                        <input placeholder= "Search Song"></input>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Content;