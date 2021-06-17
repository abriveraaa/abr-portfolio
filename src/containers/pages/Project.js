import React, { Component } from 'react';
import Card from '../../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <div className="pofo-cat content__info">
                            <div className="content__info-link">
                                <a rel="noopener noreferrer" href="#" className="link link__category active">
                                    All
                                </a>
                            </div>
                            <div className="content__info-link">
                                <a rel="noopener noreferrer" href="#" className="link link__category">
                                    UI/ UX
                                </a>
                            </div>
                            <div className="content__info-link">
                                <a rel="noopener noreferrer" href="#" className="link link__category">
                                    Web Development
                                </a>
                            </div>
                            <div className="pofo-line"></div>
                        </div>
                        <div className="content__card">
                            <Card isActive="true" language="laravel" title="Tools and Equipment Monitoring System"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;