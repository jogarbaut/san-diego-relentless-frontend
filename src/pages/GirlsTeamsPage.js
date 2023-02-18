import { useContext, useEffect } from "react"
import LoadingSpinner from "../components/common/LoadingSpinner"
import SectionTitle from "../components/common/SectionTitle"
import TeamDetails from "../components/common/TeamDetails"
import GirlTeamContext from "../context/GirlTeamContext"
import { Col, Row } from "react-bootstrap"

const GirlsTeamsPage = ({ setActivePage }) => {
  const { girlTeams, isLoading } = useContext(GirlTeamContext)

  useEffect(() => {
    setActivePage("girlsTeams")
  }, [])

  if (isLoading) {
    return (
      <section className="section-padding section-bg-white page-min-height">
        <SectionTitle title={"GIRLS TEAMS"} />
        <LoadingSpinner />
      </section>
    )
  }

  return (
    <section className="section-padding section-bg-white section-contact">
      <SectionTitle title={"GIRLS TEAMS"} />
      <div className="text-brand-primary section-description">
        For information about joining San Diego Relentless, please visit our
        Contact Page.
      </div>
      <div className="content-container">
        <Row className="g-0">
          {girlTeams &&
            girlTeams.map((team) => (
              <Col className="g-0" md={4} key={team._id}>
                <TeamDetails team={team} />
              </Col>
            ))}
        </Row>
      </div>
    </section>
  )
}

export default GirlsTeamsPage
