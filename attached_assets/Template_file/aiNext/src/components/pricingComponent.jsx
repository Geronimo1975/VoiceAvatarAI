import React from 'react'
import PricingCard from './common/pricingCard'

const pricingData = [
    {
        id:1,
        title:"Student",
        price:"$20",
        link:"/contact",
        features:[
            {
                id:1,
                feature:"One account"
            },
            {
                id:2,
                feature:"Unlimited Projects"
            },
            {
                id:3,
                feature:"Download prototypes"
            }
        ]
    },
    {
        id:2,
        title:"Personal",
        price:"$39",
        link:"/contact",
        features:[
            {
                id:1,
                feature:"One account"
            },
            {
                id:2,
                feature:"Unlimited Projects"
            },
            {
                id:3,
                feature:"Download prototypes"
            }
        ]
    },
    {
        id:3,
        title:"Family",
        price:"$60",
        link:"/contact",
        features:[
            {
                id:1,
                feature:"One account"
            },
            {
                id:2,
                feature:"Unlimited Projects"
            },
            {
                id:3,
                feature:"Download prototypes"
            }
        ]
    },
]
const PricingComponent = ({prentClass}) => {
    return (
        <div className={`pricing-area pt-100 section-bg ${prentClass}`}>
            <div className="section-title-center">
                <div className="width">
                    <div className="sub-t">Best Pricing Plans</div>
                    <h2>Our Pricing Plans</h2>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        pricingData.map(({id, features, link, price, title})=> <PricingCard key={id} id={id} features={features} link={link} price={price} title={title} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingComponent