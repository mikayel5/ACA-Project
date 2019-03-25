import React, {Component} from 'react';
import Block from '../Block';
import './css/Header.css';

class SongContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistimg: this.props.artistimg,
            artistname: this.props.artisname, 
            songname: this.props.songname,
            videoId: [],
            isLoaded: false,
        }
    }
    goYoutube = () => {
        const videoId = [];
        this.setState({videoId, isLoaded: false,})
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&order=relevance&q=${this.state.songname}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
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
            .then(videoId => this.setState({ videoId, isLoaded: true, }))
            console.log(videoId)

            
    }

    render() {
        return(
            <>
                <div className="song-item">
                    <div className="artist-name">
                        {this.state.artistname}
                    </div>
                    <div className="artist-img">
                        <img src={this.state.artistimg} />
                    </div>
                    <div className="song-name">
                        {this.state.songname}
                    </div>
                    <button onClick={this.goYoutube} className="btn go-youtube">Listen</button>
                </div>
                <div>
                    {
                        this.state.isLoaded ? <Block url={`https://www.youtube.com/embed/${this.state.videoId}`}/> : null
                    }
                </div>
            </>
        )
    }
}  


export default SongContainer;