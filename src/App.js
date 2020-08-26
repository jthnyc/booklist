import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/BookList";
import NewBookForm from "./components/NewBookForm";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
        <Counter />
      </BookContextProvider>
    </div>
  );
}

export default App;
