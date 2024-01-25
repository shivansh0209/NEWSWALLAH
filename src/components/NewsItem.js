import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,date,author,source}=this.props;
      return (
      <div>
          <div className="card" >
          <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex : 1}}>{source}</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" className="btn btn-dark btn-sm" target="_blank">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
// My name is shivansh Pandey github-shivansh0209 and I have made this website

