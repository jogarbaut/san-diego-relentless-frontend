import { useState, useContext } from "react"
import PostContext from "../../context/PostContext"
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Modal, Form } from "react-bootstrap"

const NewPostEditorModal = ({ showNewPostModal, setShowNewPostModal }) => {
  // Context
  const { auth } = useAuth()
  const { dispatch } = useContext(PostContext)

  // New post form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [markdown, setMarkdown] = useState("")
  const [date, setDate] = useState("")

  // Private axios
  const axiosPrivate = useAxiosPrivate()

  // Close modal
  const handleCloseNewPostModal = () => setShowNewPostModal(false)

  // Submit handler for new post
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const username = auth.username
    try {
      const response = await axiosPrivate.post(
        "/posts",
        JSON.stringify({
          username,
          title,
          description,
          markdown,
          date,
        }),
        { withCredentials: true }
      )
      if (response.data) {
        handleCloseNewPostModal()
        setTitle("")
        setDescription("")
        setMarkdown("")
        setDate("")
        dispatch({ type: "CREATE_POST", payload: response.data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal show={showNewPostModal} onHide={handleCloseNewPostModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmitHandler}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="body">Body</Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              placeholder="Enter body"
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="date">Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              placeholder="Enter date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNewPostModal}>
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

export default NewPostEditorModal
