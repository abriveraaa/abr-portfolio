import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-brands-svg-icons';

const iconList = Object
.keys(Icons)
.filter(key => key !== "fab" && key !== "prefix" )
.map(icon => Icons[icon])

library.add(...iconList)
console.log(library)

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