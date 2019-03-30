import React, {Component} from 'react';
import './css/Header.css'

class Header extends Component {

    render() {
        return (
            <div className="header-div">
                <div className="logo-div">
                    <i className="fa fa-compact-disc fa-spin"></i>
                </div>
            </div>
        )
    }
}

export default Header;