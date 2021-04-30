import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className="footer container__contact p__t-2">
                <div className="clip clip--bottom"></div>
                <div className="content">
                    <div className="content__title">
                        <h3 className="text text__secondary">Contacts</h3>
                        <h4 className="text text__primary">Get In Touch With Me</h4>
                    </div>
                    
                </div>
            </footer>
        );
    }
}

export default Footer;