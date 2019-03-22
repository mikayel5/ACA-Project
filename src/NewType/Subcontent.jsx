import React, {Component} from 'react';
import SerachByArtist from './SerachByArtist'
import SearchBySong from './SearchBySong'

class Subcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            inputValueAfterChange:  '',
        }
    }

    GetChange = (event) => {
        this.setState({inputValue: event.target.value})
    }
    
    SetInputValue = () => {
        this.setState({inputValueAfterChange: this.state.inputValue})
    }

    render() {
        const {inputValueAfterChange} = this.state
        const {placeholdervalue, activecontent} = this.props
        return (
            <>
            <div style={{minHeight: '300px', minWidth: '1060px', backgroundColor: 'yellow'}}>
                <input placeholder={placeholdervalue} onChange={(e)=> this.GetChange(e)}></input>
                <button onClick={this.SetInputValue}>Serach</button>
            </div>
            {inputValueAfterChange !== '' && activecontent === 'artist' && <SerachByArtist inputValueAfterChange={inputValueAfterChange} />}    
            {inputValueAfterChange !== '' && activecontent === 'song' && <SearchBySong inputValueAfterChange={inputValueAfterChange}/>}    
            </>
        )
    }
}


export default Subcontent;