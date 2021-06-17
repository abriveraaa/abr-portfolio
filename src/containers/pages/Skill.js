import React, { Component } from "react";
import SkillProgress from "../../components/SkillProgress";

class Skill extends Component {
    render() {
        return(
            <section className="container container__skill p__t-2">
                {/* <div className="clip clip--shape"></div> */}
                <div className="content">
                    <div className="content__title">
                        <h3 className="text text__secondary">Skills</h3>
                        <h4 className="text text__primary">What I'm Capable Of</h4>
                    </div>
                    <div className="content__title-sub p__t-2">
                        <p className="text text__tertiary text__center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>

                    <div className="content__skill">
                        <div className="content__skill-progress">
                        <SkillProgress name="HTML" width="90%"/>
                        <SkillProgress name="CSS" width="90%"/>
                        <SkillProgress name="JAVASCRIPT" width="80%"/>
                        <SkillProgress name="NODEJS" width="75%"/>
                        <SkillProgress name="LARAVEL" width="90%"/>
                        <SkillProgress name="C#" width="45%"/>
                        <SkillProgress name="SQL SERVER" width="70%"/>
                        <SkillProgress name=".NET" width="45%"/>
                        </div>                       
                    </div>
                </div>
            </section>
        );
    }
}

export default Skill;