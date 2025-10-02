import { GoLinkExternal } from "react-icons/go";
import {Link} from "react-router-dom"

export default function Project({
  title,
  tags,
  description,
  link,
  delay,
  className,
}) {
  const style = { animationDelay: `${delay}s` };

  const tagsElements = tags.map((tag, index) => {
    return (
      <span key={index} className="project-tag">
        {tag}
      </span>
    );
  });
  return (
    <Link to={`${link}`} style={{textDecoration: "none", color: "white"}}>
    <div className={`project-box ${className}`} style={style}>
        <h3>
          {title}
        </h3>
        <p className="project-tags">{tagsElements}</p>
        <p>{description}</p>
        <a href={`${link}`}>
          {" "}
          View on Github <GoLinkExternal className="fill-arrow-up-right" />
        </a>
    </div>
    </Link>
    
  );
}
