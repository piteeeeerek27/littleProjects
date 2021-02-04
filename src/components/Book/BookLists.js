import React, { useContext } from "react";
import { BooksContext } from "./BookContext";
import "../../styles/BookStyles/BookLists.scss";

const BookLists = ({ book }) => {
	const { dispatch } = useContext(BooksContext);
	return (
		<div className="BookLists">
			<h2>
				<span style={{ color: "red" }}>Title: </span>
				{book.title}
			</h2>
			<h2>
				<span style={{ color: "red" }}>Author: </span>
				{book.author}
			</h2>
			<button
				className="BottomBtn"
				onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
				Remove
			</button>
		</div>
	);
};

export default BookLists;
{
	/* <h2>Image: </h2>
					<div className="OutputImage">
						<img
							src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
							alt=""
						/>
					</div> */
}
// className="BookLists"
