import React from 'react';
const Banner = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src="https://learnenglishkids.britishcouncil.org/sites/kids/files/image/RS5407_Toy%20Shop%20col-low.jpg" height="500px" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://st2.depositphotos.com/7341970/10438/v/950/depositphotos_104389774-stock-illustration-toy-shop-display.jpg" className="d-block w-100" height="500px"  alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://media.istockphoto.com/vectors/shop-of-vintage-toys-vector-vector-id500799246?k=20&m=500799246&s=612x612&w=0&h=HPw_cja6oFzyh2GJCIzlwAgj8sUuUUBi0m9zbeu6TR0=" className="d-block w-100" height="500px"  alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;