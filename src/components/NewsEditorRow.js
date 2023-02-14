import React from 'react'

const NewsEditorRow = ({ post }) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.title}</td>
      <td>{post.title}</td>
      <td>{post.title}</td>
    </tr>
  )
}

export default NewsEditorRow