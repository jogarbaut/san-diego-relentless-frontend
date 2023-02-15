import { useState, useContext } from "react"
import PostContext from "../context/PostContext"
import Pagination from "./Pagination"
import { Button, Table, Modal, Form } from "react-bootstrap"
import NewsEditorRow from "./NewsEditorRow"
import axios from "../api/axios"
// import useAxiosPrivate from "../hooks/useAxiosPrivate"
import useAuth from "../hooks/useAuth"

const NewsEditor = () => {
  const { auth } = useAuth()
  const { posts, isLoading } = useContext(PostContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  // Modal functionality
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Post Form
  // const axiosPrivate = useAxiosPrivate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [markdown, setMarkdown] = useState("")
  const [date, setDate] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(auth.userId)
    try {
      const newPost = await axios.post("/posts", {
        user: auth.userId,
        title,
        description,
        markdown,
        date,
      }, {withCredentials: true})
    } catch (err) {
      console.log(err, 'line 37 news editor')
    }
  }

  // Pagination functionality
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <>
      <div className="editor-header">
        <div className="editor-title">News</div>
        <Button onClick={handleShow}>New Post</Button>
      </div>
      <Table responsive striped className="editor-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Date</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <NewsEditorRow key={post.id} post={post} />
          ))}
        </tbody>
      </Table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default NewsEditor
