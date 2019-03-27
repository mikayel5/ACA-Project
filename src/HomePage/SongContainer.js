import React, {Component} from 'react';
import './css/Header.css';

class SongContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: [],
            isLoaded: false,
            videoIdChanged: false,
        }
    }
    closeYoutube = () => {
        this.setState({videoId: []})
    }
    goYoutube = () => {
        this.props.searchYoutube(this.props.artistname + this.props.songname);     
    }

    render() {
        return(
            <>
                <div className="song-item">
                    <div className="artist-name">
                        {this.props.artistname}
                    </div>
                    <div className="artist-img">
                        <img src={this.props.artistimg} />
                    </div>
                    <div className="song-name">
                        {this.props.songname}
                    </div>
                    <button onClick={this.goYoutube} className="btn go-youtube"><i className="fa fa-play"></i> </button>
                </div>
            </>
        )
    }
}  


export default SongContainer;