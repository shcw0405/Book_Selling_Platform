import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";
import BookCard from "../components/BookCard.tsx";
import { BookType } from "../types/book.ts";
import booksData from "../data/books.json";

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // 实际应用中可从API获取数据
    setBooks(booksData);
    setFilteredBooks(booksData);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredBooks(books);
      return;
    }

    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar value={searchQuery} onChange={handleSearch} />

        {filteredBooks.length === 0 ? (
          <div style={{ marginTop: "40px", color: "#888" }}>
            没有找到相关书籍
          </div>
        ) : (
          <div className="book-list">
            {filteredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BookCard book={book} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
