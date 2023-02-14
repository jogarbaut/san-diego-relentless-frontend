import React from 'react'
import { Link } from 'react-router-dom'

const PostPreview = ({ post }) => {
  return (
    <article className="post-preview">
      <h3 className="post-preview-title">{post.title}</h3>
      <p className="post-date">Date: 2/13/23</p>
      <p className="post-preview-description">{post.body}</p>
      <div className="d-flex gap-3">
        <p className="brand-link">Read More</p>
      </div>
    </article>
  )
}

export default PostPreview