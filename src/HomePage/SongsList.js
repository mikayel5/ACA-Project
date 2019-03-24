import React, {Component} from 'react';

class SongsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistimg: this.props.artistimg,
            artistname: this.props.artisname, 
            songname: this.props.songname
        }
    }

    render() {
        return(
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
        )
    }
}  


export default SongsList;