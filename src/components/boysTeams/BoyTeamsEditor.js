import { useState, useContext } from "react"
import BoyTeamContext from "../../context/BoyTeamContext"
import { Button, Row, Table } from "react-bootstrap"
import EditBoyTeamModal from "./EditBoyTeamModal"
import NewBoyTeamModal from "./NewBoyTeamModal"
import BoyTeamsEditorRow from "./BoyTeamsEditorRow"

const BoyTeamsEditor = () => {
  const { boyTeams, isLoading } = useContext(BoyTeamContext)

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
          <div className="editor-title">Boys Teams</div>
          <Button onClick={handleShowNewTeamModal} className="ms-auto">
            New Boy Team
          </Button>
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
          {boyTeams.map((team) => (
            <BoyTeamsEditorRow
              key={team._id}
              team={team}
              setSelectedTeamId={setSelectedTeamId}
              setShowEditTeamModal={setShowEditTeamModal}
            />
          ))}
        </tbody>
      </Table>

      <NewBoyTeamModal
        showNewTeamModal={showNewTeamModal}
        setShowNewTeamModal={setShowNewTeamModal}
      />

      <EditBoyTeamModal
        selectedTeamId={selectedTeamId}
        showEditTeamModal={showEditTeamModal}
        setShowEditTeamModal={setShowEditTeamModal}
      />
    </>
  )
}

export default BoyTeamsEditor
