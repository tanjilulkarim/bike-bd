import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DisplayReview from '../Review/DisplayReview';
// import Team from '../Team/Team';
import DisplayProducts from './DisplayProducts';

const Home = () => {
    return (
        <div className="my-section">
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <DisplayReview></DisplayReview>
            {/* <Team></Team> */}
            <About></About>
        </div>
    );
};

export default Home;