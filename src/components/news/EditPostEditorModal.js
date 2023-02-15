import moment from "moment"
import { useState, useContext, useEffect } from "react"
import PostContext from "../../context/PostContext"
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Modal, Form } from "react-bootstrap"

const EditPostEditorModal = ({
  selectedPostId,
  showEditPostEditorModal,
  setShowEditPostEditorModal,
}) => {
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
  const handleCloseEditPostEditorModal = () => setShowEditPostEditorModal(false)

  // UseEffect to set initial state
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axiosPrivate.get(`/posts/${selectedPostId}`, {
          withCredentials: true,
        })
        if (response.data) {
          setTitle(response.data.title)
          setDescription(response.data.description)
          setMarkdown(response.data.markdown)
          setDate(moment.utc(response.data.date).format("YYYY-MM-DD"))
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (selectedPostId) getPost()
  }, [selectedPostId])

  // Submit handler for edit post
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const username = auth.username
    try {
      const response = await axiosPrivate.put(
        "/posts",
        JSON.stringify({
          id: selectedPostId,
          username,
          title,
          description,
          markdown,
          date,
        }),
        { withCredentials: true }
      )
      if (response.data) {
        handleCloseEditPostEditorModal()
        setTitle("")
        setDescription("")
        setMarkdown("")
        setDate("")
        dispatch({ type: "UPDATE_POST", payload: response.data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Delete handler
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosPrivate.delete(`/posts/${selectedPostId}`, {
        withCredentials: true,
      })
      if (response.data) {
        dispatch({ type: "DELETE_POST", payload: response.data })
        handleCloseEditPostEditorModal()
        setTitle("")
        setDescription("")
        setMarkdown("")
        setDate("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal
      show={showEditPostEditorModal}
      onHide={handleCloseEditPostEditorModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
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
              value={title}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="body">Body</Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              placeholder="Enter body"
              onChange={(e) => setMarkdown(e.target.value)}
              value={markdown}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="date">Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              placeholder="Enter date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditPostEditorModal}>
            Cancel
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

export default EditPostEditorModal
