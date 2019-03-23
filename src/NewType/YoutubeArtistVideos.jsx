import React, { Component } from 'react'

export default class YoutubeArtistVideos extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        artistVideos: null,     
      }
    }
    
    componentDidMount(){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=25&order=relevance&q=${this.props.artistName}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
            .then(res => res.json())
            .then(res => this.setState({artistVideos: res}))
    }


    componentDidUpdate(prevProps) {
        if(prevProps.artistName !== this.props.artistName) {
          fetch (`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=25&order=relevance&q=${this.props.artistName}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
          .then(re => re.json())
          .then(res => this.setState({artistVideos: res}))
        }
      }



  render() {
      const {artistName} = this.props
      const {artistVideos} =this.state
    if (artistVideos === null){
        return <div>spasi</div>
    } else {
        return (
            <div style={{display: 'flex', minHeight: '300px' }}>
            {
                artistVideos.items.map((element, index) => <div key={index}><iframe  allowFullScreen src={`https://www.youtube.com/embed/${element.id.videoId}`}></iframe></div>)
            }      
            </div>
        )
    }
  }
}
