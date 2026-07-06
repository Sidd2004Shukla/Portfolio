import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

import Education from "../education/EducationComponent";
import Certifications from "../../containers/certifications/Certifications";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import ResumePage from "../resume/Resume";
import BackgroundVectors from "../../components/backgroundVectors/BackgroundVectors";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ position: "relative", backgroundColor: theme.body }}>
        <Header theme={theme} />
        
        {/* Background Decorative Vectors */}
        <BackgroundVectors />
        
        {/* Single Page Sections */}
        <div id="home" style={{ position: "relative", zIndex: 1 }}>
          <Greeting theme={theme} />
        </div>
        <div id="skills" style={{ position: "relative", zIndex: 1 }}>
          <Skills theme={theme} />
        </div>
        <Education theme={theme} isSection={true} />
        <div id="certifications" style={{ position: "relative", zIndex: 1 }}>
          <Certifications theme={theme} />
        </div>
        <Projects theme={theme} isSection={true} />
        <Contact theme={theme} isSection={true} />
        <ResumePage theme={theme} isSection={true} />
        
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
