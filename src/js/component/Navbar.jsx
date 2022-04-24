import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="nav-title">
				<a className="navbar-brand text-white" href="#">
					React Landing Page
				</a>
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="menu-options">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-white"
								href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
