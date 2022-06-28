import React, { useState,useEffect } from 'react'

export default function Kaohsiung() {
  const [weatherElement, setWeatherElement] = useState({
    observactionTime: '',
    locationName: '',
    temperature: 0,
    windSpeen: 0,
    humid: 0,
    description: '',
  })
  useEffect(()=>{
    fetchweatherForecastKaohsiung()
    fetchweatherElementKaohsiung()
  },[])
   const fetchweatherElementKaohsiung = () => {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-E8944CB0-6F57-4652-89C7-8C79CAAECF9C&locationName=高雄'
    )
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        // 定義 `locationData` 把回傳的資料中會用到的部分取出來
        const locationData = data.records.location[0]
        // 將風速（WDSD）、氣溫（TEMP）和濕度（HUMD）的資料取出
        const weatherElement = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {}
        )
        setWeatherElement(prevState=>({
          ...prevState,
          observactionTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          temperature: weatherElement.TEMP,
          windSpeen: weatherElement.WDSD,
          humid: weatherElement.HUMD
        }))
      })
  }
  const fetchweatherForecastKaohsiung = () => {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E8944CB0-6F57-4652-89C7-8C79CAAECF9C&locationName=高雄市'
    )
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        // 定義 `locationData` 把回傳的資料中會用到的部分取出來
        const locationData = data.records.location[0]
        // 將天氣狀態(Wx)的資料取出
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (['Wx'].includes(item.elementName)) {
              neededElements[item.elementName] = item.time[0].parameter;
            }
            return neededElements;
          },
          {}
        )
        setWeatherElement(prevState => ({
          ...prevState,
          description: weatherElements.Wx.parameterName,

        }))
      })
  }
 
  return (
    <div>
       
        <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header border-0">
              <h3 className="mb-0">{weatherElement.locationName}天氣預報</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">地區</th>
                    <th scope="col">日期</th>
                    <th scope="col">天氣描述</th>
                    <th scope="col">風速</th>
                    <th scope="col">氣溫</th>
                    <th scope="col">濕度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">

                        <div className="media-body">
                          <span className="mb-0 text-sm"> {weatherElement.locationName}</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      {weatherElement.observactionTime}
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> {weatherElement.description}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> {weatherElement.windSpeen}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> {weatherElement.temperature}°C
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> {weatherElement.humid}
                      </span>
                    </td>
                  </tr>
                </tbody>
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

  )
}
