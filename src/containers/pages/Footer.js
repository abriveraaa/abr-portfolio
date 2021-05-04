import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import SocialAccount from '../../components/SocialAccount';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
.keys(Icons)
.filter(key => key !== "fab" && key !== "prefix" )
.map(icon => Icons[icon])

library.add(...iconList)
console.log(library)

class Footer extends Component {
    render() {
        return(
            <footer className="footer p__t-2">              
                <div className="content">
                    <div className="content__title">
                        <h3 className="text text__secondary">Contacts</h3>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-details__content">
                        <div className="contact-details__content-data">
                            <div className="contact-details__content-address">
                                <FontAwesomeIcon icon="map-marker-alt" className="icon icon-other" />
                                <span className="contact-details__content-other--1">Santa Lucia, Pasig City</span>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
                <div className="contact-social">
                    <div className="footer-social">
                        <div className="copyright">
                            All Content &#169; {(new Date().getFullYear())}
                        </div>
                        <div className="icon">
                            <SocialAccount url="http://www.facebook.com/abriveraaa" application="facebook" />
                            <SocialAccount url="http://www.linkedin.com/in/abrivera" application="linkedin" />
                            <SocialAccount url="http://www.github.com/abriveraaa" application="github" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;