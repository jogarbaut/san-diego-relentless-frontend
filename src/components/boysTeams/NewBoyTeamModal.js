import { useState, useContext } from "react"
import BoyTeamContext from "../../context/BoyTeamContext"
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Modal, Form } from "react-bootstrap"

const NewBoyTeamModal = ({ showNewTeamModal, setShowNewTeamModal }) => {
  // Context
  const { auth } = useAuth()
  const { dispatch } = useContext(BoyTeamContext)

  // New team form state
  const [name, setName] = useState("")
  const [coach, setCoach] = useState("")
  const [roster, setRoster] = useState("")

  // Private axios
  const axiosPrivate = useAxiosPrivate()

  // Close modal
  const handleCloseNewTeamModal = () => setShowNewTeamModal(false)

  // Submit handler for new team
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const username = auth.username
    try {
      const response = await axiosPrivate.post(
        "/boyTeams",
        JSON.stringify({
          username,
          name,
          coach,
          roster,
        }),
        { withCredentials: true }
      )
      if (response.data) {
        dispatch({ type: "CREATE_BOY_TEAM", payload: response.data })
        handleCloseNewTeamModal()
        setName("")
        setCoach("")
        setRoster("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal show={showNewTeamModal} onHide={handleCloseNewTeamModal} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>New Boy Team</Modal.Title>
    </Modal.Header>
    <Form onSubmit={onSubmitHandler}>
      <Modal.Body>
        <Form.Group>
          <Form.Label htmlFor="teamName">Team Name</Form.Label>
          <Form.Control
            name="teamName"
            type="text"
            placeholder="Enter team name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="coach">Coach</Form.Label>
          <Form.Control
            name="coach"
            as="textarea"
            placeholder="Enter coach name"
            onChange={(e) => setCoach(e.target.value)}
            value={coach}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="roster">Roster</Form.Label>
          <Form.Control
            name="roster"
            as="textarea"
            placeholder="Enter roster"
            onChange={(e) => setRoster(e.target.value)}
            value={roster}
          />
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseNewTeamModal}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
  )
}

export default NewBoyTeamModal