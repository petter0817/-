import React, { useEffect, useState } from 'react'
import { createIsLogging } from '../../redux/actions/logging'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function Water() {
  // const [city, setcity] = useState(<Taipei />)
  let city=["taipei","taichung","kaohsiung"]
  const dispatch = useDispatch()
  let navigate = useNavigate()
  //抓取redux資料賦予到name上
  let a=0;
  const { name } = useSelector(state => state.login)
  const { isLogging } = useSelector(state => state.login)
  useEffect(() => {
    const timer = setInterval(() => {
      a++;
      if(a>=3){
        a=0;
      } 
     navigate(city[a])
    },5000)
    return ()=>{
       clearInterval(timer)
    }
  }, [])
  useEffect(()=>{
    if(isLogging===false){
      navigate('/login')
    }
  },[])
  const clickTOLogin = () => {
    if (window.confirm('是否要離開')) {
      // window.location = '/login'
      navigate('/login')
      dispatch(createIsLogging({ isLogging: false }))
    }

  }
  return (
    <div>
      <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <NavLink className="navbar-brand pt-0" to='/water/taipei'>
            <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
          </NavLink>
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* <!-- Navigation --> */}
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link  active " to='./taipei' >
                  <i className="ni ni-bullet-list-67 text-red"></i> 台北
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  active " to='./kaohsiung' >
                  <i className="ni ni-bullet-list-67 text-red"></i> 高雄
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  active " to='./taichung' >
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
                <div className="nav-link pr-0" onClick={clickTOLogin} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <i className="ni ni-circle-08"></i>
                    <div className="media-body ml-2 d-none d-lg-block">
                      {/* 渲染redux第０筆資料，因為login告訴redux誰登入了，所以redux這邊會新增一筆只有email的資料在第０筆 */}
                      <span className="mb-0 text-sm font-weight-bold">{name}</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="ni ni-user-run"></i>
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
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
            <div>
              <div className="row">
                <div className="col">
                  <div className="card shadow">
                    <div className="card-header border-0">
                      <h3 className="mb-0">天氣預報</h3>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th >地區</th>
                            <th >日期</th>
                            <th scope="col">天氣描述</th>
                            <th scope="col">風速</th>
                            <th scope="col">氣溫</th>
                            <th scope="col">濕度</th>
                          </tr>
                          <Outlet />
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer">
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
              </footer>
            </div>
            {/* <!-- Dark table -->
           <!-- Footer --> */}

          </div>

        </div>
      </div>
    </div>
  )
}
