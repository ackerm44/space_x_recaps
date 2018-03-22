import React from 'react'
import '../css/article.css'
import DateFormat from './DateFormat'

const Article = props => {

  const photo_display = () => {
    if (props.article.urlToImage !== null) {
      return <img src={props.article.urlToImage} alt="article" height="100" />
    }
  }

  return (
    <div className="article">
      {photo_display()}
      <h4><a href={props.article.url}>{props.article.title}</a></h4>
      <p>{props.article.source.name}</p>
      <h4>Published: <DateFormat date={props.article.publishedAt} /> </h4>
      <p>{props.article.description}<a href={props.article.url} target="_blank">Read More</a></p>
    </div>
  )
}

export default Article
