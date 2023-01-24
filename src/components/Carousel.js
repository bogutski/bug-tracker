import React from 'react';

const Carousel = () => {
  return (
	<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
	  <ol className="carousel-indicators">
		<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	  </ol>
	  <div className="carousel-inner">
		<div className="carousel-item active">
		  <img className="d-block w-100" src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuYmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="First slide"/>
		</div>
		<div className="carousel-item">
		  <img className="d-block w-100" src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FuYmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Second slide"/>
		</div>
		<div className="carousel-item">
		  <img className="d-block w-100" src="https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2FuYmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Third slide"/>
		</div>
	  </div>
	  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		<span className="sr-only">Previous</span>
	  </a>
	  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		<span className="carousel-control-next-icon" aria-hidden="true"></span>
		<span className="sr-only">Next</span>
	  </a>
	</div>
  );
};

export default Carousel;
