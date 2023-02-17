import React from 'react'

const FeaturedNewsItem = ({ featuredPost }) => {
  return (
    <article>
      <img src={featuredPost.image.url} alt={featuredPost.description} className="featured-news-item"/>
    </article>
  )
}

export default FeaturedNewsItem