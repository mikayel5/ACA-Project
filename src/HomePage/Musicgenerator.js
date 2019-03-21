import React, {Component} from 'react'

class MusGen extends Comment {
    constructor(props) {
        super(props)
        this.state = {
            genre: this.props.genre
        }
    }

    genreSearch = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${this.state.genre}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        
    }
}