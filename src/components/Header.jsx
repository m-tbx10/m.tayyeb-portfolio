import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <Link to="/" style={{textDecoration: "none", color: "white"}}><h1 className="header-title">tbx10</h1></Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <FiX size={28} color="white" />
        ) : (
          <FiMenu size={28} color="white" />
        )}
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "#F36363" : "white" })}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "#F36363" : "white" })}
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({ color: isActive ? "#F36363" : "white" })}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/blogs"
          style={({ isActive }) => ({ color: isActive ? "#F36363" : "white" })}
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
}
