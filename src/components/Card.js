import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = (props) => {

    const title = props.title;

    const CoverPhoto = styled.div`
        background-image: linear-gradient(to right bottom, #ffb900, #ff7730),
        url(${props.cover});
        background-size: cover;
        height: 10rem;
        background-blend-mode: screen;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    `;

    return(
        <div className="card">
            <CoverPhoto></CoverPhoto>
            <div className="card__details">
                <div className="card__details--logo">
                    <FontAwesomeIcon icon={['fab', props.language ]} className="icon-skill" title={ props.language }/>
                </div>
                <a href={ props.link } target="_blank" rel="noreferrer" className="card__details--title">
                    <div title={ `Project: ` + title }>{ title }</div>
                    
                </a>
            </div>
        </div>
    );
}

export default Card;