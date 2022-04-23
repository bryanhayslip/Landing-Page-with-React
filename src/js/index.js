//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Cards from "./component/Cards.jsx";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron />
				<Cards />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
