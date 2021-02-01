import React from "react";
import "../../styles/CryptoStyles/CryptoList.scss";

function CryptoList({ Names }) {
	const Currency = Names.map((item, i) => {
		return <h4 key={i}>{item}</h4>;
	});
	return (
		<div className="CryptoList">
			<h1>Currency</h1>
			<span className="CryptoListSpan">{Currency}</span>
		</div>
	);
}

export default CryptoList;
