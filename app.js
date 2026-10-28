const myElement = React.createElement(
  "h1",
  { id: "heading1", class: "ok" },
  "Hello from React",
);
const myRoot = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "WoW!"),
    React.createElement("h2", {}, "OMG!"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "WoW!"),
    React.createElement("h2", {}, "OMG!"),
  ]),
]);

myRoot.render(parent);
