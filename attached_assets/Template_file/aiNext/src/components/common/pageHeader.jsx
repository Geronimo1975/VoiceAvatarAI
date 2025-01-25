import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({pageName}) => {
    return (
        <div className="section-banner">
            <div className="container">
                <div className="section-banner-title">
                    <h1>{pageName}</h1>
                    <nav >
                        <ol className="breadcrumb d-flex align-items-center gap-2">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <span>/</span>
                            <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PageHeader