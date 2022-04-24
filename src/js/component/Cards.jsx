import React from "react";
import Photo1 from "../../img/Photo1.png";
import Photo2 from "../../img/Photo2.png";
import Photo3 from "../../img/Photo3.png";
import Photo4 from "../../img/Photo4.png";

const Cards = () => {
	return (
		<div class="card-group container">
			<div className="card1 col-sm-12 col-md-6 col-lg-3">
				<div className="card-body">
					<img
						src={Photo1}
						className="card-img-top"
						alt="the first photo"
					/>

					<h5 className="card-title">The coast</h5>
					<p className="card-text">I can add some information here</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card2 col-sm-12 col-md-6 col-lg-3">
				<div className="card-body">
					<img
						src={Photo2}
						className="card-img-top"
						alt="the second photo"
					/>
					<h5 className="card-title">El Perro</h5>
					<p className="card-text">More text</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card3 col-sm-12 col-md-6 col-lg-3">
				<div className="card-body">
					<img
						src={Photo3}
						className="card-img-top"
						alt="the third photo"
					/>
					<h5 className="card-title">Another coast</h5>
					<p className="card-text">Another text.</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card4 col-sm-12 col-md-6 col-lg-3">
				<div className="card-body">
					<img
						src={Photo4}
						className="card-img-top"
						alt="the fourth photo"
					/>
					<h5 className="card-title">Des fraises</h5>
					<p className="card-text">
						Il y a longtemps que j'ai mange des fraises
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
export default Cards;
