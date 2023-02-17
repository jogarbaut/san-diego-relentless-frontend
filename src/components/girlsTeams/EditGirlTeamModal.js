import { useState, useContext, useEffect } from "react"
import GirlTeamContext from "../../context/GirlTeamContext"
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Modal, Form } from "react-bootstrap"

const EditGirlTeamModal = ({
  selectedTeamId,
  showEditTeamModal,
  setShowEditTeamModal,
}) => {
  // Context
  const { auth } = useAuth()
  const { dispatch } = useContext(GirlTeamContext)

  // Edit team form state
  const [name, setName] = useState("")
  const [coach, setCoach] = useState("")
  const [roster, setRoster] = useState("")

  // Private axios
  const axiosPrivate = useAxiosPrivate()

  // Close modal
  const handleCloseEditTeamModal = () => setShowEditTeamModal(false)

  // useEffect to set initial state
  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await axiosPrivate.get(
          `/girlTeams/${selectedTeamId}`,
          {
            withCredentials: true,
          }
        )
        if (response.data) {
          setName(response.data.name)
          setCoach(response.data.coach)
          setRoster(response.data.roster)
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (selectedTeamId) getTeam()
  }, [selectedTeamId])

  // Submit handler for edit team
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const username = auth.username
    try {
      const response = await axiosPrivate.put(
        "/girlTeams",
        JSON.stringify({
          id: selectedTeamId,
          username,
          name,
          coach,
          roster,
        }),
        { withCredentials: true }
      )
      if (response.data) {
        dispatch({ type: "UPDATE_GIRL_TEAM", payload: response.data })
        handleCloseEditTeamModal()
        setName("")
        setCoach("")
        setRoster("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Delete handler
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosPrivate.delete(
        `/girlTeams/${selectedTeamId}`,
        {
          withCredentials: true,
        }
      )
      if (response.data) {
        dispatch({ type: "DELETE_GIRL_TEAM", payload: response.data })
        handleCloseEditTeamModal()
        setName("")
        setCoach("")
        setRoster("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal
      show={showEditTeamModal}
      onHide={handleCloseEditTeamModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Girl Team</Modal.Title>
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
          <Button variant="secondary" onClick={handleCloseEditTeamModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditGirlTeamModal
