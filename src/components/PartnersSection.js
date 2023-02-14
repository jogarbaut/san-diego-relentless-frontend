import { SiNike } from "react-icons/si"

const PartnersSection = () => {
  return (
    <section className="section-padding section-bg-primary">
      <div className="section-title text-white">PARTNERS</div>
      <div className="text-white section-description">
        Please visit our{" "}
        <span className="text-brand-secondary">Support Page</span> if you are
        interested in supporting our organization.
      </div>
      <div className="partners-container">
        <SiNike className="partner-icon" />
      </div>
    </section>
  )
}

export default PartnersSection
