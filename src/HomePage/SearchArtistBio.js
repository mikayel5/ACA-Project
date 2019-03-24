import React, { Component } from 'react'




export default class SearchArtistBio extends Component {
    constructor (){
        super ();
        this.state = {
            inputValue: "",
            isLoaded: false,
        }
    }
    
changing = event => this.setState({inputValue: event.target.value});

SearchArtistBio (){

     let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.inputValue}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`;
    fetch(`url`)
        .then((res) => res.json ())
        .then((data) =>{
            this.setState({
                isLoaded: true,
                artistItem_bio: data.artist.bio.content,
                artistItem_img: data.artist.image[3]["#text"],
            }
            );    
            console.log(data);
            if (this.state.isLoaded) {
                console.log(this.state.artistItem_img);
            }
            
        })
        .catch((error) => {
            console.error(error)
        });

}

  render() {
    return (
      <div>
        <div className = "artist_img">
            <image></image>
        </div>
        <div className ="atist_bio">
            <p>{}</p>
        </div>
      </div>
    )
  }
}
