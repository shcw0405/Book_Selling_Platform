import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header.tsx";
import { BookType } from "../types/book.ts";
import booksData from "../data/books.json";

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const [loading, setLoading] = useState(true);

  // 处理图片路径
  const getImageSrc = (url: string) => {
    // 如果是完整URL(http或https开头)，直接返回
    if (url.startsWith("http")) {
      return url;
    }

    // 对于相对路径，保持不变
    return url;
  };

  useEffect(() => {
    // 实际应用中从API获取数据
    const foundBook = booksData.find((b) => b.id === Number(id));
    setBook(foundBook || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>加载中...</div>;
  }

  if (!book) {
    return (
      <div>
        <Header />
        <div className="container">
          <div style={{ margin: "40px 0", textAlign: "center" }}>
            未找到该书籍
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/" style={{ color: "#1890ff", textDecoration: "none" }}>
              返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Link
              to="/"
              style={{
                color: "#1890ff",
                textDecoration: "none",
                alignSelf: "flex-start",
              }}
            >
              &lt; 返回首页
            </Link>

            <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
              <div style={{ flex: "0 0 300px" }}>
                <img
                  src={getImageSrc(book.imageUrl)}
                  alt={book.name}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </div>

              <div style={{ flex: "1 1 300px", textAlign: "left" }}>
                <h1 style={{ fontSize: "24px", marginBottom: "15px" }}>
                  {book.name}
                </h1>
                <div
                  className="book-price"
                  style={{ fontSize: "22px", marginBottom: "20px" }}
                >
                  ¥{book.price}
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <div style={{ color: "#666", marginBottom: "5px" }}>
                    持有者
                  </div>
                  <div style={{ fontWeight: "bold" }}>{book.owner}</div>
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <div style={{ color: "#666", marginBottom: "5px" }}>
                    联系方式
                  </div>
                  <div>{book.contact}</div>
                </div>

                {book.note && (
                  <div style={{ marginTop: "20px" }}>
                    <div style={{ color: "#666", marginBottom: "5px" }}>
                      备注
                    </div>
                    <div
                      style={{
                        padding: "15px",
                        background: "#f9f9f9",
                        borderRadius: "8px",
                        border: "1px solid #eee",
                      }}
                    >
                      {book.note}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
