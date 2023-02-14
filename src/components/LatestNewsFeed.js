import { Row, Col } from 'react-bootstrap'
import FeaturedNewsOne from '../assets/img/featuredNewsOne.png'
import FeaturedNewsItem from './FeaturedNewsItem'

const LatestNewsFeed = () => {
  const featuredNews = [
    {
      id: 1,
      image: FeaturedNewsOne,
      description: "some description",
    },
    {
      id: 2,
      image: FeaturedNewsOne,
      description: "some description",
    },
    {
      id: 3,
      image: FeaturedNewsOne,
      description: "some description",
    },
  ]

  return (
    <section className='section-padding section-bg-white'>
      <div className="section-title ">
        FEATURED NEWS
      </div>
      <Row className="d-flex g-0 featured-news-container">
        {featuredNews.map((item, index) => (
          <Col xs={3} key={index}>
            <FeaturedNewsItem item={item} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default LatestNewsFeed
