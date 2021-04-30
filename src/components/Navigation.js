import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";
import BackgroundClip from "../containers/style/BackgroundClip";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return(
            <Auxiliary>
                <BackgroundClip />
                <nav className="nav">
                    <div className="nav-logo">
                        <h2>AR</h2>
                        {/* <img src="" alt="Logo" /> */}
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" exact activeClassName="active">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" exact activeClassName="active">
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" exact activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Auxiliary>
        );
    }
}

export default Navigation;