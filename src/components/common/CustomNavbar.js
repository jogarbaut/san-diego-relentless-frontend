import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import {
  FaExternalLinkAlt,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"

const CustomNavbar = ({ activePage }) => {
  const activeStyleClassName = `custom-navbar-link-active`
  const nonActiveStyleClassName = `custom-navbar-link`

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="custom-navbar"
      variant="dark"
    >
      <Navbar.Brand href="/home" className="custom-navbar-brand">
        <img src='https://res.cloudinary.com/dgulbxrz1/image/upload/v1676675806/sdr/sdr-small-icon_nvo8tb.png' alt="logo" className="custom-navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto custom-navbar-nav">
          <Link
            to="/"
            className={
              activePage === "home"
                ? activeStyleClassName
                : nonActiveStyleClassName
            }
          >
            Home
          </Link>
          <Link
            to="/news"
            className={
              activePage === "news"
                ? activeStyleClassName
                : nonActiveStyleClassName
            }
          >
            News
          </Link>
          <Link
            to="/contact"
            className={
              activePage === "contact"
                ? activeStyleClassName
                : nonActiveStyleClassName
            }
          >
            Contact
          </Link>
          <Link
            to="/boys-teams"
            className={
              activePage === "boysTeams"
                ? activeStyleClassName
                : nonActiveStyleClassName
            }
          >
            Boys Teams
          </Link>
          <Link
            to="/girls-teams"
            className={
              activePage === "girlsTeams"
                ? activeStyleClassName
                : nonActiveStyleClassName
            }
          >
            Girls Teams
          </Link>
          <a
            href="https://go.teamsnap.com/login/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-navbar-link"
          >
            TeamSnap <FaExternalLinkAlt />
          </a>
        </Nav>
        <Nav className="gap-3">
          <div className="social-icon-container">
            <Nav.Link
              className="social-icon"
              href="https://www.facebook.com/sandiegorelentless/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </Nav.Link>
            <Nav.Link
              className="social-icon"
              href="https://www.instagram.com/sandiegorelentless/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
