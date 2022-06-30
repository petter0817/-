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
          {/* <!-- Brand --> */}
          <NavLink className="navbar-brand pt-0" to={'/water'}>
            <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
          </NavLink>
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">

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
