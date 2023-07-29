const heading = React.createElement(
  "h1",
  {
    id: "title"
  },
  "Uwu First React"
);

const demo = React.createElement(
  "h1",
  {
    id: "demo",
    style: {
      color: "black",
      fontWeight: "200",
      fontFamily: "Roboto",
      backgroundColor: "white",
      margin: "5px 0",
      height: "192px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  "Second idk Header"
);

const first_div = React.createElement(
  "div",
  {
    id: "first-div",
  },
  [heading, demo]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(first_div);
