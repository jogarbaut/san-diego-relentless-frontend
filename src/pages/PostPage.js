import { useEffect } from "react"
import PostFeed from '../components/PostFeed'

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