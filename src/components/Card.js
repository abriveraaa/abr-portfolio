import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
    let className = 'card';
    const skillLanguage = props.language;
    const title = props.title;

    if (props.isActive) {
        className += ' active-card';
    }

    return(
        <div className={className}>
            <div className="card-info">
                <div className="card-info--logo">
                    <FontAwesomeIcon icon={['fab', skillLanguage ]} className="icon-skill"/>
                </div>
                <div className="card-info--title">{ title }</div>
            </div>
        </div>
    );
}

export default Card;