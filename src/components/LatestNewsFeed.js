import { useContext } from "react"
import FeaturedPostContext from '../context/FeaturedPostContext'

import { Row, Col } from 'react-bootstrap'

import FeaturedNewsItem from './FeaturedNewsItem'



const LatestNewsFeed = () => {
  const { featuredPosts, isLoading } = useContext(FeaturedPostContext)

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <section className='section-padding section-bg-white'>
      <div className="section-title ">
        FEATURED NEWS
      </div>
      <Row className="d-flex g-0 featured-news-container">
        {featuredPosts.map((featuredPost) => (
          <Col xs={8} md={3} key={featuredPost._id}>
            <FeaturedNewsItem featuredPost={featuredPost} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default LatestNewsFeed
