import React from "react";
import SkillProgress from "../../components/SkillProgress";

const Skill = ({data}) => {
    let skills = data;
    return(
        <section className="container container__skill p__t-2">
            <div className="content">
                <div className="content__title">
                    <h3 className="text text__secondary">Skills</h3>
                    <h4 className="text text__primary">What I'm Capable Of</h4>
                </div>
                <div className="content__title-sub p__t-2">
                    <p className="text text__tertiary text__center"></p>
                </div>

                <div className="content__skill">
                    <div className="content__skill-progress">
                        {
                            skills ? skills.map(skill => {
                                return <SkillProgress key={ skill.id } name={ skill.name } width={ skill.level }/>
                            })
                            : "Loading..."
                        }
                    </div>                       
                </div>
            </div>
        </section>
    );
}

export default Skill;