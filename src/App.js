import { createElement } from "react";
import { createRoot } from "react-dom/client";

// const Pizza = (props) => {
//   return createElement("div", {}, [
//     createElement("h1", {}, props.name),
//     createElement("p", {}, props.description),
//   ]);
// };

// const WebApp = () => {
//   return createElement("div", {}, [
//     createElement("h1", {}, "Hello World!"),
//     createElement(Pizza, {
//       name: "Hawaii Pizza",
//       description: "pineapple",
//     }),
//   ]);
// };

const App = () => {
  return createElement("div", {}, "Hello World!");
};

// kita membuat sebuah element React: div yang berisi teks hello World!

const container = document.getElementById("root");
// instance dari div id=root

const root = createRoot(container);
// membuat akar/rootnya; menghapus existing children yg ada pada container

root.render(createElement(App));
// render component/react elementnya
