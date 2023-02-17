import { useState, useContext } from "react"
import GirlTeamContext from "../../context/GirlTeamContext"
import { Button, Row, Table } from "react-bootstrap"
import EditGirlTeamModal from './EditGirlTeamModal'
import NewGirlTeamModal from './NewGirlTeamModal'
import GirlTeamsEditorRow from "./GirlTeamsEditorRow"

const GirlTeamsEditor = () => {
  const { girlTeams, isLoading } = useContext(GirlTeamContext)

  // State for team to view/edit/delete
  const [selectedTeamId, setSelectedTeamId] = useState("")
  
  // New team modal functionality
  const [showNewTeamModal, setShowNewTeamModal] = useState(false)
  const handleShowNewTeamModal = () => setShowNewTeamModal(true)

  // Edit team modal functionality
  const [showEditTeamModal, setShowEditTeamModal] = useState(false)

  // Check if loading data
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="editor-header">
        <Row>
          <div className="editor-title">Girls Teams</div>
          <Button onClick={handleShowNewTeamModal} className="ms-auto">New Girl Team</Button>
        </Row>
      </div>
      <Table responsive striped className="editor-table" size="sm">
        <thead>
          <tr>
            <td>Team Name</td>
            <td>Coach</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {girlTeams && girlTeams.map((team) => (
            <GirlTeamsEditorRow
              key={team._id}
              team={team}
              setSelectedTeamId={setSelectedTeamId}
              setShowEditTeamModal={setShowEditTeamModal}
            />
          ))}
        </tbody>
      </Table>

      <NewGirlTeamModal
        showNewTeamModal={showNewTeamModal}
        setShowNewTeamModal={setShowNewTeamModal}
      />

      <EditGirlTeamModal
        selectedTeamId={selectedTeamId}
        showEditTeamModal={showEditTeamModal}
        setShowEditTeamModal={setShowEditTeamModal}
      />
    </>
  )
}

export default GirlTeamsEditor