import React, {Component} from 'react';
import './css/Header.css';

class Subcontent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     placeholder: this.props.placeholder,
        //     onclick: this.props.onclick,
        //     onchange: this.props.onchange,
        //     inputvalue: this.props.inputvalue,
        // }
    }

    

    render() {
        return (
                <div className="searchField">
                    <div className="searchWrapper">
                        <input placeholder={this.props.placeholder} onChange={this.props.onchange} value={this.props.inputvalue}></input>
                        <button onClick={this.props.onclick}>Search</button>
                    </div>
                </div>
        )
    }
}


export default Subcontent;