import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsx = (
  <h1 id="heading2" className="headGroup">
    Hello world from JSX!
  </h1>
);

// React Component
const Heading = () => {
  return (
    <h1 id="heading2" className="headGroup">
      Hello world from JSX!
    </h1>
  );
};

const Heading2 = () => (
  <h1 id="heading2" className="headGroup">
    Hello world from JSX!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading);
root.render(jsx);
