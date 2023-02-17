import { useState, useContext } from "react"
import FeaturedPostContext from "../../context/FeaturedPostContext"
import Pagination from "../Pagination"
import { Button, Row, Table } from "react-bootstrap"
import NewFeaturedPostModal from "./NewFeaturedPostModal"
import EditFeaturedPostModal from "./EditFeaturedPostModal"
import FeaturedPostEditorRow from "./FeaturedPostEditorRow"

const FeaturedPostEditor = () => {
  const { featuredPosts, isLoading } = useContext(FeaturedPostContext)

  // State for featured post to view/edit/delete
  const [selectedFeaturedPostId, setSelectedFeaturedPostId] = useState("")

  // Pagination functionality
  const [currentPage, setCurrentPage] = useState(1)
  const [featuredPostsPerPage] = useState(10)

  // New featured post modal functionality
  const [showNewFeaturedPostModal, setShowNewFeaturedPostModal] = useState(false)
  const handleShowNewFeaturedPostModal = () => setShowNewFeaturedPostModal(true)

  // New featured post modal functionality
  const [showEditFeaturedPostModal, setShowEditFeaturedPostModal] = useState(false)
  const handleShowEditFeaturedPostModal = () => setShowEditFeaturedPostModal(true)

  // Pagination functionality
  const indexOfFeaturedLastPost = currentPage * featuredPostsPerPage
  const indexOfFirstFeaturedPost = indexOfFeaturedLastPost - featuredPostsPerPage
  const currentFeaturedPosts = featuredPosts?.slice(indexOfFirstFeaturedPost, indexOfFeaturedLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Check if loading data
  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <>
      <div className="editor-header">
        <Row>

            <div className="editor-title">Featured Posts</div>

            <Button onClick={handleShowNewFeaturedPostModal} className="ms-auto">New Featured Post</Button>

        </Row>
      </div>
      <Table responsive striped className="editor-table" size="sm">
        <thead>
          <tr>
            <td>Date</td>
            <td>Title</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentFeaturedPosts.map((featuredPost) => (
            <FeaturedPostEditorRow
              key={featuredPost._id}
              featuredPost={featuredPost}
              setSelectedFeaturedPostId={setSelectedFeaturedPostId}
              setShowEditFeaturedPostModal={setShowEditFeaturedPostModal}
            />
          ))}
        </tbody>
      </Table>

      <Pagination
        featuredPostsPerPage={featuredPostsPerPage}
        totalFeaturedPosts={featuredPosts.length}
        paginate={paginate}
      />

      <NewFeaturedPostModal
        showNewFeaturedPostModal={showNewFeaturedPostModal}
        setShowNewFeaturedPostModal={setShowNewFeaturedPostModal}
      />

      <EditFeaturedPostModal
        selectedFeaturedPostId={selectedFeaturedPostId}
        showEditFeaturedPostModal={showEditFeaturedPostModal}
        setShowEditFeaturedPostModal={setShowEditFeaturedPostModal}
      />
    </>
  )
}

export default FeaturedPostEditor
