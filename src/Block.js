import React, {Component} from 'react';
import './index.css';

class Block extends Component{
    constructor (props) {
        super(props)
        this.state = {
            url: this.props.url,
            title: this.props.title,
            urlName: this.props.name,
        }
    }  
    
    youtube = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=5&order=relevance&q=${this.state.urlName}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
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
    }

    render () {
        return ( 
        <>
            <div 
                className="video"
            >
                <iframe title={this.state.title}width="300" height="300"
                    src={this.state.url}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </>
        )
    }
}





export default Block;