import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = (props) => {

    let className = 'card';
    const title = props.title;

    const CoverPhoto = styled.div`
        background-image: linear-gradient(to right bottom, #7ed56f, #28b485),
        url(${props.cover});
        background-size: cover;
        height: 10rem;
        background-blend-mode: screen;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    `;

    if (props.isActive) {
        className += ' active-card';
    }

    return(
        <div className={className}>
            <CoverPhoto></CoverPhoto>
            <div className="card-info">
                <div className="card-info--logo">
                    <FontAwesomeIcon icon={['fab', props.language ]} className="icon-skill" title={ props.language }/>
                </div>
                <div className="card-info--title" title={ `Project: ` + title }>{ title }</div>
            </div>
        </div>
    );
}

export default Card;