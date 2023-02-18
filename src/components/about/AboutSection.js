import SectionTitle from "../common/SectionTitle"

const AboutSection = () => {
  return (
    <section className="section-padding section-bg-white">
      <SectionTitle title={"ABOUT"} />
      <div className="text-brand-primary section-description">
        Created to inspire and promote high level youth development by providing
        athletic, educational, and individual growth.
      </div>
      {/* Subsection 1 */}
      <div className="section-subtitle">Who We Are</div>
      <div className="about-subsection">
        <div className="about-image-container">
          <img
            src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676674672/sdr/aboutOne_epwnhq.png"
            alt="Athlete Action Shot 1"
          />
        </div>
        <div className="about-content">
          <div className="about-content-text">
            San Diego Relentless is an elite basketball program located in San
            Diego County that inspires and promotes high level youth development
            by providing athletic, educational, and individual growth.
          </div>
        </div>
      </div>
      {/* Subsection 2 */}
      <div className="section-subtitle">
        Honesty, Accountability, & Teamwork
      </div>
      <div className="about-subsection">
        <div className="about-content">
          <div className="about-content-text">
            We are committed to developing character, team work, and
            sportsmanship in a competitive but enjoyable environment. We educate
            and empower young athletes with confidence, commitment, and
            integrity so they can live a productive and successful tomorrow both
            on and off the court.
          </div>
        </div>
        <div className="about-image-container">
          <img
            src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676674671/sdr/sdr-logo_dsgltf.png"
            alt="Organization Logo"
          />
        </div>
      </div>
      {/* Subsection 3 */}
      <div className="section-subtitle">Our Core Values</div>
      <div className="about-subsection">
        <div className="about-image-container">
          <img
            src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676674672/sdr/aboutTwo_gz77vn.png"
            alt="Athlete Action Shot 2"
          />
        </div>
        <div className="about-content">
          <div className="about-content-text">
            <ul>
              <li>Positive coaching with expert teaching</li>
              <li>Sportsmanship and teamwork in a competitive environment</li>
              <li>
                Learn "life lessons" that will provide value off the court
              </li>
              <li>
                Develop individual and team skill sets for the next level of
                basketball
              </li>
              <li>Love and Trust the process</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
