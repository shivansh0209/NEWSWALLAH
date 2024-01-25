import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsWallah</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* My name is shivansh Pandey github-shivansh0209 and I have made this website */}
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  </div>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">General</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/business">Business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/entertainment">Entertainment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/sports">Sports</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/technology">Technology</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/health">Health</a>
                    </li>
                </ul>
                </div>
            </div>
          </nav>
      </div>
    )
  }
}

export default Navbar
