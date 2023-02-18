const FeaturedPostsItem = ({ featuredPost }) => {
  return (
    <article>
      <img src={featuredPost.image.url} alt={featuredPost.description} className="featured-posts-item"/>
    </article>
  )
}

export default FeaturedPostsItem