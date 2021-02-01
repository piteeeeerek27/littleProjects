import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Crypto from "./components/Crypto/Crypto";
import Game from "./components/Game/Game";

const App = () => {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul className="AppUl">
						<li className="AppCrypto">
							<Link className="AppCryptoA" to="/crypto">
								CRYPTO
							</Link>
						</li>
						<li className="AppGame">
							<Link className="AppGameA" to="/game">
								GAME
							</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/crypto" component={Crypto} />
					<Route path="/game" component={Game} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
