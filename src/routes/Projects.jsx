import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsData from "../../src/assets/projectsdata";
import Project from "../components/Project";

export default function Projects() {
  const projects = ProjectsData.map((project) => {
    return (
      <Project
        key={project.id}
        delay={project.id * 0.2}
        className="fade-in-bottom"
        {...project}
      />
    );
  });
  return (
    <>
      <Header />
      <section className="project-container ">
        <h1 className="fade-in-top">My Projects</h1>
        <p className="fade-in-fwd">
          A collection of my most recent projects pushed to github.
        </p>
        <div className="project-boxes-r">
          <div className="project-boxes-c">{projects[0]}</div> 
          <div className="project-boxes-c">{projects[1]}</div>
          <div className="project-boxes-c">{projects[2]}</div>
        </div>
        <div className="project-boxes-r">
          <div className="project-boxes-c">{projects[3]}</div> 
          <div className="project-boxes-c">{projects[4]}</div>
          <div className="project-boxes-c">{projects[5]}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
