import React, { useEffect, useState } from 'react'
import { createIsLogging } from '../../redux/actions/logging'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import City from './City'
import All from './All'
import Headercity from './Headercity'

export default function Water() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  //抓取redux資料賦予到name上
  const { name, isLogging } = useSelector(state => state.login)
  const [data, setdata] = useState()
  const [num, setnum] = useState()
  useEffect(() => {
    if (isLogging === false) {
      navigate('/login')
    }
    fetchweatherForecast()

  }, [])
  const clickTOLogin = () => {
    if (window.confirm('是否要離開')) {
      navigate('/login')
      dispatch(createIsLogging({ isLogging: false }))
    }
  }
  const fetchweatherForecast = () => {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E8944CB0-6F57-4652-89C7-8C79CAAECF9C'
    )
      .then(response => response.json())
      .then(data => {
        // 定義把回傳的資料中會用到的部分取出來
        const locationData = data.records.location.map((obj) => obj)
        setnum(locationData[0])
        setdata(locationData)
      })
  }
  return (
    <div>
      <City data={data} num={setnum} />
      <div className="main-content">
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">Tables</a>
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <div className="nav-link pr-0" onClick={clickTOLogin} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <i className="ni ni-circle-08"></i>
                    <div className="media-body ml-2 d-none d-lg-block">
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
        <Headercity num={num} />
        <div className="container-fluid mt--7">
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
                          <th scope="col">天氣描述</th>
                          <th scope="col">舒適度</th>
                          <th scope="col">降雨機率</th>
                          <th scope="col">最高溫度</th>
                          <th scope="col">最低溫度</th>
                        </tr>
                        <All num={num} />
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
        </div>
      </div>
    </div>
  )
}


