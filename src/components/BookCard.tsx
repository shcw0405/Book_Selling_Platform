import React from "react";
import { BookType } from "../types/book";

interface BookCardProps {
  book: BookType;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  // 处理图片路径
  const getImageSrc = (url: string) => {
    // 检查是否为本地图片（以/开头且不是http开头）
    if (url.startsWith("/") && !url.startsWith("http")) {
      // 直接返回完整路径，确保React能找到图片
      return process.env.PUBLIC_URL + url;
    }
    // 如果是完整URL，直接返回
    return url;
  };

  return (
    <div className="book-card">
      <img
        src={getImageSrc(book.imageUrl)}
        alt={book.name}
        className="book-image"
      />
      <div className="book-info">
        <h3 style={{ margin: "0 0 10px", fontSize: "16px" }}>{book.name}</h3>
        <div className="book-price">¥{book.price}</div>
        <div className="book-owner">卖家: {book.owner}</div>
        <div className="book-contact">{book.contact}</div>
      </div>
    </div>
  );
};

export default BookCard;
