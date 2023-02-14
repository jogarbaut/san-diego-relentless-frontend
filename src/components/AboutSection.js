import SdrLogo from "../assets/img/sdr-logo.png"
import AboutOne from "../assets/img/aboutOne.png"
import AboutTwo from "../assets/img/aboutTwo.png"

const AboutSection = () => {
  return (
    <section className="section-padding section-bg-white">
      <div className="section-title text-brand-primary">ABOUT</div>
      <div className="text-brand-primary section-description">
      Created to inspire and promote high level youth development by providing athletic, educational, and individual growth.
      </div>
      <div className="about-subsection">
        <div className="about-image-container">
        <img src={AboutOne} alt="logo" />

        </div>
        <div className="about-content">
          <div className="section-subtitle">Who We Are</div>
          <p>San Diego Relentless is an elite basketball program located in San Diego County that inspires and promotes high level youth development by providing athletic, educational, and individual growth.</p>
        </div>
      </div>
      <div className="about-subsection">
        <div className="about-image-container">
        <img src={SdrLogo} alt="logo" />

        </div>
        <div className="about-content">
          <div className="section-subtitle">Honesty, Accountability, & Teamwork</div>
          <p>We are committed to developing character, team work, and sportsmanship in a competitive but enjoyable environment. We educate and empower young athletes with confidence, commitment, and integrity so they can live a productive and successful tomorrow both on and off the court.</p>
        </div>
      </div>
      <div className="about-subsection">
        <div className="about-image-container">
        <img src={AboutTwo} alt="logo" />
        </div>
        <div className="about-content">
          <div className="section-subtitle">Our Core Values</div>
          <ul>
            <li>Positive coaching with expert teaching</li>
            <li>Sportsmanship and teamwork in a competitive environment</li>
            <li>Learn "life lessons" that will provide value off the court</li>
            <li>Develop individual and team skill sets for the next level of basketball</li>
            <li>Love and Trust the process</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection