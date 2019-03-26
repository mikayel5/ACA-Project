import React, {Component} from 'react';
import SubContent from './SubContent';
import SongContainer from './SongContainer';


class SearchBySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.placeholdervalue,
            inputvalue: "",
            trackArray: [], 
        }
    }

    getInputValue = (event) => {
        this.setState({inputvalue: event.target.value})
    };

    searchBySong = () => {
        this.setState({trackArray: []})
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.inputvalue}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        .then(res => res.json())
        .then(myJson => 
            {
                const track = myJson.results.trackmatches.track; 
                this.setState({ trackArray: track,})
            })
    }

    render() {
        return (
            <>
                <SubContent placeholder={this.state.placeholder} onclick={this.searchBySong} onchange={this.getInputValue} value={this.state.inputvalue}/>
                <div className='video_container'>
                    {
                        this.state.trackArray.map((track, index) => <SongContainer
                                key={index}
                                songname={track.name}
                                artistname={track.artist}
                                artistimg={track.image[2]["#text"]}
                                />)
                    }
                </div>
            </>
        )
    }
}





export default SearchBySong;