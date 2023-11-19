import React from 'react'
import Article from '../../components/article/Article'
import { business, finance, computer } from './imports'
import './courses.css'

function Blog() {
  return (
    <div className="education__blog section__padding" id="blog">
    <div className="education__blog-heading">
      <h1>Our Popular Courses</h1>
      <h2>Discover our popular courses, curated just for you</h2>
    </div>
    <div className="education__blog-container">
      <div className="education__blog-container_groupB">
        <Article imgUrl={business} enrolled="15,000 enrolled" text="Business Administration" />
        <Article imgUrl={finance} enrolled="30,000 enrolled" text="Finance" />
        <Article imgUrl={computer} enrolled="20,000 enrolled" text="Computer Science" />
      </div>
    </div>
  </div>
  )
}

export default Blog
