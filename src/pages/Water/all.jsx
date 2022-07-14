import React from 'react'

export default function All(props) {
  const locationData = props.num
  if (locationData === undefined) {
    return (
      <tr>
        <th scope="row">
          <div className="media align-items-center">
            <span className="mb-0 text-sm"></span>
          </div>
        </th>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i>
          </span>

        </td>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i>
          </span>
        </td>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i>%
          </span>
        </td>
        <td>
          <span className="badge-dot">
            <i className="bg-warning"></i>°C
          </span>
        </td>
        <td >
          <span className="badge-dot">
            <i className="bg-warning"></i>°C
          </span>
        </td>
      </tr>
    )
  }
  const cityName = locationData.locationName
  const Wx = locationData.weatherElement[0].time[0].parameter.parameterName
  const CI = locationData.weatherElement[3].time[0].parameter.parameterName
  const PoP = locationData.weatherElement[1].time[0].parameter.parameterName
  const MaxT = locationData.weatherElement[4].time[0].parameter.parameterName
  const MinT = locationData.weatherElement[2].time[0].parameter.parameterName
  return (
    <tr>
      <th scope="row">
        <div className="media align-items-center">
          <span className="mb-0 text-sm"></span>{cityName}
        </div>
      </th>
      <td>
        <span className="badge-dot">
          <i className="bg-warning"></i>{Wx}
        </span>

      </td>
      <td>
        <span className="badge-dot">
          <i className="bg-warning"></i>{CI}
        </span>
      </td>
      <td>
        <span className="badge-dot">
          <i className="bg-warning"></i>{PoP}%
        </span>
      </td>
      <td>
        <span className="badge-dot">
          <i className="bg-warning"></i>{MaxT}°C
        </span>
      </td>
      <td >
        <span className="badge-dot">
          <i className="bg-warning"></i>{MinT}°C
        </span>
      </td>
    </tr>

  )
}