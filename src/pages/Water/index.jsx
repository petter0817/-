import React from 'react'

import {useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'


export default function Water() {
   const name=useSelector(state=>{
     return state.rens
   })
  const clickTOLogin = () => {
    if (window.confirm('是否要離開')) {
      window.location = '/login'
    }

  }
  return (
    <div>
      <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div className="container-fluid">
          {/* <!-- Toggler --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Brand --> */}
          <NavLink className="navbar-brand pt-0" to={'/water'}>
            <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
          </NavLink>
          {/* <!-- User --> */}
          <ul className="nav align-items-center d-md-none">
            <li className="nav-item dropdown">
              <a className="nav-link nav-link-icon" href="###" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-bell-55"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                <a className="dropdown-item" href="###">Action</a>
                <a className="dropdown-item" href="###">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="###">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="###" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <image alt="Image placeholder" src="../assets/img/theme/team-1-800x800.jpg" />
                  </span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>

                <div className="dropdown-divider"></div>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* <!-- Collapse header --> */}
            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="../index.html">
                    <image src="../assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Form --> */}
            <form className="mt-4 mb-3 d-md-none">
              <div className="input-group input-group-rounded input-group-merge">
                <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="fa fa-search"></span>
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- Navigation --> */}
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link  active " to='taipei'>
                  <i className="ni ni-bullet-list-67 text-red"></i> 台北
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  active " to='kaohsiung'>
                  <i className="ni ni-bullet-list-67 text-red"></i> 高雄
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  active " to='taichung'>
                  <i className="ni ni-bullet-list-67 text-red"></i> 台中
                </NavLink>
              </li>
            </ul>
            {/* <!-- Divider --> */}

          </div>
        </div>
      </nav>
      <div className="main-content">
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">
            {/* <!-- Brand --> */}
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">Tables</a>
            {/* <!-- Form -->

        <!-- User --> */}
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <NavLink className="nav-link pr-0" to="###" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <i className="ni ni-circle-08"></i>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">{name[0]}</span>
                    </div>
                    <div href="#!" onClick={clickTOLogin} className="dropdown-item">
                      <i className="ni ni-user-run"></i>
                      <span>Logout</span>
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- End Navbar -->
    <!-- Header --> */}
        <div>
          <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
            <div className="container-fluid">
              <div className="header-body">
                {/* <!-- Card stats --> */}
                <div className="row">
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              城市名稱</h5>
                            <span className="h2 font-weight-bold mb-0">台北市</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              城市名稱</h5>
                            <span className="h2 font-weight-bold mb-0">高雄市</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              城市名稱</h5>
                            <span className="h2 font-weight-bold mb-0">台中市</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt--7">
            {/* <!-- Table --> */}
            <Outlet />
            {/* <Outlet/> */}
            {/* <!-- Dark table -->
           <!-- Footer --> */}
          </div>
        </div>
      </div>
    </div>
  )
}
