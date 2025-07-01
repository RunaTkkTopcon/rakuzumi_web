import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <button className="icon-btn">
        <img src="/menu_icon.png" alt="menu" className="icon-img" />
      </button>
      <div className="header-title">らくずみ</div>
      <div style={{ width: 40 }}></div>
    </header>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <img src="/search_icon.png" alt="search" className="icon-img" />
      <input className="search-input" placeholder="検索" />
    </div>
  );
}

function ListItem({ index }) {
  return (
    <div className="list-item">
      <img src="/item_icon.png" alt="item" className="item-icon" />
      <div className="item-texts">
        <div className="item-title">アイテムタイトル {index + 1}</div>
        <div className="item-subtitle">サブタイトルや説明文が入ります</div>
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <div className="item-list">
      {[...Array(10)].map((_, i) => (
        <ListItem key={i} index={i} />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <button className="icon-btn">
        <img src="/home_icon.png" alt="home" className="icon-img" />
      </button>
      <button className="icon-btn">
        <img src="/add_icon.png" alt="add" className="icon-img" />
      </button>
      <button className="icon-btn">
        <img src="/user_icon.png" alt="user" className="icon-img" />
      </button>
    </footer>
  );
}

function App() {
  return (
    <div className="main-container">
      <Header />
      <SearchBar />
      <div className="scroll-area">
        <ItemList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
