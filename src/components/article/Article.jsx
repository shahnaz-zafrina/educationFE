import React from 'react';
import './article.css';

const Article = ({ imgUrl, enrolled, text }) => (
  <div className="education__blog-container_article">
    <div className="education__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="education__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <h4>{enrolled}</h4>
      </div>
      <p>Read More</p>
    </div>
  </div>
);

export default Article;