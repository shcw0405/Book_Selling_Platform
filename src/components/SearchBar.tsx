import React, { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="输入书籍名称搜索..."
        style={{
          flex: 1,
          padding: "10px 15px",
          borderRadius: "4px",
          border: "1px solid #d9d9d9",
          fontSize: "16px",
          outline: "none",
        }}
      />
      <button
        style={{
          marginLeft: "10px",
          padding: "0 20px",
          height: "42px",
          backgroundColor: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        搜索
      </button>
    </div>
  );
};

export default SearchBar;
