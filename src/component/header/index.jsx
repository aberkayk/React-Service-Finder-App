import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

function Header() {
  const { authState } = useSelector(state => state)


  return (
    <div>
      {/* Topbar Starts */}
      <div className="container-fluid bg-primary text-white d-none d-lg-flex">
        <div className="container py-3">
          <div className="d-flex align-items-center">
            <Link to="/">
              <h2 className="text-white fw-bold m-0">Service Finder</h2>
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <small className="ms-4"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
              <small className="ms-4"><i className="fa fa-envelope me-3"></i>info@example.com</small>
              <small className="ms-4"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</small>
              <div className="ms-3 d-flex">
                <Link className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"><i
                  className="fab fa-facebook-f"></i></Link>
                <Link className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"><i
                  className="fab fa-twitter"></i></Link>
                <Link className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"><i
                  className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Starts */}
      <div className="container-fluid bg-white sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0 d-flex justify-content-between">
            <div className='d-flex'>
              <Link to="/" className="navbar-brand d-lg-none">
                <h1 className="fw-bold m-0">Service Finder</h1>
              </Link>
              <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                  <Link to="/" className="nav-item nav-link">Home</Link>
                  <Link to="categories" className="nav-item nav-link">Categories</Link>
                  <Link to="/blogs" className="nav-item nav-link">Blogs</Link>
                  <HashLink to="/#contact" className="nav-item nav-link">Contact</HashLink>
                </div>
              </div>
            </div>
            <div className='d-flex'>
              {authState.userData === null ? (
                <>
                  <div className=" d-none d-lg-block">
                    <Link to="/login" className="btn btn-primary rounded-pill py-2 px-3 mx-3">Login</Link>
                  </div>
                  <div className="d-none d-lg-block">
                    <Link to="/register" className="btn btn-primary rounded-pill py-2 px-3 ">Register</Link>
                  </div>
                </>
              ) : (
                <span className='d-lg-block badge bg-primary d-flex rounded-pill py-2 px-3 justiy-content-center align-items-center fs-6'>
                  {authState.userData?.fullname}
                </span>
              )}


            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  )
}

export default Header