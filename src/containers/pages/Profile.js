import React from 'react';
import SocialAccount from '../../components/SocialAccount';
import Auxiliary from '../../hoc/Auxiliary';

const Profile = ({data}) => {
    let socials = data.socials;
    return (
        <Auxiliary>
            <header className="hero">
                <div className="hero__job">
                    <h2 className="text text__job-title">{ data.position }</h2>
                    <p className="text text__paragraph">{ data.introduction }</p>
                    <a href={ data.resume } target="_blank" className="button button__primary" rel="noreferrer" download> Download CV </a>
                </div>
                <div className="hero__owner">
                    <h1 className="text text__name">
                        { data.firstname } <span className="text text__name-last">{ data.lastname }</span>
                    </h1>
                    <div className="hero__social">
                        <p className="text m__b-1">Find me on</p>
                        <div className="icon">
                        {socials ? socials.map(item => {
                                return <SocialAccount key={ item.id } application={ item.application } url={ item.link }/>;
                            })
                            : "Loading..."}
                        </div>
                    </div>
                </div>
            </header>
        </Auxiliary>
    );
}

export default Profile;