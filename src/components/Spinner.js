import React, { Component } from 'react'
import Loading from './Spinner.gif'



export class Spinner extends Component {
  render() {
    return (
      <div className='container text-center' >
        <img src={Loading} className="img-fluid" alt="..." />
      </div>
    )
  }
}

export default Spinner
