import React from 'react';
// import ContactForm from '../../components/ContactForm';
import SocialAccount from '../../components/SocialAccount';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
.keys(Icons)
.filter(key => key !== "fab" && key !== "prefix" )
.map(icon => Icons[icon])

library.add(...iconList)

const Contact = (props) => {
    return(
        <footer className="footer">              
            <div className="content">
                <div className="content__title">
                    <h3 className="text text__secondary">Contact</h3>
                </div>
            </div>
            <div className="contact-details">
                <div className="contact-details__content">
                    <address>
                        <div className="contact-details__content-data">
                            <div className="contact-details__content-footer">
                                <span className="contact-details__content-footer--icon">
                                    <FontAwesomeIcon icon="map-marker-alt" className="icon icon-other" />
                                </span>
                                <span className="link link__address">
                                    Santa Lucia, Pasig City
                                </span>
                            </div>
                            <div className="contact-details__content-footer">
                                <span className="contact-details__content-footer--icon">
                                    <FontAwesomeIcon icon="envelope" className="icon icon-other" />
                                </span>
                                <a href="mailto:arielbunagrivera@gmail.com" className="link link__address--1">
                                    arielbunagrivera@gmail.com
                                </a>
                            </div>
                            {/* <div className="contact-details__content-footer">
                                <span className="contact-details__content-footer--icon">
                                    <FontAwesomeIcon icon="phone" className="icon icon-other" />
                                </span>
                                <a href="tel:+639955487240" className="link link__address--1">
                                    +639955487240
                                </a>
                            </div> */}
                        </div>
                    </address>
                </div>
                {/* <ContactForm /> */}
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

export default Contact;