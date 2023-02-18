import { useContext } from "react"
import FeaturedPostContext from "../../context/FeaturedPostContext"
import FeaturedPostItem from "./FeaturedPostItem"
import LoadingSpinner from "../common/LoadingSpinner"
import SectionTitle from "../common/SectionTitle"
import { Row, Col } from "react-bootstrap"

const FeaturedPostFeed = () => {
  const { featuredPosts, isLoading } = useContext(FeaturedPostContext)

  if (isLoading) {
    return (
      <section className="section-padding section-bg-white">
        <SectionTitle title={"FEATURED NEWS"} />
        <LoadingSpinner />
      </section>
    )
  }

  return (
    <section className="section-padding section-bg-white">
      <SectionTitle title={"FEATURED NEWS"} />
      <Row className="g-0 featured-posts-container">
        {featuredPosts.map((featuredPost) => (
          <Col xs={8} md={3} key={featuredPost._id}>
            <FeaturedPostItem featuredPost={featuredPost} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default FeaturedPostFeed
