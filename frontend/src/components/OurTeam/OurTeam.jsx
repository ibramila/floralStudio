import React from 'react'
import "./style.scss"
import image5 from "../../assets/images/image5.jpg"
import image6 from "../../assets/images/image6.jpg"
import image7 from "../../assets/images/image7.jpg"

function OurTeam() {
    return (
        <section className='our_team'>
            <div className="container">
                <div className="team_intro">
                    <span>Contacts
                    </span>
                    <h2>Our Team
                    </h2>
                    <ul className='team'>
                        <li className='member'>
                            <img src={image5} alt="portret1" />
                            <h3> Velva Kopf
                            </h3>
                            <span>Biologist</span>
                        </li>
                        <li className='member'>
                            <img src={image6} alt="portret1" />
                            <h3> Sarah Palmer
                            </h3>
                            <span>Florist</span>
                        </li>
                        <li className='member'>
                            <img src={image7} alt="portret1" />
                            <h3> Jessica Swift
                            </h3>
                            <span>Photographer</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurTeam