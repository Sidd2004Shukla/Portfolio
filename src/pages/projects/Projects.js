import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  projectsHeader,
  publications,
} from "../../portfolio.js";
import "./Projects.css";
import projectsGif from "../../assets/images/projects.gif";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const isSection = this.props.isSection;
    return (
      <div className="projects-main" id="projects" style={{ position: "relative", zIndex: 1 }}>
        {!isSection && <Header theme={theme} />}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={projectsGif}
                  alt="Projects"
                  style={{ width: "100%", maxWidth: "550px", height: "auto" }}
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="repo-cards-div-main" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "25px" }}>
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} key={pub.id} />;
          })}
        </div>

        {!isSection && <Footer theme={this.props.theme} onToggle={this.props.onToggle} />}
        {!isSection && <TopButton theme={this.props.theme} />}
      </div>
    );
  }
}

export default Projects;
