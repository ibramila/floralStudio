import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home!</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>

            <HeroSection />

        </div>
    )
}

export default Home