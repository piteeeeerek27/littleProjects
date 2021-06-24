import React, { createContext, useEffect, useReducer } from "react";
import bookReducer from "./reducer";

export const BooksContext = createContext();
const BookProvider = ({ children }) => {
	function getLocalStorage() {
		return JSON.parse(localStorage.getItem("allbooks"));
	}

	const [books, dispatch] = useReducer(bookReducer, [], getLocalStorage);

	useEffect(() => {
		localStorage.setItem("allbooks", JSON.stringify(books));
	}, [books]);

	return (
		<BooksContext.Provider value={{ books, dispatch }}>
			{children}
		</BooksContext.Provider>
	);
};

export default BookProvider;
