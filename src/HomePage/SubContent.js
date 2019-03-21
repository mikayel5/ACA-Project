import React, {Component} from 'react';
import './css/Header.css';
import Block from '../Block'

class Subcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.placeholdervalue,
            url: "",
            inputvalue: "",
            videoId: [],
            activeContent: this.props.activecontent,
            iframeTitle: "",
        }
    }



    getInputValue = (event) => {
        this.setState({inputvalue: event.target.value})
    }
    searchByArtist = () => {
        const videoId = [];
        this.setState({ videoId: [] })
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.inputvalue}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        .then(res => res.json())
        .then(myJson => myJson.results.artistmatches.artist[0].name)
        .then(function(name) {
            this.setState({iframeTitle: this.name})
	        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=5&order=relevance&q=${name}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
	            .then(response => response.json())
                .then(myJson =>  {
                    myJson.items.forEach(item =>  
                        {
                            if(item.id.videoId) {
                            videoId.push(item.id.videoId)  
                            }
                            
                        })
                        return videoId;
                    }
                    )
                .then(ids => this.setState({ videoId: ids }))               
            }.bind(this)
        )   
    }

    searchBySong = () => {
        const videoId = [];
        this.setState({videoId: []})
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.inputvalue}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        .then(res => res.json())
        .then(myJson => myJson.results.trackmatches.track[0].name)
        .then(function(name) {
            this.setState({iframeTitle: this.name})
	        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=5&order=relevance&q=${name}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
	            .then(response => response.json())
                .then(myJson =>  {
                    myJson.items.forEach(item =>  
                        {
                            if(item.id.videoId) {
                            videoId.push(item.id.videoId)  
                            }
                            
                        })
                        return videoId;
                    }
                    )
                .then(ids => this.setState({ videoId: ids }))               
            }.bind(this)
        )
    }

    render() {
        return (
            <>
                <div className="searchField">
                    <div className="searchWrapper">
                        <input placeholder={this.state.placeholder} onChange={this.getInputValue} value={this.state.inputvalue}></input>
                        <button onClick={this.state.activeContent === "artist" ? this.searchByArtist.bind(this) : this.searchBySong.bind(this)}>Search</button>
                    </div>
                </div>
                <div className='video_container'>
                    {
                        this.state.videoId.map((id, index) => <Block key={index}title={this.state.iframeTitle}url={`https://www.youtube.com/embed/${id}`}/>)
                    }
                </div>
            </>
        )
    }
}


export default Subcontent;