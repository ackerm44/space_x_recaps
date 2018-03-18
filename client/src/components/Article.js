import React from 'react'

const Article = props => {
  return (
    <div>
      <img src={props.article.urlToImage} height="100" />
      <h4>{props.article.title}</h4>
      <p>{props.article.source.name}</p>
      <p>{props.article.publishedAt}</p>
      <p>{props.article.description}</p>
      <a href={props.article.url} target="_blank">Read More</a>
      <hr />
    </div>
  )
}

export default Article
