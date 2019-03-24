import React, {Component} from 'react';
import './css/Header.css';
import Block from '../Block'
import searchByArtist from './SearchByArtist';
import searchBySong from './SearchBySong'

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

    render() {
        return (
            <>
                <div className="searchField">
                    <div className="searchWrapper">
                        <input placeholder={this.state.placeholder} onChange={this.getInputValue} value={this.state.inputvalue}></input>
                        <button onClick={this.state.activeContent === "artist" ? searchByArtist : searchBySong }>Search</button>
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