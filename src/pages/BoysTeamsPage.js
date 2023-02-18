import { useContext, useEffect } from "react"
import TeamDetails from "../components/common/TeamDetails"
import BoyTeamContext from "../context/BoyTeamContext"
import LoadingSpinner from "../components/common/LoadingSpinner"
import SectionTitle from "../components/common/SectionTitle"
import { Col, Row } from "react-bootstrap"

const BoysTeamsPage = ({ setActivePage }) => {
  const { boyTeams, isLoading } = useContext(BoyTeamContext)

  useEffect(() => {
    setActivePage("boysTeams")
  }, [])

  if (isLoading) {
    return (
      <section className="section-padding section-bg-white page-min-height">
        <SectionTitle title={"BOYS TEAMS"} />
        <LoadingSpinner />
      </section>
    )
  }

  return (
    <section className="section-padding section-bg-white section-contact page-min-height">
      <SectionTitle title={"BOYS TEAMS"} />
      <div className="text-brand-primary section-description">
        For information about joining San Diego Relentless, please visit our
        Contact Page.
      </div>
      <div className="content-container">
        <Row className="g-0">
          {boyTeams &&
            boyTeams.map((team) => (
              <Col className="g-0" md={4} key={team._id}>
                <TeamDetails team={team} />
              </Col>
            ))}
        </Row>
      </div>
    </section>
  )
}

export default BoysTeamsPage
