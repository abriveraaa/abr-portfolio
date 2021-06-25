/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '../../components/Card';

const Project = ({data}) => {
    let projects = data;
    return(
        <section className="container container__project">
            <div className="clip clip--top">
                <div className="content">
                    <div className="content__title">
                        <h3 className="text text__secondary">Projects</h3>
                        <h4 className="text text__primary">My Project Collection</h4>
                    </div>
                    <div className="content__card">
                        {
                            projects ? projects.map(item => {
                                return <Card 
                                    key={ item.id } 
                                    cover={ item.image } 
                                    language={ item.language } 
                                    title={ item.title }
                                    link = { item.link }
                                />;
                            })
                            : "Loading..."
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;