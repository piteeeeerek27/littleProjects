import React, { useEffect, useState } from "react";
import "../../styles/CryptoStyles/Sell.scss";

const Sell = ({ btc }) => {
	const [sellArr, setSellArr] = useState([]);

	useEffect(() => {
		const wait = Object.values(btc);
		setSellArr(wait);
	}, [btc]);

	const showSell = sellArr.map((item, i) => {
		return <h4 key={i}>{item.sell}</h4>;
	});
	return (
		<div className="Sell">
			<h1>Sell</h1>
			<span className="SellSpan">{showSell}</span>
		</div>
	);
};

export default Sell;
