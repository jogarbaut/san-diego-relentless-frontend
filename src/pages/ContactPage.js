import { useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import SectionTitle from "../components/common/SectionTitle"

const ContactPage = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("contact")
  }, [])

  return (
    <section className="section-padding section-bg-white page-min-height">
      <SectionTitle title={"CONTACT"} />
      <div className="text-brand-primary section-description">
        For information about joining San Diego Relentless, please contact a
        member from our team below.
      </div>
      <Row className="g-0 contact-subsection">
        <Col md={6} className="g-0">
          <div className="contact-image-container">
            <img
              src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676674671/sdr/sdr-logo_dsgltf.png"
              alt="Organization Logo"
            />
          </div>
        </Col>
        <Col md={6} className="g-0">
          <div className="contact-content">
            <div className="section-subtitle">Brandon Dowdy | President</div>
            <div className="contact-content-text">
              brandon@sandiegorelentless.org
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default ContactPage
