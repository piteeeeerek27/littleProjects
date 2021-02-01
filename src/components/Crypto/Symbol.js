import React, { useEffect, useState } from "react";
import "../../styles/CryptoStyles/Symbol.scss";
function Symbol({ btc }) {
	const [symbolArr, setSymbolArr] = useState([]);

	useEffect(() => {
		const wait = Object.values(btc);
		setSymbolArr(wait);
	}, [btc]);

	const showSell = symbolArr.map((item, i) => {
		return <h4 key={i}>{item.symbol}</h4>;
	});
	return (
		<div className="Symbol">
			<h1>Symbol</h1>
			<span className="SymbolSpan">{showSell}</span>
		</div>
	);
}

export default Symbol;
