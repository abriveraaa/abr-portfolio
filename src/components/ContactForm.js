import React, { Component } from 'react';
// import axios from 'axios';

class ContactForm extends Component {
      
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    // }

    // handleSubmit(e){
    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url: "http://localhost:3002/send",
    //         data:  this.state
    //     }).then((response)=>{
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             this.resetForm()
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //         }
    //     })
    // }

    // resetForm(){
    //     this.setState({name: '', email: '', message: ''})
    // }

    render() {
        return(
            <div className="contact">
                <div className="contact__title">Get In Touch</div>
                <form className="contact__form">
                    <div className="contact__form-group">
                        <label htmlFor="" className="contact__group--label">Fullname</label>
                        <input type="text" className="contact__group contact__group--input" /> 
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="" className="contact__group--label">Email</label>
                        <input type="email" className="contact__group contact__group--input" /> 
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="" className="contact__group--label">Message</label>
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