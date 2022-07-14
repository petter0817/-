import React from 'react'

export default function Headercity(props) {
    const cityName = props.num
    if (cityName === undefined) {
        return (
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
                                                <span className="h2 font-weight-bold mb-0"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
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
                                            <span className="h2 font-weight-bold mb-0">{cityName.locationName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
