import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Logo
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Roadmap
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Find Mentor
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}
