import { useEffect } from "react"
import PostFeed from '../components/news/PostFeed'

const NewsPage = ({setActivePage}) => {

  useEffect(() => {
    setActivePage("news")
  }, [])
  
  return (
    <section className="page-min-height section-bg-white">
      <PostFeed />
    </section>
  )
}

export default NewsPage