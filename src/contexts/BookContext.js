import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";
// got rid of useState

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //   const [books, setBooks] = useState([
  //     { title: "name of the wind", author: "patrick rothfuss", id: 1 },
  //     { title: "the final empire", author: "brandon sanderson", id: 2 },
  //   ]);

  //   const addBook = (title, author) => {
  //     setBooks([...books, { title, author, id: uuidv1() }]);
  //   };

  //   const removeBook = (id) => {
  //     setBooks(books.filter((book) => book.id !== id));
  //   };

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
