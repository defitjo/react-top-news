import React, { Component } from 'react';
import keys from './keys';
import './App.css';

const API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys.google.id}`;

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {articles.map(article => (
            <li key={article.publishedAt}>
              <div className="news">
                <img src={article.urlToImage} alt="image" />
                <h2>
                  <a href={article.url} target="_blank">{article.title}</a>
                </h2>
                <p>{article.description}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default NewsItem;
