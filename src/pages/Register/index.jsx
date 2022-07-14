import React, { useRef} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

export default function Register() {
  let navigate = useNavigate()
  const personName = useRef()
  const personEmail = useRef()
  const personPassword = useRef()
  const personCheckpassword = useRef()
  const dispatch = useDispatch()
  const accountNumber = () => {
    const name = personName.current.value
    const email = personEmail.current.value
    const password = personPassword.current.value
    const checkpassword = personCheckpassword.current.value

    if (password === checkpassword && password !== "" && name !== "" && email !== "" && checkpassword !== "") {
        dispatch(createAddPersonAction({ id: Date.now(), name, email, password}))
        alert('註冊成功')
        navigate('/login')
    } else {
      alert('註冊失敗')
    }
  }
  return (
    <div>
      <div className="main-content">
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
          <div className="container px-4">
            <NavLink className="navbar-brand" to='/login'>
              <img src="../assets/img/brand/white.png" alt='' />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse-main">
              {/* <!-- Collapse header --> */}
              <div className="navbar-collapse-header d-md-none">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="../index.html">
                      <img src="../assets/img/brand/blue.png" alt='' />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Navbar items --> */}
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <NavLink className="nav-link nav-link-icon" to={'/register'}>
                    <i className="ni ni-circle-08"></i>
                    <span className="nav-link-inner--text">Register</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-icon" to={'/login'}>
                    <i className="ni ni-key-25"></i>
                    <span className="nav-link-inner--text">Login</span>
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Header --> */}
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className="container mt--8 pb-5" style={{ background: ' #172b4d' }}>
          {/* <!-- Table --> */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card bg-secondary shadow border-0">

                <div className="card-body px-lg-5 py-lg-5">

                  <form>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                        </div>
                        <input className="form-control" placeholder="Name" type="text" ref={personName} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        </div>
                        <input className="form-control" placeholder="Email" type="email" ref={personEmail} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input className="form-control" ref={personPassword} placeholder="Password" type="password" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input className="form-control" ref={personCheckpassword} placeholder="Check Password" type="password" />
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="button" onClick={accountNumber} className="btn btn-primary mt-4">Create account</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <footer className="py-5" style={{ background: ' #172b4d' }}>
          <div className="container">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6">
                <div className="copyright text-center text-xl-left text-muted">
                  &copy; 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" rel="noreferrer" target="_blank">Creative Tim</a>
                </div>
              </div>
              <div className="col-xl-6">
                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com" className="nav-link" rel="noreferrer" target="_blank">Creative Tim</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com/presentation" className="nav-link" rel="noreferrer" target="_blank">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="http://blog.creative-tim.com" className="nav-link" rel="noreferrer" target="_blank">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" rel="noreferrer" target="_blank">MIT License</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
