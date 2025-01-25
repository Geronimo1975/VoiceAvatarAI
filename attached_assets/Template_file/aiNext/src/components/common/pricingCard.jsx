import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = ({ id, title, price, link, features }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className={`${id === 2 ? 'active' : ''} card`}>
                <h2 className="card_title"><i className="ri-vip-crown-line"></i>{title}</h2>
                <h3 className="pricing">{price}<span className="small">/per month</span></h3>
                <hr />
                <ul className="features">
                    {
                        features.map(({ feature, id }) => <li key={id}>{feature}</li>)
                    }
                </ul>
                <Link href={link} className="cta_btn">Buy Now</Link>
            </div>
        </div>
    )
}

export default PricingCard