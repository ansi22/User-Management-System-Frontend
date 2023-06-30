import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">User Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>

  <button className="btn btn-outline-light">Add User</button>
</nav>
    </>
  )
}

export default Navbar