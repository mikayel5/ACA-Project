import React, { Component } from "react";

export default class ArtistInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        SearchedArtist: null,
    };
  }
  
  componentDidMount() {
          fetch (`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.inputInfo}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
          .then(re => re.json())
          .then(res => this.setState({SearchedArtist: res}))
    }

componentDidUpdate() {
  fetch (`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.inputInfo}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
          .then(re => re.json())
          .then(res => this.setState({SearchedArtist: res}))
}


    
    render() {
      const {SearchedArtist} = this.state;
      const {inputInfo} = this.props;
      console.log(SearchedArtist)
      if (SearchedArtist === null) {
          return null
      } else {
          return (
            <>
                <h4>{SearchedArtist.name}</h4>
                <div>
                    <h5>Biography</h5>
                    <p>
                    {SearchedArtist.artist.bio.summary}
                    </p>
                </div>
            </>
          )
      }
  }
}
