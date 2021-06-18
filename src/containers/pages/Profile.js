import React, { Component } from 'react';
import SocialAccount from '../../components/SocialAccount';
import Auxiliary from '../../hoc/Auxiliary';
import cv from '../../assets/data/Ariel-Rivera-Resume.pdf';

class Profile extends Component {
    render() {
        return(
            <Auxiliary>
                <header className="hero">
                    <div className="hero__job">
                        <h2 className="text text__job-title">Web Developer</h2>
                        <p className="text text__paragraph">
                            I enjoy building web application.
                        </p>
                        <a href={ cv } target="_blank" className="button button__primary" rel="noreferrer" download>
                            Download CV
                        </a>
                    </div>
                    <div className="hero__owner">
                        <h1 className="text text__name">
                            Ariel <span className="text text__name-last">Rivera</span>
                        </h1>
                        <div className="hero__social">
                            <p className="text m__b-1">Find me on</p>
                            <div className="icon">
                                <SocialAccount url="http://www.facebook.com/abriveraaa" application="facebook" />
                                <SocialAccount url="http://www.linkedin.com/in/abrivera" application="linkedin" />
                                <SocialAccount url="http://www.github.com/abriveraaa" application="github" />
                            </div>
                        </div>
                    </div>
                </header>
            </Auxiliary>
        );
    }
}

export default Profile;