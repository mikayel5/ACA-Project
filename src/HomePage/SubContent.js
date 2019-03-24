import React, {Component} from 'react';
import './css/Header.css';

class Subcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.placeholder,
            onclick: this.props.onclick,
            onchange: this.props.onchange,
            inputvalue: this.props.inputvalue,
        }
    }

    

    render() {
        return (
                <div className="searchField">
                    <div className="searchWrapper">
                        <input placeholder={this.state.placeholder} onChange={this.state.onchange} value={this.state.inputvalue}></input>
                        <button onClick={this.state.onclick}>Search</button>
                    </div>
                </div>
        )
    }
}


export default Subcontent;