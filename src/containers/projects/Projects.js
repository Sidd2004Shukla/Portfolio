import React from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { projectsHeader } from "../../portfolio.js";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Spring Boot API",
      description:
        "A backend service layout with authentication, REST endpoints, and database integration.",
      createdAt: "2026-07-06T00:00:00Z",
      url: "#",
      languages: ["Java", "Spring Boot", "MySQL"],
    },
    {
      id: 2,
      name: "Android App",
      description:
        "A mobile app concept built around clean screens, API integration, and user-first flows.",
      createdAt: "2026-07-06T00:00:00Z",
      url: "#",
      languages: ["Kotlin", "Android", "Firebase"],
    },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "A personal portfolio showcase with sections for skills, projects, and contact details.",
      createdAt: "2026-07-06T00:00:00Z",
      url: "#",
      languages: ["React", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="main" id="projects">
      <h1 className="project-title">{projectsHeader.title}</h1>
      <div className="repo-cards-div-main">
        {projects.map((project) => {
          return <GithubRepoCard repo={project} key={project.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href="#contact"
        newTab={true}
      />
    </div>
  );
}
