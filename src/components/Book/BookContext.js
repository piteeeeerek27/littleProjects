import React, { createContext, useReducer } from "react";
import bookReducer from "./reducer";

export const BooksContext = createContext();

const BookProvider = ({ children }) => {
	const [books, dispatch] = useReducer(bookReducer, []);

	return (
		<BooksContext.Provider value={{ books, dispatch }}>
			{children}
		</BooksContext.Provider>
	);
};

export default BookProvider;
