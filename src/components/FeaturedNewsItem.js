import React from 'react'

const FeaturedNewsItem = ({ item }) => {
  return (
    <article>
      <img src={item.image} alt={item.description} className="featured-news-item"/>
    </article>
  )
}

export default FeaturedNewsItem