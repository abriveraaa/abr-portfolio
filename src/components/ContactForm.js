import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return(
            <div className="contact">
                <div className="contact__title">Get In Touch</div>
                <form className="contact__form">
                    <div className="contact__form-group">
                        <label for="" className="contact__group--label">Fullname</label>
                        <input type="text" className="contact__group contact__group--input" /> 
                    </div>
                    <div className="contact__form-group">
                        <label for="" className="contact__group--label">Email</label>
                        <input type="email" className="contact__group contact__group--input" /> 
                    </div>
                    <div className="contact__form-group">
                        <label for="" className="contact__group--label">Message</label>
                        <textarea className="contact__group contact__group--textarea" /> 
                    </div>
                    <div className="contact__form-group">
                        <button className="button button__primary text__right">Submit</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;