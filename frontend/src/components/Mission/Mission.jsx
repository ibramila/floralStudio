import React from 'react'
import "./style.scss"
import image4 from "../../assets/images/image4.jpg"
function Mission() {
  return (
    <section className='our_mission'>
      <div className="container">
        <div className="mission">
          <div className='mission_info'>
            <div className='wrapper'>
              <h5>Our Mission
              </h5>
              <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.
              </p>
              <button>read more</button>
            </div>
          </div>
          <div>
            <img src={image4} alt="image4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission