import React, { Component } from 'react'
import './loading.css'
import YoutubeArtistVideos from './YoutubeArtistVideos';

export default class SerachByArtist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      SearchedArtist: null,
    }
  }

componentDidMount() {
  fetch (`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.inputValueAfterChange}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
  .then(re => re.json())
  .then(res => this.setState({SearchedArtist: res}))
}

componentDidUpdate(prevProps) {
  if(prevProps.inputValueAfterChange !== this.props.inputValueAfterChange) {
    fetch (`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.inputValueAfterChange}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
    .then(re => re.json())
    .then(res => this.setState({SearchedArtist: res}))
  }
}
  
  render() {
    const {SearchedArtist} = this.state;
    const {ChangeArtist} = this.props
    if (SearchedArtist === null) {
      return (
        <div className="loading-bro">
            <h1>Loading</h1>
            <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
              <circle id="loading-inner" cx="75" cy="75" r="60" />
            </svg>
          </div>
      )
  } else if(SearchedArtist.artist === undefined) {
      return (
        <div>No artist by yhis name</div>
      )
  } else {
    return (
      <>
          <h4>{SearchedArtist.artist.name}</h4>
          <div>
            <div style={{minHeight: '800px', minWidth: '200px',backgroundSize: 'cover' , backgroundImage: `url(${SearchedArtist.artist.image[4  ]["#text"]})`}} ></div>
              <h5>Biography</h5>
              <p>
              {SearchedArtist.artist.bio.summary}
              </p>
              <h5>Similar Artists</h5>
              <p>
              {SearchedArtist.artist.similar.artist.map(el => <div key={el.name} onClick={(ev)=>ChangeArtist(ev,el.name)} title='About artist'><h5>{el.name}</h5><div style={{minHeight: '60px', minWidth: '60px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${el.image[2]["#text"]})`}} ></div></div>)}
              </p>
          </div>
          <YoutubeArtistVideos artistName={SearchedArtist.artist.name} />
      </>
    )
  }
  }
}

