import React, {Component} from 'react';
import SubContent from './SubContent';
import Block from '../Block';
import SearchArtistBio from './SearchArtistBio';


class SearchByArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.placeholdervalue,
            inputvalue: "",
            videoId: [],
            artistItem_bio: "",
            artistItem_img: null,
            isLoaded: false,

        }
    }

    getInputValue = (event) => {
        this.setState({inputvalue: event.target.value})
    }

    searchByArtist = () => {
        const videoId = [];
        this.setState({ videoId: [], isLoaded: false, artistItem_bio: "", artistItem_img: null })
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.inputvalue}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        .then(res => res.json())
        .then(myJson => myJson.results.artistmatches.artist[0].name)
        .then(function(name) {
            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    artistItem_bio: data.artist.bio.content,
                    artistItem_img: data.artist.image[3]["#text"],
                
                })
            }    
            )

            return name;
        }.bind(this))
        .then(function(name) {
            this.setState({iframeTitle: this.name})
            fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=20&order=relevance&q=${name}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
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
                <SubContent placeholder={this.state.placeholder} onclick={this.searchByArtist} onchange={this.getInputValue} value={this.state.inputvalue}/>
                {
                    this.state.isLoaded ? <SearchArtistBio artistbio={this.state.artistItem_bio} artistimg={this.state.artistItem_img}/> : null
                }
                <div className='video_container'>
                    {
                        this.state.videoId.map((id, index) => <Block key={index} title={this.state.iframeTitle}url={`https://www.youtube.com/embed/${id}`}/>)
                    }
                </div>
            </>
        )
    }
}





export default SearchByArtist;