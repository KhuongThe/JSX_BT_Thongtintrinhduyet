import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h3>
//       Thông tin trình duyệt là: {navigator.userAgent};
//     </h3>
//   </div>
// )
const element = (
  <div>
    <h3>Thông tin trình duyệt là: {navigator.userAgent};</h3>
  </div>
);
root.render(element);