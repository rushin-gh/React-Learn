import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const Page = () => {
  return (
    <div id="page">
      <Title />
      <Navbar />
      <Body />
    </div>
  );
};

function Navbar() {
  return <div>Home Main Contact</div>;
}

const Title = function () {
  return (
    <div>
      <h2>React Learning</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <p>Im Learning react</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
