import { FaGear } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedBlogs from "../components/FeaturedBlogs";
import ProjectsData from "../../src/assets/projectsdata";
import BlogsData from "../../src/assets/blogsdata";

export default function Home() {
  const projectElements = ProjectsData.map((fproject) => {
    return (
      fproject.id < 4 && (
        <FeaturedProjects
          key={fproject.id}
          className={"fade-in-bottom"}
          delay={fproject.id * 0.2}
          {...fproject}
        />
      )
    );
  });
  const blogElements = BlogsData.map((blog) => {
    return (
      <FeaturedBlogs
        key={blog.id}
        className={"fade-in-bottom"}
        style={{ animationDelay: `${blog.id * 0.2}s` }}
        {...blog}
      />
    );
  });

  const gearStyle = {
    fontSize: "1.1rem",
  };
  const blogStyle = {
    fontSize: "1.1rem",
  };

  return (
    <main>
      <div className="home-content fade-in-top">
        <h1>M.Tayyeb</h1>
        <h2>Security Researcher | Red Teamer </h2>
        <p>
          Passionate about discovering vulnerabilities in web applications.{" "}
          <br />
          Exploring the world of web development.
        </p>
        <div className="button-container fade-in-fwd">
          <NavLink to="/projects" style={{ textDecorationLine: "none" }}>
            <button className="project-btn">
              {" "}
              <FaGear style={gearStyle} /> View Projects{" "}
            </button>
          </NavLink>
          <NavLink to="/blogs" style={{ textDecorationLine: "none" }}>
            <button className="blog-btn">
              {" "}
              <FaAddressBook style={blogStyle} />
              Read my blog{" "}
            </button>
          </NavLink>
        </div>
      </div>

      <section className="fproject-container">
        <h1 className="fade-in-top">Highlighted Projects</h1>
        <p className="fade-in-top">
          My notable projects in cybersecurity and development{" "}
        </p>
        <div className="fproject-boxes">{projectElements}</div>
        <div className="button-container fade-in-top">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <button className="all-projects-btn">
              {" "}
              All Projects
              <span>
                <MdOutlineArrowForwardIos />
              </span>
            </button>
          </Link>
        </div>
      </section>

      <section className="fblog-container">
        <h1 className="fade-in-top">My Blogs</h1>
        <p className="fade-in-top">
          My Stories, Lessons, and Experiences from the World of Cybersecurity
          and Web Apps
        </p>
        <div className="fblog-boxes">{blogElements}</div>
        <div className="button-container fade-in-top">
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <button className="all-blog-btn">
              {" "}
              View All Blogs
              <span>
                <MdOutlineArrowForwardIos />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
