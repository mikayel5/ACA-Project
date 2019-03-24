import React, { Component } from 'react'

class SearchArtistBio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistItem_bio: this.props.artistbio,
            artistItem_img: this.props.artistimg,
        }
    }

    
    render() {
        return (
        <div>
            <div className = "artist_img">
                <img src={this.state.artistItem_img} />
            </div>
            <div className ="atist_bio">
                <p>{this.state.artistItem_bio}</p>
            </div>
        </div>
        )
    }
}

export default SearchArtistBio;