import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DisplayReview from '../Review/DisplayReview';
import DisplayProducts from './DisplayProducts';

const Home = () => {
    return (
        <div className="my-section">
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <DisplayReview></DisplayReview>
            <About></About>
        </div>
    );
};

export default Home;