import React from 'react'
import '../css/article.css'

const Article = props => {
  const date_format = () => {
    let publishedDate = new Date(props.article.publishedAt);
    let monthNames = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

    let day = publishedDate.getDate();
    let month = publishedDate.getMonth();
    let year = publishedDate.getFullYear();
    let hour = (publishedDate.getHours() % 12);
    let minutes = publishedDate.getMinutes();
    let am_pm = publishedDate.getHours() > 12 ? "pm" : "am"

    return <p>Published: {monthNames[month]} {day}, {year} at {hour}:{minutes} {am_pm} </p>
  }

  const photo_display = () => {
    if (props.article.urlToImage !== null) {
      return <img src={props.article.urlToImage} height="100" />
    }
  }



  return (
    <div className="article">
      {photo_display()}
      <h4><a href={props.article.url}>{props.article.title}</a></h4>
      <p>{props.article.source.name}</p>
      {date_format()}
      <p>{props.article.description}<a href={props.article.url} target="_blank">Read More</a></p>

      <hr />
    </div>
  )
}

export default Article
