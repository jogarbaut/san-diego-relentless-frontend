import { useEffect } from "react"
import PostContext from "../context/PostContext"
import PostFeed from '../components/PostFeed'
import PostForm from '../components/PostForm'

const PostPage = ({setActivePage}) => {

  useEffect(() => {
    setActivePage("news")
  }, [])
  
  return (
    <section>
      <PostFeed />
    </section>
  )
}

export default PostPage