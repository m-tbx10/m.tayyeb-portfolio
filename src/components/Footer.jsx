import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>© 2025 Muhammed Tayyeb(tbx10). All rights reserved.</p>
        <div className="footer-icon-container">
          <Link to="https://github.com/m-tbx10">
            <FiGithub className="footer-icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/mtayyebbilal/">
            <CiLinkedin className="footer-icon" />
          </Link>
          <Link>
            <SlSocialTwitter className="footer-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
