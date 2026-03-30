import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>
        <FaHome /> Home
      </Link>
      <Link to="/about" style={styles.link}>
        <FaInfoCircle /> About
      </Link>
      <Link to="/contact" style={styles.link}>
        <FaPhone /> Contact
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#222",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
};

export default Navbar;