import React, { useEffect, useState } from 'react'
import "./style.scss"
import img1 from "../../assets/images/APIimages/img1.jpg"
import axios from "axios";

function FlowersPricing() {
    const URL = axios.create({
        baseURL: "http://localhost:3050"
    });

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        URL.get('/flowers').then((response) => {
            setPosts(response.data);
        });
    }, []);


    
    return (
        <section className='flowers_pricing'>
            <div className="container">
                <div className="flowers_wrapper">
                    <span>Devoted to wonderful beauty
                    </span>
                    <h5>Flowers Pricing
                    </h5>
                    <ul className='flowers'>
                        {posts?.map((post) => {
                            return (
                                <li className='flower' key={post.id}>
                                    <img style={{ width: "80%" }} src={post.image} alt="img1" />
                                    <h3>{post.name}</h3>
                                    <span>${post.price}</span>
                                    <button>Delete</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default FlowersPricing