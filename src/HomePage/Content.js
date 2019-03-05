import React, {Component} from 'react';
import './css/Header.css';
import Block from '../Block';

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

const videoId = [];
class Content extends Component {

    constructor (props) {
        super(props)
        this.state = { 
            style: clickedButtonStyle,
            placeholder: "Search Artist",
            inputValue: "",
            videoId: [],
        };      
    }

    inputChanged = (event) => {
        this.setState( {...this.state, inputValue: event.target.value} )
    }
    
    searchClick =  () => {
        if (this.state.inputValue === "") {
            return;
        }
        fetch (`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=3&order=relevance&q=${this.state.inputValue}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
        .then(response => response.json())
        .then(myJson => myJson.items.forEach(item => videoId.push(item.id.videoId)))
        this.setState( { ...this.state, videoId: videoId } )
        console.log(this.state)
        
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
                        <input placeholder={this.state.placeholder} onChange={this.inputChanged}></input>
                        <button onClick = {this.searchClick}>Search</button>
                    </div>
                </div>
                <div className =''>
                {
                    videoId.forEach(id => <Block url={`https://www.youtube.com/embed/ + ${id}`}/>)
                }
                </div>
            </div>
        )
    }

}

export default Content;