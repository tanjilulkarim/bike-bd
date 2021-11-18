import React from 'react';
const Banner = () => {

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img src="https://i.ytimg.com/vi/XyOfdUCfSCw/maxresdefault.jpg" height="500px" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://wallpapercave.com/wp/wp3988174.jpg" className="d-block w-100" height="500px" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://i.ytimg.com/vi/nBnQmmyUhdg/maxresdefault.jpg" className="d-block w-100" height="500px" alt="..." />
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