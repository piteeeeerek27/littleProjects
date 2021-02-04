import React, { useContext, useState } from "react";
import { BooksContext } from "./BookContext";
import "../../styles/BookStyles/LocalStorage.scss";
import BookList from "./BookList";

const LocalStorage = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const { books, dispatch } = useContext(BooksContext);

	const submitBook = (e) => {
		e.preventDefault();
		dispatch({
			type: "ADD_BOOK",
			book: {
				title,
				author,
			},
		});
		setTitle("");
		setAuthor("");
	};

	return (
		<div className="LocalStorage">
			<div className="Top">
				<h1>My Reading List</h1>
				{books.length ? (
					<h3>U have {books.length} books readed</h3>
				) : (
					<h3>No books to read.</h3>
				)}
			</div>
			<form onSubmit={submitBook} className="Bottom">
				<span className="BottomH"></span>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="BottomInput"
					type="text"
					placeholder="book title"
				/>
				<input
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					className="BottomInput"
					type="text"
					placeholder="author"
				/>
				<input type="submit" className="BottomBtn" value="ADD BOOK" />
				<hr />
				<BookList />
			</form>
		</div>
	);
};

export default LocalStorage;
