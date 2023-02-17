import { Button } from "react-bootstrap"

const BoyTeamsEditorRow = ({ team, setSelectedTeamId, setShowEditTeamModal }) => {
  const handleSelectedTeam = () => {
    setSelectedTeamId(team._id)
    setShowEditTeamModal(true)
  }

  return (
    <tr>
      <td>{team.name}</td>
      <td>{team.coach}</td>
      <td><Button onClick={handleSelectedTeam}>Edit</Button></td>
    </tr>
  )
}

export default BoyTeamsEditorRow