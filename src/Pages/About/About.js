import React from 'react';

import './About.css';

const About = () => {
    return (
        <div className="container">


            <div className="row py-5 my-5">
                <img src={'https://www.freepngimg.com/download/welcome/26832-4-welcome-hd.png'} alt="" />

                {/* <h1 className="text-center  mb-5 about-tittle ">Dream Travels</h1> */}
                <div className="col-12 col-lg-6">
                    <h3 className="text-dark text-center">About Us</h3>
                    <img className="border border-5  " height="457px" width="100%" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6viIhilLrtbC4ODUC8u_hgYgH-MZYlxCqRQ&usqp=CAU'} alt="" />
                    <h5 className="text-dark text-center mt-2">Bike bd   is one the most pupular bike website in Bangladesh</h5>
                    <p className="text-dark ">BikeBD.com is #1 motorcycle oriented website in Bangladesh where Bike enthusiasts from all over the country can find all the information about any bike. From motorcycle price in Bangladesh and Motorcycle Specification to the test ride reviews of various bikes and first impression reviews of any newly launched bikes. Since 2012, BikeBD is providing information to everyone across the nation about various offers from the motorcycle or related companies, news, coverage of motorcycle based or related events, and any update on any rules about motorcycle sector in Bangladesh.</p>
                    <br />
                    <p></p>
                </div>
                <div className="col-12 col-lg-6">
                    <h3 className="text-dark text-center">Our Vision</h3>
                    <img className="border border-5" height="457px" width="100%" src={'https://img4.goodfon.com/wallpaper/nbig/3/72/ducati-bike-motorcycle-man-1100-evo-smoke.jpg'} alt="" />
                    <p className="text-success abt_text text-center mt-2">
                        "Honest is the best business policy. We work with honetly.We ensure good service and offer value Money"
                    </p>
                    <p className="text-primary abt_text text-center mt-2">
                        "Honest is the best business policy. We work with honetly.We ensure good service and offer value Money"
                    </p>
                    <p className="text-secondary abt_text text-center mt-2">
                        "Ensure more less than price in market and ensure castomer satisfaction"

                    </p>


                </div>
            </div>




        </div>
    );
};

export default About;