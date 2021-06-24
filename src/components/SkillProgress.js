import React from 'react';

const SkillProgress = (props) => {

    const widthData = props.width;
    const name = props.name;

    return(
        <div className="skill m__b-2">
            <div className="skill__data">
                <div className="skill__data-name" style={{ width: widthData }}>
                    <p className="text">{ name }</p>
                    <p className="text">{ widthData }</p>
                </div>
            </div>
        </div>
    );
}

export default SkillProgress;