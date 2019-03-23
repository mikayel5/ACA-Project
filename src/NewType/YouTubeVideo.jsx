import React, { Component } from 'react'
import './loading.css'

export default class YouTubeVideo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         youTubeVideo: null,
      }
    }

    componentDidMount(){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=5&order=relevance&q=${this.props.youTubeUrl}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
            .then(res => res.json())
            .then(res => this.setState({youTubeVideo: res}))
    }
    
  render() {
    const {youTubeUrl} = this.props
    const {youTubeVideo} = this.state
    if (youTubeUrl === null ) {
        return (
          <div className="loading-bro">
              <h1>Loading</h1>
              <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
                <circle id="loading-inner" cx="75" cy="75" r="60" />
              </svg>
            </div>
        )
      } else if (youTubeVideo === null){
        return (
            <div className="loading-bro">
                <h1>Loading</h1>
                <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
                  <circle id="loading-inner" cx="75" cy="75" r="60" />
                </svg>
              </div>
          )
      }
      else {
          return (
              <div style={{position: 'absolute', top: '10px', margin: 'auto', minWidth: '1000px', minHeight: '600px' }}>
              <iframe title='Youtube' allowFullScreen style={{minWidth: '1000px', minHeight: '600px', frameBorder: '0px'}} src={`https://www.youtube.com/embed/${youTubeVideo.items[0].id.videoId}`}>
                {console.log()}
              </iframe>
              </div>
          )
      }
  }
}
