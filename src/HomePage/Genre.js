import React, {Component} from 'react';
import './css/Header.css';
import Block from '../Block';

class Genre extends Component {
    constructor() {
        super()
        this.state = {
            videoIdArray: [],
            iframeTitle: "",
        }
    }

    genreSearchClick = (genre) => {
        const videoIdArray = [];
        this.setState({videoIdArray: []})
        fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        .then(res => res.json())
        .then(data => data.tracks.track)
        .then(function(tracksArray) 
                {
                    tracksArray.forEach(track => {
                        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&order=relevance&q=${track.name}${track.artist.name}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data.items[0].id.videoId)
                            videoIdArray.push(data.items[0].id.videoId)
                            return videoIdArray
                        })
                        .then(videoIdArray => this.setState({videoIdArray,}))
                    })
                }.bind(this)
        )
    }

    render () {
        return (
            <>
                <div className="genres">
                    <button onClick={() => this.genreSearchClick("pop")}>POP</button>
                    <button onClick={() => this.genreSearchClick("Hip-Hop")}>HIP-HOP</button>
                    <button onClick={() => this.genreSearchClick("rock")}>ROCK</button>
                    <button onClick={() => this.genreSearchClick("rap")}>RAP</button>
                    <button onClick={() => this.genreSearchClick("jazz")}>JAZZ</button>
                    <button onClick={() => this.genreSearchClick("electronic")}>ELECTRONIC</button>
                    <button onClick={() => this.genreSearchClick("classical")}>CLASSICAL</button>
                    <button onClick={() => this.genreSearchClick("soundtrack")}>SOUNDTRACK</button>
                </div>
                <div className='video_container'>
                    {
                        this.state.videoIdArray.map((id, index) => <Block key={index} url={`https://www.youtube.com/embed/${id}`}/>)
                    }
                </div>
            </>
        )
    }
}

export default Genre;
