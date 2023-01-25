import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { Helmet } from 'react-helmet-async';
import Mission from '../components/Mission/Mission';
import EventsPricing from '../components/EventsPricing/EventsPricing';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home!</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>

            <HeroSection />
            <Mission />

            <EventsPricing />

        </div>
    )
}

export default Home