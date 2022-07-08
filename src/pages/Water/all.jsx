import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'

export default function All(props) {
  return (
    <tr>
        <th scope="row">
          <div className="media align-items-center">
            <span className="mb-0 text-sm"> {props.weatherElement.locationName}</span>
          </div>
        </th>
        <td>
            <span className="badge-dot">
            <i className="bg-warning"></i>{props.weatherElement.observactionTime}
            </span>
          
        </td>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i> {props.weatherElement.description}
          </span>
        </td>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i> {props.weatherElement.windSpeen}
          </span>
        </td>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i> {props.weatherElement.temperature}°C
          </span>
        </td>
        <td >
          <span className="badge-dot">
            <i className="bg-warning"></i>{props.weatherElement.humid}
          </span>
        </td>
    </tr>
     
  )
}
