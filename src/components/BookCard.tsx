import React, { useState } from "react";
import { BookType } from "../types/book";

interface BookCardProps {
  book: BookType;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // 处理图片路径
  const getImageSrc = (url: string) => {
    // 如果是完整URL(http或https开头)，直接返回
    if (url.startsWith("http")) {
      return url;
    }

    // 对于相对路径，保持不变
    return url;
  };

  // 图片加载完成的处理函数
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        {!imageLoaded && <div className="image-placeholder"></div>}
        <img
          src={getImageSrc(book.imageUrl)}
          alt={book.name}
          className={`book-image ${imageLoaded ? "loaded" : ""}`}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageLoad} // 即使加载失败也设置为已加载，避免一直显示占位符
        />
      </div>
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
