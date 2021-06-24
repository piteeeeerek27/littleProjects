import React, { useContext, useState } from "react";
import { BooksContext } from "./BookContext";
import "../../styles/BookStyles/LocalStorage.scss";
import ListOfBooks from "./ListOfBooks";

const LocalStorage = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [image, setImage] = useState("");
	const { books, dispatch } = useContext(BooksContext);

	const submitBook = (event) => {
		event.preventDefault();
		const book = {
			title,
			author,
			image,
		};
		if (
			(author === "" && title === "") ||
			(author === "" && title === "" && image === "")
		)
			return alert("There is no book to add");
		if (
			(author !== "" && title !== "") ||
			(author !== "" && title !== "" && image !== "")
		)
			dispatch({
				type: "ADD_BOOK",
				book,
			});
		setTitle("");
		setAuthor("");
		setImage("");
	};

	return (
		<div className="LocalStorage">
			<div className="Top">
				<h1>My Books List</h1>
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
					onChange={(event) => setTitle(event.target.value)}
					className="BottomInput"
					type="text"
					placeholder="book title"
				/>
				<input
					value={author}
					onChange={(event) => setAuthor(event.target.value)}
					className="BottomInput"
					type="text"
					placeholder="author"
				/>
				<input
					value={image}
					onChange={(event) => setImage(event.target.value)}
					className="BottomInput"
					type="text"
					placeholder="put url"
				/>
				<button type="submit" className="BottomBtn">
					ADD BOOK
				</button>
				<hr />
				<ListOfBooks />
			</form>
		</div>
	);
};

export default LocalStorage;
