import React from "react";
import ReactDOM from "react-dom/client";

const myElement = React.createElement(
  "h1",
  { id: "heading1", className: "ok" },
  "Hello from React",
);
const myRoot = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "a" }, [
    React.createElement("h1", { key: "aa" }, "WoW!"),
    React.createElement("h2", { key: "ab" }, "OMG!"),
  ]),
  React.createElement("div", { id: "child", key: "b" }, [
    React.createElement("h1", { key: "ba" }, "WoW!"),
    React.createElement("h2", { key: "bb" }, "OMG!"),
  ]),
]);

myRoot.render(parent);
