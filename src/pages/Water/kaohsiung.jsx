import React, { useState, useEffect } from 'react'
import All from './all'

export default function Kaohsiung() {
  const [weatherElement, setWeatherElement] = useState({
    observactionTime: '',
    locationName: '',
    temperature: 0,
    windSpeen: 0,
    humid: 0,
    description: '',
  })
  useEffect(() => {
    fetchweatherForecastKaohsiung()
    fetchweatherElementKaohsiung()
  }, [])
  const fetchweatherElementKaohsiung = () => {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-E8944CB0-6F57-4652-89C7-8C79CAAECF9C&locationName=高雄'
    )
      .then(response => response.json())
      .then(data => {
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
        //更新狀態
        setWeatherElement(prevState => ({
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
    <All weatherElement={weatherElement}/>
  )
}
