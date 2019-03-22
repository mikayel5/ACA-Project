import React, { Component } from 'react'
import './loading.css'
import YouTubeVideo from './YouTubeVideo'

export default class SearchBySong extends Component {
constructor(props) {
  super(props)

  this.state = {
     songs: null,
     youTubeUrl: null,
  }
}

componentDidMount(){
  fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.props.inputValueAfterChange}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
  .then(res => res.json())
  .then(myJson => this.setState({songs: myJson}))
} 

Youtube = (ev,name) =>{
  this.setState({youTubeUrl: name})
}


  render() {
    const {inputValueAfterChange} = this.props
    const {songs, youTubeUrl } = this.state
    if (songs === null) {
      return (
        <div className="loading-bro">
            <h1>Loading</h1>
            <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
              <circle id="loading-inner" cx="75" cy="75" r="60" />
            </svg>
          </div>
      )
    } else {
      return (
        <>
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
          {songs.results.trackmatches.track.map(el => 
            <div style={{minHeight: '200px', minWidth: '200px', margin: '20px', backgroundColor: 'red'}}>
              <h5>{el.artist}</h5>
              <div style={{minHeight: '100px', minWidth: '100px', backgroundSize: 'cover',  backgroundImage: `url(${el.image["3"]["#text"]})`}}></div>
              <h6>{el.name}</h6>
              <button onClick={(ev) => this.Youtube(ev, el.name)} >Listen</button>
            </div>
           )}
        </div>
        {youTubeUrl !== null && <YouTubeVideo youTubeUrl={youTubeUrl} />}
        </>
      )
    }
  }
}
