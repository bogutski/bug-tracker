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
		  <img className="d-block w-100" src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuYmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="..."/>
			<div className="carousel-caption d-none d-md-block fixed-top">
			  <h2>Check progress of your project</h2>
			  <br/>
			  <a className="btn btn-outline-light btn-lg" href="/signup">Sign Up</a>
			</div>
		</div>

		<div className="carousel-item">
		  <img className="d-block w-100" src="https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2FuYmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="..."/>
		  <div className="carousel-caption d-none d-md-block fixed-top">
			<h2>Use Kanban board</h2>
			<br/>
			<a className="btn btn-outline-light btn-lg" href="/signup">Sign Up</a>
		  </div>
		</div>

		<div className="carousel-item">
		  <img className="d-block w-100" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="..."/>
		  <div className="carousel-caption d-none d-md-block fixed-top">
			<h2>Just do one step</h2>
			<br/>
			<a className="btn btn-outline-light btn-lg" href="/signup">Sign Up</a>
		  </div>
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
