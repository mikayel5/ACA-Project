import React, {Component} from 'react';
import './css/Header.css';

const clickedButtonStyle = {
    artistSearchButton: {
        backgroundColor: "red",
    },
    songSearchButton: {
        backgroundColor: "",
    },
    genreSearchButton: {
        backgroundColor: "",
    }
}

class Content extends Component {

    constructor (props) {
        super(props)
        this.state = { 
            style: clickedButtonStyle,
            placeholder: "Search Artist"
        };      
    }

    eventHandler = (event) => {
        if (event.target.value === "artist") {
            this.setState({ 
                style: {
                    artistSearchButton: {
                        backgroundColor: "red",
                    },
                },
                placeholder: "Search Artist",
            })
        }
        if (event.target.value === "song") {
            this.setState({ 
                style: {
                    songSearchButton: {
                        backgroundColor: "red",
                    },
                },
                placeholder: "Search Song",
            })
        }
        if (event.target.value === "genre") {
            this.setState({ 
                style: {
                    genreSearchButton: {
                        backgroundColor: "red",
                    },
                },
                placeholder: "Search Genre",
            })
        }
    }

    render (){
        return (
            <div className="main">
                <div className="tabs">
                    <button style={this.state.style.artistSearchButton} onClick={this.eventHandler} value="artist">About Artist</button>
                    <button style={this.state.style.songSearchButton} onClick={this.eventHandler} value="song">Song Name</button>
                    <button style={this.state.style.genreSearchButton} onClick={this.eventHandler} value="genre">Genres</button>
                </div>
                <div className="searchField" id ="bySongName">
                    <div className="searchWrapper">
                        <input placeholder={this.state.placeholder}></input>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Content;