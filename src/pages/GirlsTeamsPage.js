import { useContext, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import TeamDetails from "../components/TeamDetails"
import GirlTeamContext from "../context/GirlTeamContext"

const GirlsTeamsPage = ({setActivePage}) => {
  const { girlTeams, isLoading } = useContext(GirlTeamContext)

  useEffect(() => {
    setActivePage("girlsTeams")
  }, [])

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <section className="section-padding section-bg-white section-contact">
      <div className="section-title text-brand-primary">GIRLS TEAMS</div>
      <div className="text-brand-primary section-description">
        For information about joining San Diego Relentless, please visit our
        Contact Page.
      </div>
      <div className="content-container">
        <Row className="g-0">
          {girlTeams &&
            girlTeams.map((team) => (
              <Col md={4} key={team._id} >
                <TeamDetails team={team} />
              </Col>
            ))}
        </Row>
      </div>
    </section>
  )
}

export default GirlsTeamsPage