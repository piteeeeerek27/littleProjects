import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Crypto from "./components/Crypto/Crypto";
import Game from "./components/Game/Game";
import LocalStorage from "./components/Book/LocalStorage";
import BookProvider from "./components/Book/BookContext";

const App = () => {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul className="AppUl">
						<li className="AppCrypto">
							<Link className="AppCryptoBox" to="/crypto">
								CRYPTO
							</Link>
						</li>
						<li className="AppGame">
							<Link className="AppGameBox" to="/game">
								GAME
							</Link>
						</li>
						<li className="AppBook">
							<Link className="AppBookBox" to="/book">
								BOOK
							</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/crypto" component={Crypto} />
					<Route path="/game" component={Game} />
					<BookProvider>
						<Route path="/book" component={LocalStorage} />
					</BookProvider>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
