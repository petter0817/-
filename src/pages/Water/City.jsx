import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function City(props) {
    const locationData = props.data  
    return (
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
            <div className="container-fluid">
                {/* <!-- Brand --> */}
                <NavLink className="navbar-brand pt-0" to='/water'>
                    <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                </NavLink>
                {/* <!-- Collapse --> */}
                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                    {/* <!-- Navigation --> */}
                    <ul className="navbar-nav">
                        {
                            Array.isArray(locationData)
                                ? locationData.map((data, index) => {
                                    return (
                                        <li className="nav-item" key={index} >
                                            <Link className="nav-link active" to='' onClick={() => {props.num(locationData[index])}}>
                                                <i className="ni ni-bullet-list-67 text-red"></i>{data.locationName}
                                            </Link>
                                        </li>
                                    )
                                })
                                : null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
