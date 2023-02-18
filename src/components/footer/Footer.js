import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaExternalLinkAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer section-padding section-bg-primary">
      <Row className="footer-content g-0">
        <Col md={5} className="g-0">
          <div className="footer-subtitle text-brand-secondary">
            SAN DIEGO RELENTLESS
          </div>
          <p className="mb-0">
            San Diego County Youth Basketball Program
          </p>
          <p className="mb-0">
            Copyright &copy; 2023 San Diego Relentless - All rights reserved
          </p>
        </Col>
        <Col md={2} className="g-0">
          <div className="footer-subtitle text-brand-secondary">LINKS</div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/boys-teams">Boys Teams</Link>
            <Link to="girls-teams">Girls Teams</Link>
            <a
              href="https://go.teamsnap.com/login/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              TeamSnap <FaExternalLinkAlt />
            </a>
            <Link to="dashboard">Admin Dashboard</Link>
          </div>
        </Col>
        <Col md={4} className="footer-contact g-0">
          <div className="footer-subtitle text-brand-secondary">CONTACT</div>
          <p className="mb-0">Brandon Dowdy</p>
          <p className="mb-0">President</p>
          <p className="mb-0">brandon@sandiegorelentless.org</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
