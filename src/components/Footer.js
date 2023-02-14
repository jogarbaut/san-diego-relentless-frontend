import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaExternalLinkAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer section-padding section-bg-primary">
      <Row className="footer-content g-0 gap-2">
        <Col xs={12} md={5} className="g-0">
          <div className="section-subtitle text-brand-secondary">
            SAN DIEGO RELENTLESS
          </div>
          <p className="mb-0">
            Youth basketball program located in San Diego County
          </p>
          <p className="mb-0">
            Copyright &copy; 2023 San Diego Relentless - All rights reserved
          </p>
        </Col>
        <Col xs={12} md={2} className="g-0">
          <div className="section-subtitle text-brand-secondary">LINKS</div>
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
          </div>
        </Col>
        <Col xs={12} md={4} className="footer-contact g-0">
          <div className="section-subtitle text-brand-secondary">CONTACT</div>
          <p className="mb-0">Brandon Dowdy</p>
          <p className="mb-0">President</p>
          <p className="mb-0">brandon@sandiegorelentless.org</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
