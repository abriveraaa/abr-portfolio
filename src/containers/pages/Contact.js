import React from 'react';
// import ContactForm from '../../components/ContactForm';
import SocialAccount from '../../components/SocialAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = ({data}) => {
    let contacts = data.contacts;
    let socials = data.socials;
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
                            {contacts ? contacts.map(contact => {
                                    return (
                                        <div key={ contact.id }  className="contact-details__content-footer">
                                            <span className="contact-details__content-footer--icon">
                                                <FontAwesomeIcon icon={ contact.icon } className="icon icon-other" />
                                            </span>
                                            <span className="link link__address">
                                                { contact.contact }
                                            </span>
                                        </div>
                                    )
                                })
                                : "Loading..."
                            }
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
                        {socials ? socials.map(item => { return <SocialAccount key={ item.id } application={ item.application } url={ item.link }/>; }) : "Loading..."}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;