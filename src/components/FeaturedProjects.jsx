import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Featured({
  title,
  className,
  delay = 0,
  description,
  id,
}) {
  const style = { animationDelay: `${delay}s` };

  return (
    <Link to={`/projects`} style={{ textDecoration: "none", color: "white" }}>
      <div className={`fproject-box ${className}`} style={style}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`#${id}`}>
          {" "}
          Go to <GoArrowUpRight className="arrow-up-right" />{" "}
        </a>
      </div>
    </Link>
  );
}
