import { useState, useContext } from "react"
import PostContext from "../../context/PostContext"
import useAuth from "../../hooks/useAuth"
import Pagination from "../common/Pagination"
import { Button, Row, Col, Table } from "react-bootstrap"
import NewPostEditorModal from "./NewPostEditorModal"
import EditPostEditorModal from "./EditPostEditorModal"
import NewsEditorRow from "./NewsEditorRow"

const NewsEditor = () => {
  const { posts, isLoading } = useContext(PostContext)

  // State for post to view/edit/delete
  const [selectedPostId, setSelectedPostId] = useState("")

  // Pagination functionality
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  // New post modal functionality
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const handleShowNewPostModal = () => setShowNewPostModal(true)

  // New post modal functionality
  const [showEditPostEditorModal, setShowEditPostEditorModal] = useState(false)
  const handleShowEditPostEditorModal = () => setShowEditPostEditorModal(true)

  // Pagination functionality
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Check if loading data
  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <>
      <div className="editor-header">
        <Row className="g-0">
            <div className="editor-title">News</div>
            <Button onClick={handleShowNewPostModal} className="ms-auto">New Post</Button>
        </Row>
      </div>
      <Table responsive striped className="editor-table" size="sm">
        <thead>
          <tr>
            <td>Date</td>
            <td>Title</td>
            <td>Description</td>
            <td>Body</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <NewsEditorRow
              key={post._id}
              post={post}
              setSelectedPostId={setSelectedPostId}
              setShowEditPostEditorModal={setShowEditPostEditorModal}
            />
          ))}
        </tbody>
      </Table>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

      <NewPostEditorModal
        showNewPostModal={showNewPostModal}
        setShowNewPostModal={setShowNewPostModal}
      />

      <EditPostEditorModal
        selectedPostId={selectedPostId}
        showEditPostEditorModal={showEditPostEditorModal}
        setShowEditPostEditorModal={setShowEditPostEditorModal}
      />
    </>
  )
}

export default NewsEditor
