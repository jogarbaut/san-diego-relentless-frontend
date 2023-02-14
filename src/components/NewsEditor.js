import { useState, useContext } from "react"
import PostContext from "../context/PostContext"
import Pagination from "./Pagination"
import { Button, Table } from "react-bootstrap"
import NewsEditorRow from "./NewsEditorRow"

const NewsEditor = () => {
  const { posts, isLoading } = useContext(PostContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  if (isLoading) {
    return <p>Loading</p>
  }

  // Pagination functionality
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className="editor-header">
        <div className="editor-title">News</div>
        <Button className="">Create News Post</Button>
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
    </>
  )
}

export default NewsEditor
