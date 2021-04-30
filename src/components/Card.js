import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel } from '@fortawesome/free-brands-svg-icons';

class Card extends Component {
    render() {
        let className = 'card';

        if (this.props.isActive) {
            className += ' active-card';
        }

        let faIcon = '';
        if (this.props.icon === 'Laravel') {
            faIcon = faLaravel;
        }

        return(
            <div className={className}>
                <div className="card-info">
                    <div className="card-info--logo">
                        <FontAwesomeIcon icon={faIcon} className="icon-skill"/>
                    </div>
                    <div className="card-info--title">Tools and Equipment Monitoring System</div>
                </div>
            </div>
        );
    }
}

export default Card;