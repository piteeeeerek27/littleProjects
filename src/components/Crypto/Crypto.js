import axios from "axios";
import React, { useEffect, useState } from "react";
import Buy from "./Buy";
import CryptoList from "./CryptoList";
import "../../styles/CryptoStyles/Crypto.scss";
import Last from "./Last";
import Sell from "./Sell";
import Symbol from "./Symbol";

function Crypto() {
	const [btc, setBtc] = useState([]);
	const [input, setInput] = useState("");
	const [nameInput, setNameInput] = useState("");
	const [cur, setCur] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("https://blockchain.info/pl/ticker");
			const data = await res.data;
			setBtc(data);
		};
		const interval = setInterval(fetchData(), 5000);
		clearInterval(interval);
	}, [btc]);

	const Names = Object.keys(btc);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput("");
	};
	const inputChange = (e) => {
		setInput(e.target.value);
	};

	const showAll = () => {
		const valueFromInput = input.toUpperCase();
		const array = Object.assign([btc]);
		setNameInput(valueFromInput);
		array.map((item) => {
			const ObjectOfAllValues = {
				BUY: item[valueFromInput].buy,
				LAST: item[valueFromInput].last,
				SELL: item[valueFromInput].sell,
				SYMBOL: item[valueFromInput].symbol.toUpperCase(),
			};
			setCur(ObjectOfAllValues);
		});
	};

	return (
		<div className="Crypto">
			<div className="CryptoMain">
				<div className="CryptoNames">
					<CryptoList Names={Names} />
				</div>
				<div className="CryptoValues">
					<Buy btc={btc} />
					<Last btc={btc} />
					<Sell btc={btc} />
					<Symbol btc={btc} />
				</div>
			</div>
			<div className="CryptoForm">
				<form onSubmit={handleSubmit}>
					<div className="CryptoFilterTop">
						<input value={input} onChange={inputChange} type="text" />
						<button
							onClick={showAll}
							style={{ cursor: "pointer", padding: "4px 1rem" }}>
							Show
						</button>
					</div>
					<div className="stuff">
						<h5>Currency: {nameInput}</h5>
						<h5>BUY: {cur.BUY}</h5>
						<h5>LAST: {cur.LAST}</h5>
						<h5>SELL: {cur.SELL}</h5>
						<h5>SYMBOL: {cur.SYMBOL}</h5>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Crypto;
