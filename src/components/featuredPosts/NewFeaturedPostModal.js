import { useState, useContext } from "react"
import FeaturedPostContext from "../../context/FeaturedPostContext"
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Modal, Form } from "react-bootstrap"

const NewFeaturedPostModal = ({
  showNewFeaturedPostModal,
  setShowNewFeaturedPostModal,
}) => {
  // Context
  const { auth } = useAuth()
  const { dispatch } = useContext(FeaturedPostContext)

  // New featured post form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")

  // Private axios
  const axiosPrivate = useAxiosPrivate()

  // Close modal
  const handleCloseNewFeaturedPostModal = () =>
    setShowNewFeaturedPostModal(false)

  // handleImageUpload
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0]
    transformFile(imageFile)
  }

  // transform file to base64
  const transformFile = (file) => {
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
      }
    } else {
      setImage("")
    }
  }

  // Submit handler for new featured post
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const username = auth.username
    try {
      const response = await axiosPrivate.post(
        "/featuredPosts",
        JSON.stringify({
          username,
          title,
          description,
          image,
          date,
        }),
        { withCredentials: true }
      )
      if (response.data) {
        handleCloseNewFeaturedPostModal()
        setTitle("")
        setDescription("")
        setImage("")
        setDate("")
        dispatch({ type: "CREATE_FEATURED_POST", payload: response.data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal
      show={showNewFeaturedPostModal}
      onHide={handleCloseNewFeaturedPostModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Featured Post</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmitHandler}>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor="title">Title</Form.Label>
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
            <Form.Label htmlFor="date">Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              placeholder="Enter date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="image">Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/"
              size="sm"
              onChange={handleImageUpload}
            />
          </Form.Group>

          <div className="image-preview-container">
            {image ? (
              <img src={image} alt="image preview" />
            ) : (
              <p>Image preview will appear here after selecting a file.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNewFeaturedPostModal}>
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

export default NewFeaturedPostModal
