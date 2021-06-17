import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";
import BackgroundClip from "../containers/style/BackgroundClip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";

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
                    <div className="nav-button">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="bar">
                            <FontAwesomeIcon icon="bars" className="icon-bar" />
                        </label>
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="#"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={50}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="container__project"
                                spy={true}
                                smooth={true}
                                duration={300}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="container__skill"
                                spy={true}
                                smooth={true}
                                duration={300}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                duration={300}
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Auxiliary>
            );
        }
    }
    
    export default Navigation;