import React, { useContext } from "react";
import { BooksContext } from "./BookContext";
import "../../styles/BookStyles/BookLists.scss";

const BookLists = ({ book }) => {
	const { dispatch } = useContext(BooksContext);

	function IMAGE() {
		if (book.image !== "")
			return (
				<h2>
					<span>Image: </span>
					<img src={book.image} alt="image" />
				</h2>
			);
		if (book.image === "")
			return (
				<h2>
					<span>No Image</span>
				</h2>
			);
	}

	return (
		<div className="BookLists">
			<h2>
				<span>Title: </span>
				{book.title}
			</h2>
			<h2>
				<span>Author: </span>
				{book.author}
			</h2>
			{IMAGE()}
			<button
				className="BottomBtn"
				onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
				Remove
			</button>
		</div>
	);
};

export default BookLists;
