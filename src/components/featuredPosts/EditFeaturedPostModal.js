import moment from "moment"
import { useState, useContext, useEffect } from "react"
import FeaturedPostContext from "../../context/FeaturedPostContext"
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Modal, Form } from "react-bootstrap"

const EditFeaturedPostModal = ({
  selectedFeaturedPostId,
  showEditFeaturedPostModal,
  setShowEditFeaturedPostModal,
}) => {
  // Context
  const { auth } = useAuth()
  const { dispatch } = useContext(FeaturedPostContext)

  // Edit featured post form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [newImageFile, setNewImageFile] = useState(false)
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")

  // Private axios
  const axiosPrivate = useAxiosPrivate()

  // Close modal
  const handleCloseEditFeaturedPostModal = () =>
    setShowEditFeaturedPostModal(false)

  // handleImageUpload
  const handleImageUpload = (e) => {
    setNewImageFile(true)
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
      setNewImageFile(false)
    }
  }

  // useEffect to set initial state
  useEffect(() => {
    const getFeaturedPost = async () => {
      try {
        const response = await axiosPrivate.get(
          `/featuredPosts/${selectedFeaturedPostId}`,
          {
            withCredentials: true,
          }
        )
        if (response.data) {
          setTitle(response.data.title)
          setDescription(response.data.description)
          setImage(response.data.image.url)
          setDate(moment.utc(response.data.date).format("YYYY-MM-DD"))
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (selectedFeaturedPostId) getFeaturedPost()
  }, [selectedFeaturedPostId])

  // Submit handler for edit featured post
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const username = auth.username
    try {
      if(newImageFile) {
        const response = await axiosPrivate.put(
          "/featuredPosts",
          JSON.stringify({
            id: selectedFeaturedPostId,
            username,
            title,
            description,
            image,
            date,
          }),
          { withCredentials: true }
        )
        if (response.data) {
          handleCloseEditFeaturedPostModal()
          setTitle("")
          setDescription("")
          setImage("")
          setDate("")
          dispatch({ type: "UPDATE_FEATURED_POST", payload: response.data })
        }
      } else {
        const response = await axiosPrivate.put(
          "/featuredPosts",
          JSON.stringify({
            id: selectedFeaturedPostId,
            username,
            title,
            description,
            date,
          }),
          { withCredentials: true }
        )
        if (response.data) {
          handleCloseEditFeaturedPostModal()
          setTitle("")
          setDescription("")
          setImage("")
          setDate("")
          dispatch({ type: "UPDATE_FEATURED_POST", payload: response.data })
        }
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
        `/featuredPosts/${selectedFeaturedPostId}`,
        {
          withCredentials: true,
        }
      )
      if (response.data) {
        dispatch({ type: "DELETE_FEATURED_POST", payload: response.data })
        handleCloseEditFeaturedPostModal()
        setTitle("")
        setDescription("")
        setImage("")
        setDate("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal
      show={showEditFeaturedPostModal}
      onHide={handleCloseEditFeaturedPostModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Featured Post</Modal.Title>
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
          <Button
            variant="secondary"
            onClick={handleCloseEditFeaturedPostModal}
          >
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

export default EditFeaturedPostModal
