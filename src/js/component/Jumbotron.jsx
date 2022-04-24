import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron container">
			<section className="py-5 text-center bg-light">
				<div className="row py-lg-5">
					<div className="col-lg-6 col-md-8 mx-auto">
						<h1 className="fw-light">
							My first project with React!
						</h1>
						<p className="lead text-muted">
							I can modify this later to add some more
							functionality - but for now it's a simple landing
							page using React components, styled with Bootstrap.
						</p>
						<p>
							<a href="#" className="btn btn-success my-2">
								Main call to action
							</a>{" "}
							<a href="#" className="btn btn-danger my-2">
								Secondary action
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

// Jumbotron.propTypes = {
// 	title: PropType.string,
// };

export default Jumbotron;
