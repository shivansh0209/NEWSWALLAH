
import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js'
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem.js'
import {
  BrowserRouter as Router,
} from "react-router-dom";import {Routes,Route} from "react-router-dom";


export class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Router>
          <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} pageSize={5} category={'general'}/>}/>
          <Route path='/general' element={<News setProgress={this.setProgress} pageSize={5} category={'general'}/>}/>
          <Route path='/business' element={<News setProgress={this.setProgress} pageSize={5} category={'business'}/>}/>
          <Route path='/sports' element={<News setProgress={this.setProgress} pageSize={5} category={'sports'}/>}/>
          <Route path='/entertainment' element={<News setProgress={this.setProgress} pageSize={5} category={'entertainment'}/>}/>
          <Route path='/science' element={<News setProgress={this.setProgress} pageSize={5} category={'science'}/>}/>
          <Route path='/health' element={<News setProgress={this.setProgress} pageSize={5} category={'health'}/>}/>
          <Route path='/technology' element={<News setProgress={this.setProgress} pageSize={5} category={'technology'}/>}/>

          </Routes>
        </Router>
        

      </div>
    )
  }
}export default App;