import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialAccount = (props) => {
    
    const socialLink = props.url;
    const socialSite = props.application;

    return(
        <a target="_blank" rel="noopener noreferrer" href={ socialLink } className="link link__social">
            <FontAwesomeIcon icon={['fab', socialSite]} className={`icon icon-social icon-social--${ socialSite }`} />
        </a>
    );
}

export default SocialAccount;