import React, { useEffect, useState } from "react";
import "../../styles/CryptoStyles/Buy.scss";

const Buy = ({ btc }) => {
	const [buyArr, setBuyArr] = useState([]);
	useEffect(() => {
		const wait = Object.values(btc);
		setBuyArr(wait);
	}, [btc]);

	const showBuy = buyArr.map((item, i) => {
		return <h4 key={i}>{item.buy}</h4>;
	});

	return (
		<div className="Buy">
			<h1>Buy</h1>
			<span className="BuySpan">{showBuy}</span>
		</div>
	);
};

export default Buy;
