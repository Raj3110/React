const test = React.createElement(
  "h1",
  {
    className: "test-subject",
    style: {
      backgroundColor: "lightblue",
      height: "300px",
      width: "80%",
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "roboto",
      fontWeight: "200",
      fontSize: "100px",
      letterSpacing: "4rem",
    },
  },
  "Test React"
);
const parentDiv = React.createElement(
  "div",
  {
    className: "parent-div",
    style: {
      backgroundColor: "#fff",
      width: "100%",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  test
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parentDiv);

// var oldX = window.screenX,  oldY = window.screenY;
// setInterval(function(){
//   if(oldX != window.screenX || oldY != window.screenY){
//     console.log('moved!');
//   } else {
//     console.log('not moved!');
//   }

//   oldX = window.screenX;
//   oldY = window.screenY;
// }, 500);