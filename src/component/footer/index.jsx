import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Footer() {
  const categoryState = useSelector(state => state.categoryState)


  return (
    <div>
      <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5 d-flex justify-content-around">
            <div id='contact' className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-3">
                <Link className="btn btn-square btn-light rounded-circle me-2" to=""><i
                  className="fab fa-twitter"></i></Link>
                <Link className="btn btn-square btn-light rounded-circle me-2" to=""><i
                  className="fab fa-facebook-f"></i></Link>
                <Link className="btn btn-square btn-light rounded-circle me-2" to=""><i
                  className="fab fa-youtube"></i></Link>
                <Link className="btn btn-square btn-light rounded-circle me-2" to=""><i
                  className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                  placeholder="Your email" />
                <button type="button"
                  className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="fw-medium text-light" to="#">Service Finder</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By ABK
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </div>
  )
}

export default Footer