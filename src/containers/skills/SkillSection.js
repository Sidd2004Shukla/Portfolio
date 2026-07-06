import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import developerGif from "../../assets/images/developer.gif";
import androidGif from "../../assets/images/android.gif";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === "SpringBootImg")
    return (
      <img
        src={developerGif}
        alt="Spring Boot Developer"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
    );
  else if (props.fileName === "AndroidImg")
    return (
      <img
        src={androidGif}
        alt="Android Developer"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
    );
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          const isEven = i % 2 === 0;

          const imageDiv = (
            <Fade {...(isEven ? { left: true } : { right: true })} duration={2000}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>
          );

          const textDiv = (
            <div className="skills-text-div">
              <Fade {...(isEven ? { right: true } : { left: true })} duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade {...(isEven ? { right: true } : { left: true })} duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade {...(isEven ? { right: true } : { left: true })} duration={2000}>
                <div>
                  {skill.skills.map((skillSentence, j) => {
                    return (
                      <p
                        key={j}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          );

          return (
            <div key={i} className="skills-main-div">
              {isEven ? (
                <>
                  {imageDiv}
                  {textDiv}
                </>
              ) : (
                <>
                  {textDiv}
                  {imageDiv}
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
