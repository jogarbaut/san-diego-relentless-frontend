import { useState, useContext } from "react"
import PostContext from "../../context/PostContext"
import PostPreview from "./PostPreview"
import Pagination from "../common/Pagination"
import LoadingSpinner from "../common/LoadingSpinner"
import SectionTitle from "../common/SectionTitle"

const PostFeed = () => {
  const { posts, isLoading } = useContext(PostContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  if (isLoading) {
    return (
      <section className="section-padding section-bg-white">
        <SectionTitle title={"NEWS"} />
        <LoadingSpinner />
      </section>
    )
  }

  // Pagination functionality
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <section className="section-padding section-bg-white">
      <div className="content-container">
        <SectionTitle title={"NEWS"} />
        {currentPosts &&
          currentPosts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </section>
  )
}

export default PostFeed
