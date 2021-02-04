import React, { useContext } from "react";
import { BooksContext } from "./BookContext";
import BookLists from "./BookLists";

const BookList = () => {
	const { books } = useContext(BooksContext);
	return books.length ? (
		<div className="Output">
			{books.map((book) => {
				return <BookLists book={book} key={book.id} />;
			})}
		</div>
	) : (
		<h1 style={{ textAlign: "center" }}>No Books to read.</h1>
	);
};

export default BookList;
