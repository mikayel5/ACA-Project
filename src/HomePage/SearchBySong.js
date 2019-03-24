import React, {Component} from 'react';
import SubContent from './SubContent';
import Block from '../Block';


class SearchBySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.placeholdervalue,
            inputvalue: "",
            videoId: [],
        }
    }

    getInputValue = (event) => {
        this.setState({inputvalue: event.target.value})
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
                <SubContent placeholder={this.state.placeholder} onclick={this.searchBySong} onchange={this.getInputValue} value={this.state.inputvalue}/>
                <div className='video_container'>
                    {
                        this.state.videoId.map((id, index) => <Block key={index} title={this.state.iframeTitle}url={`https://www.youtube.com/embed/${id}`}/>)
                    }
                </div>
            </>
        )
    }
}





export default SearchBySong;