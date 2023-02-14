import { useEffect } from 'react'

const GirlsTeamsPage = ({setActivePage}) => {

  useEffect(() => {
    setActivePage("girlsTeams")
  }, [])

  return (
    <section className="section-padding section-bg-white section-contact">
      <div className="section-title text-brand-primary">GIRLS TEAMS</div>
      <div className="text-brand-primary section-description">
      For information about joining San Diego Relentless, please contact a member from our team below.
      </div>
      <div className="about-subsection">
        <div className="about-image-container">
        </div>
        <div className="about-content">
          <div className="section-subtitle">Brandon Dowdy</div>
          <p className='mb-0'>President</p>
          <p>brandon@sandiegorelentless.org</p>
        </div>
      </div>
    </section>
  )
}

export default GirlsTeamsPage