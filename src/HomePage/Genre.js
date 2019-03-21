import React, {Component} from 'react';
import './css/Header.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Genre extends Component {

    render () {
        return (
            <div className="genres">
                <Router>
                    <NavLink to="/pop">
                        <button>POP</button>
                    </NavLink>
                    <NavLink to="/hiphop">
                        <button>HIP-HOP</button>
                    </NavLink>
                    <NavLink to="/rock">
                        <button>ROCK</button>
                    </NavLink>
                    <NavLink to="/rap">
                        <button>RAP</button>
                    </NavLink>
                    <NavLink to="/jazz">
                        <button>JAZZ</button>
                    </NavLink>
                    <NavLink to="/electronic">
                        <button>ELECTRONIC</button>
                    </NavLink>
                    <NavLink to="/classical">
                        <button>CLASSICAL</button>
                    </NavLink>
                    <NavLink to="/soundtrack">
                        <button>SOUNDTRACK</button>
                    </NavLink>
                    <Route path="/pop"/>
                    <Route path="/hiphop"/>
                    <Route path="/rock"/>
                    <Route path="/rap"/>
                    <Route path="/jazz"/>
                    <Route path="/electronic"/>
                    <Route path="/classical"/>
                    <Route path="/soundtrack"/>
                </Router>
            </div>
        )
    }
}
function pop() {
        
}

export default Genre;
