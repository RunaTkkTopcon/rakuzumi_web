import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

function App() {
  return React.createElement(
    "div",
    { className: "app-bg" },
    // AppBar
    React.createElement(
      "header",
      { className: "app-bar" },
      React.createElement(
        "button",
        { className: "icon-btn" },
        React.createElement("img", {
          src: "./public/assets/icons/icon_menu.svg",
          alt: "menu",
        })
      ),
      React.createElement(
        "div",
        { className: "app-bar-title" },
        "RAKUZUMI"
      ),
      React.createElement(
        "div",
        { className: "app-bar-avatar" },
        React.createElement("img", {
          src: "./public/assets/images/avatar.png",
          alt: "avatar",
        })
      )
    ),
    // Select a field
    React.createElement(
      "section",
      { className: "select-field-section" },
      React.createElement(
        "div",
        { className: "select-field-card" },
        React.createElement(
          "div",
          { className: "select-field-card-left" },
          React.createElement("img", {
            src: "./public/assets/icons/icon_map.svg",
            alt: "map",
            className: "icon-map",
          }),
          React.createElement(
            "span",
            { className: "select-field-label" },
            "Select  a  field"
          )
        ),
        React.createElement("img", {
          src: "./public/assets/icons/icon_arrow_right.svg",
          alt: "arrow",
          className: "icon-arrow",
        })
      )
    ),
    // Actions
    React.createElement(
      "section",
      { className: "actions-section" },
      React.createElement(
        "div",
        { className: "actions-title" },
        "Actions"
      ),
      // 1行目
      React.createElement(
        "div",
        { className: "actions-cards-row" },
        React.createElement(
          "div",
          { className: "actions-card" },
          React.createElement("img", {
            src: "./public/assets/images/opn02.png",
            alt: "OPN-02",
            className: "actions-card-img",
          }),
          React.createElement(
            "div",
            { className: "actions-card-label" },
            "Measure"
          )
        ),
        React.createElement(
          "div",
          { className: "actions-card" },
          React.createElement("img", {
            src: "./public/assets/images/tpo07b.png",
            alt: "TPO-07-B",
            className: "actions-card-img",
          }),
          React.createElement(
            "div",
            { className: "actions-card-label" },
            "Setup"
          )
        ),
        React.createElement(
          "div",
          { className: "actions-card" },
          React.createElement("img", {
            src: "./public/assets/images/opn02_2.png",
            alt: "OPN-02",
            className: "actions-card-img",
          }),
          React.createElement(
            "div",
            { className: "actions-card-label" },
            "aaaaa"
          )
        )
      ),
      // 2行目
      React.createElement(
        "div",
        { className: "actions-cards-row" },
        React.createElement(
          "div",
          { className: "actions-card" },
          React.createElement("img", {
            src: "./public/assets/images/tpo07b2.png",
            alt: "TPO-07-B",
            className: "actions-card-img",
          }),
          React.createElement(
            "div",
            { className: "actions-card-label" },
            "Setup"
          )
        ),
        React.createElement(
          "div",
          { className: "actions-card" },
          React.createElement("img", {
            src: "./public/assets/images/opn02_2.png",
            alt: "OPN-02",
            className: "actions-card-img",
          }),
          React.createElement(
            "div",
            { className: "actions-card-label" },
            "aaaaa"
          )
        )
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App)); 