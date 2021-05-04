import React, { Component } from 'react';
import Card from '../../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                        <div className="content__info">
                            <div className="content__info-right">
                                <p className=" text text__project-title">Tools and Equipment Monitoring System</p>
                                <p className="text text__project-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
                                <p className="text__info">
                                    <span className="p__r-1">Know more</span> 
                                    <FontAwesomeIcon icon={ faArrowRight } className="icon-arrow" />
                                    
                                </p>
                            </div>
                            <div className="content__info-left">
                                <p className="content__img"></p>
                            </div>
                        </div>
                        <div className="content__card">
                            <Card isActive="true" icon="Laravel"/>
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;