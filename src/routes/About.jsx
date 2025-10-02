import { LuCircleDotDashed } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="about-container">
        <div className="about-box slide-in-blurred-bottom">
          <div className="about-content">
            <h1 className="about-title fade-in-top">About Me</h1>
            <p className="about-para fade-in-top">
              Hello! My name is Muhammed Tayyeb (tbx10) and I am an aspiring red
              teamer and a freelancer. <br /> If you're interested in my
              profile, follow me for blogs and writeups!
            </p>
            <hr />
            <h1 className="about-title fade-in-top">
              Academic Major & Courses
            </h1>
            <div className="about-mini-box-container">
              <div className="about-mini-box fade-in-bottom">
                <h3>
                  {" "}
                  <LuCircleDotDashed className="dash-icon" /> Cybersecurity
                </h3>
                <p>
                  Bsc(Hons) with a focus in Digital Forensics, Ethical Hacking,
                  and Incident Response
                </p>
              </div>
              <div className="about-mini-box fade-in-bottom">
                <h3>
                  <LuCircleDotDashed className="dash-icon" />
                  CS 377 & CS 340 - Operating Systems and Computer Networking{" "}
                </h3>
                <p>
                  Online Courses from the University of Massachusetts and
                  Northern Universities with focus in Networking and Systems.
                </p>
              </div>
            </div>
            <hr />
            <h1 className="about-title fade-in-top">Get in Touch!</h1>
            <div className="about-mini-box-container">
              <Link to="https://www.linkedin.com/in/mtayyebbilal/" style={{textDecoration: "none", color: "white"}}>
              <div className="about-contact-boxes fade-in-bottom">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/mtayyebbilal/">
                  <CiLinkedin className="linkedin-icon" />
                  mtayyebbilal
                </a>
              </div>
              </Link>
              <Link to="mailto:tayyeb0750@gmail.com" style={{textDecoration: "none", color: "white"}}>
              <div className="about-contact-boxes fade-in-bottom">
                <h3>Email</h3>
                <a href="mailto:tayyeb0750@gmail.com">
                  {" "}
                  <IoMailOutline className="mail-icon" />
                  tayyeb0750@gmail.com
                </a>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
