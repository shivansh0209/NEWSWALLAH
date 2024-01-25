import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js'
import InfiniteScroll from 'react-infinite-scroll-component'



export class News extends Component {
  constructor(){
    super(); // Passes the props to the parent class.
    this.state={
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
      progress: 0
    }

  }

async componentDidMount(){
  this.props.setProgress(0);
let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=50ee95e6b91f4a1fb843d374d1accd97&page=1&pageSize=${this.props.pageSize}`;
this.setState({loading: true});
this.props.setProgress(20);
let data = await fetch(url);
this.props.setProgress(40);
let parsedData = await data.json();
this.props.setProgress(80);
this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
this.props.setProgress(100);
}

PrevClick=async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=50ee95e6b91f4a1fb843d374d1accd97&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles: parsedData.articles});
  this.setState({
    page: this.state.page-1,
    loading: false
  })
}

NextClick=async ()=>{
  if(Math.ceil(this.state.totalResults/this.props.pageSize < this.state.page))
  {

  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=50ee95e6b91f4a1fb843d374d1accd97&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles: parsedData.articles});
  this.setState({
    page: this.state.page+1,
    loading: false
    
  })
}
}
// My name is shivansh Pandey github-shivansh0209 and I have made this website

fetchMoreData=async()=>{
  this.setState({
    page: this.state.page+1
  })
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=50ee95e6b91f4a1fb843d374d1accd97&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles: this.state.articles.concat(parsedData.articles)});
  this.setState({
    loading: false,
    totalResults: parsedData.totalResults
  })
}




  render() {
    return (
      <>
        <h1 style={{margin:'35px 0px', marginTop: '90px'}}><center>NewsWallah-Top {this.props.category} headlines</center></h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
        }
        )}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
// My name is shivansh Pandey github-shivansh0209 and I have made this website
