import React, {Component} from 'react';
import './css/Header.css'

class Header extends Component {

    render() {
        return (
            <div className="header-div">
                <div className="logo-div">
                    <span className="fa fa-compact-disc fa-spin"></span>
                </div>
                <div className="navigation-bar-div">
                    <button>Home</button>
                    <button>About Us</button>
                    <button>Contact Us</button>
                </div>
            </div>
        )
    }
}

export default Header;