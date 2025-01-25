import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({img, name, position, socal_link}) => {
    return (
        <div  className="courser-item">
            <div className="image-item">
                <img src={img} alt="image" />
                <div className="hover-content">
                    <h4>{name}</h4>
                    <p>{position}</p>
                    <ul>
                        {
                            socal_link.map(({ id, icon, link }) => {
                                return (
                                    <li key={id}><Link to={link}><i className={icon}></i></Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TeamCard