import { GoLinkExternal } from "react-icons/go";
import { FaCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HomeBlogs(props) {
  const tagsElements = props.tags.map((tag, index) => {
    const isLast = index === props.tags.length - 1;
    return (
      <span className={`${isLast ? "fblog-date" : "fblog-tag"}`} key={index}>
        {isLast ? <FaCircle className="circle-icon" /> : ""}
        {tag}
      </span>
    );
  });
  return (
    <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
      <div className={`fblog-box ${props.className}`} style={props.style}>
        <h3 className="fblog-title">{props.title}</h3>
        <p className="fblog-tags">{tagsElements}</p>
        <p className="fblog-desc">{props.description}</p>
        <a href="/blog">
          {" "}
          Read More <GoLinkExternal className="fill-arrow-up-right" />{" "}
        </a>
      </div>
    </Link>
  );
}
