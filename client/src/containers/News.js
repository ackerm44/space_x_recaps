import React, { Component } from 'react';
import { connect } from 'react-redux'
import Article from '../components/Article'
import { newsFetchData } from '../actions/news'

class News extends Component {

  componentDidMount() {
    const newsKey = process.env.REACT_APP_NEWS_API_KEY
    const newsUrl = "https://newsapi.org/v2/everything?q=spacex%20AND%20mars%20NOT%20(trump%20OR%20apple%20OR%20tesla)&language=en&sortBy=publishedAt&apiKey=" + newsKey
    this.props.fetchData(newsUrl)
  }

  render() {
    return (
      <div className = "news">
        <h1 className="title">News</h1>
        <div>
          {this.props.news.map(article => <Article article={article}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
    hasErrored: state.newsHasErrored,
    isLoading: state.newsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(newsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
