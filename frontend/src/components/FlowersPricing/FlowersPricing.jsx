import React from 'react'
import "./style.scss"
import img1 from "../../assets/images/APIimages/img1.jpg"

function FlowersPricing() {
    return (
        <section className='flowers_pricing'>
            <div className="container">
                <div className="flowers_wrapper">
                    <span>Devoted to wonderful beauty
                    </span>
                    <h5>Flowers Pricing
                    </h5>
                    <ul className='flowers'>
                        <li className='flower'>
                            <img style={{width:"80%"}} src={img1} alt="img1" />
                            <h3>Dahlia</h3>
                            <span>$45</span>
                            <button>Delete</button>
                        </li>
                        <li className='flower'>
                            <img style={{width:"80%"}} src={img1} alt="img1" />
                            <h3>Dahlia</h3>
                            <span>$45</span>
                            <button>Delete</button>
                        </li> <li className='flower'>
                            <img style={{width:"80%"}} src={img1} alt="img1" />
                            <h3>Dahlia</h3>
                            <span>$45</span>
                            <button>Delete</button>
                        </li> <li className='flower'>
                            <img style={{width:"80%"}} src={img1} alt="img1" />
                            <h3>Dahlia</h3>
                            <span>$45</span>
                            <button>Delete</button>
                        </li> <li className='flower'>
                            <img style={{width:"80%"}} src={img1} alt="img1" />
                            <h3>Dahlia</h3>
                            <span>$45</span>
                            <button>Delete</button>
                        </li> <li className='flower'>
                            <img style={{width:"80%"}} src={img1} alt="img1" />
                            <h3>Dahlia</h3>
                            <span>$45</span>
                            <button>Delete</button>
                        </li>   
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FlowersPricing