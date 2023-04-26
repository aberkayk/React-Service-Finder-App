import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useApi from '../../../hooks/useApi'
import { login } from '../../../redux/authSlice'


function LoginPage() {
  const api = useApi()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    api
      .post("https://api.adoptez1artisan.com/auth/login", formJson)
      .then((response) => {
        console.log(">> Login Response", response);
        dispatch(
          login({
            token: response.data.data.token,
            userData: response.data.data.userData,
          })
        );
        navigate("/")
        // TODO Burada dispatch yap
      });
  }

  return (
    <div className='container pt-5 d-flex justify-content-center my-3'>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <input autoComplete="off" type="email" defaultValue=""
            style={{ display: 'none' }} />
          <input autoComplete="new-password" type="password" defaultValue=""
            style={{ display: 'none' }} />
          <div className="row g-3">
            <div className="col-sm-12">
              <div className="form-floating">
                <input type="email" className="form-control" name="email" placeholder="Your Email" />
                <label htmlFor="mail">Your Email</label>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-floating">
                <input type="password" className="form-control" name="password" placeholder="Your Password" />
                <label htmlFor="password">Your Password</label>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-primary w-100 py-3 mb-5" type="submit">Login Now</button>
            </div>
          </div>
        </form>
      </div>
    </div >
  )
}

export default LoginPage