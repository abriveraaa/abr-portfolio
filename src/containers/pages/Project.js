/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Card from '../../components/Card';
import img from '../../assets/images/tems.png';

class Project extends Component {
    render() {
        return(
            <section className="container container__project">
                <div className="clip clip--top">
                    <div className="content">
                        <div className="content__title">
                            <h3 className="text text__secondary">Projects</h3>
                            <h4 className="text text__primary">My Project Collection</h4>
                        </div>
                        <div className="content__card">
                            <Card cover={ img } isActive="true" language="laravel" title="Tools and Equipment Monitoring System"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;