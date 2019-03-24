export default searchBySong = () => {
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