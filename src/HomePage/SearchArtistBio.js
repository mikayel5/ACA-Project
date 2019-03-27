import React, { Component } from 'react'

class SearchArtistBio extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="artist-container">
            <div className = "artist_img">
                <img src={this.props.artistimg} />
            </div>
            <div className ="atist_bio">
                <p>{this.props.artistbio}</p>
            </div>
        </div>
        )
    }
}

export default SearchArtistBio;