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
                        <li className='card'>
                            <h6>
                                <span>$31</span>per table
                            </h6>
                            <h3> Wedding  Events

                            </h3>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per
                            </p>
                            <button>shop now</button>
                        </li>
                        <li className='card'>
                            <h6>
                                <span>$52</span>per table
                            </h6>
                            <h3> Party  Events
                            </h3>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per
                            </p>
                            <button>shop now</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurTeam