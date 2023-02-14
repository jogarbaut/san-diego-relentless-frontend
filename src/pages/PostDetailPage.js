import axios from 'axios'
import { useParams, Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import PostContext from "../context/PostContext"

const PostDetailPage = () => {
  const { posts, setPosts } = useContext(PostContext)
  const [post, setPost] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getPost = () => {
      axios
        .get(`http://localhost:8000/api/post/${id}`)
        .then((res) => {
          setPost(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (id) getPost()
  }, [])

  return (
    <article>
      <h1>{post.title}</h1>
    </article>

  )
}

export default PostDetailPage
