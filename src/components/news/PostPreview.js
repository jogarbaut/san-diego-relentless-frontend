import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

const PostPreview = ({ post }) => {
  return (
    <article className="post-preview">
      <h3 className="post-preview-title">{post.title}</h3>
      <p className="post-date">
        Posted: {moment.utc(post.date).format("MM-DD-YYYY")}
      </p>
      <p className="post-preview-description">Preview: {post.description}</p>
      <div className="d-flex gap-3">
        <Link to={`/news/${post._id}`}>
          <p className="brand-link">Read More</p>
        </Link>
      </div>
    </article>
  )
}

export default PostPreview
