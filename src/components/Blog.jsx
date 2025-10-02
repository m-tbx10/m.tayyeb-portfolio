import { GoLinkExternal } from "react-icons/go";
import {Link} from "react-router-dom"

export default function Blog({delay, className, tags, description, title, link}){
    const style = { animationDelay: `${delay}s` };
        
          const tagsElements = tags.map((tag, index) => {
            return (
              <span key={index} className="blog-tag">
                {tag}
              </span>
            );
          });
    return(
        <Link to={`${link}`} style={{textDecoration: "none", color: "white"}}>
            <div className={`blog-box ${className}`} style={style}>
              <h3>
                {title}
              </h3>
              <p className="blog-tags">{tagsElements}</p>
              <p>{description}</p>
              <a href={`${link}`}>
                {" "}
                View on Medium <GoLinkExternal className="fill-arrow-up-right" />
              </a>
            </div>
        </Link>
          );
}