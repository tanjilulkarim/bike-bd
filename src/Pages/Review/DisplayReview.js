import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';

const DisplayReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://tranquil-cove-79684.herokuapp.com/review")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="container py-5">
            <h4 className="my-color mb-2 text-center">TESTIMONIALS</h4>
        <h2 className=" title mb-3 text-center">
          What Users Say About Us
        </h2>
            <div className="row">
                {
                    reviews.map(review => <div className="col-lg-6">
                    <div style={{height:"300px"}} class="card mb-3 p-3 text-center">
                    <img src={review.img}
                     class="rounded-circle mx-auto" 
                     width="75px"
                     height="75px"
                     alt="..."/>
                    <div class="card-body">
                    <Rating
                    className="text-danger mb-2"
                    initialRating={review.star}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x fs-6"
                    fullSymbol="fa fa-star fa-2x fs-6"
                     />
                        <h5>{review.name}</h5>
                      <p class="card-text">"{review.dec}"</p>
                    </div>
                  </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default DisplayReview;