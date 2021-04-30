import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section className="container container__contact p__t-2">
                <div className="clip clip--bottom"></div>
                <div className="content">
                    <div className="content__title">
                        <h3 className="text text__secondary">Contacts</h3>
                        <h4 className="text text__primary">Ways To Connect With Me</h4>
                    </div>
                    <div className="content__title-sub p__t-2">
                        <p className="text text__tertiary text__center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>

                    
                </div>
            </section>
        );
    }
}

export default Contact