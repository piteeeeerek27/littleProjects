import React, { useEffect, useState } from "react";
import "../../styles/CryptoStyles/Last.scss";

const Last = ({ btc }) => {
	const [lastArr, setLastArr] = useState([]);

	useEffect(() => {
		const wait = Object.values(btc);
		setLastArr(wait);
	}, [btc]);

	const showLast = lastArr.map((item, i) => {
		return <h4 key={i}>{item.last}</h4>;
	});
	return (
		<div className="Last">
			<h1>Last</h1>
			<span className="LastSpan">{showLast}</span>
		</div>
	);
};

export default Last;
