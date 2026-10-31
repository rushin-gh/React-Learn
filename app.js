import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const Page = () => {
  return (
    <div id="page">
      <Title />
      <Body />
    </div>
  );
};

const Title = function () {
  return (
    <div>
      <h2>React Learning</h2>
    </div>
  );
};

const content = (
  <div>
    <p>This is body content</p>
  </div>
);

const Body = () => {
  return (
    <div>
      <p>{100}</p>
      <p>{100 + 200}</p>
      {content}
    </div>
  );
};

const doc = <Page />;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Page />);
root.render(doc);
