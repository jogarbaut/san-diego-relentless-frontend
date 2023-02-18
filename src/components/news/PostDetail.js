import { useParams, Link } from "react-router-dom"
import { useContext } from "react"
import PostContext from "../../context/PostContext"
import moment from "moment"

const PostDetail = () => {
  const { posts } = useContext(PostContext)
  const { id } = useParams()
  const post = posts.find((post) => post._id.toString() === id)

  return (
    <article className="section-padding section-bg-white">
      {post && (
        <div className="content-container">
          <div className="section-title ">NEWS</div>
          <h2 className="text-brand-primary">{post.title}</h2>
          <p className="text-brand-secondary">
            Posted: {moment.utc(post.date).format("MM-DD-YYYY")}
          </p>
          <p>{post.description}</p>
          <p>{post.markdown}</p>
          <Link to="/news">Back</Link>
        </div>
      )}
    </article>
  )
}

export default PostDetail
