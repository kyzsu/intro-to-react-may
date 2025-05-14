import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const WebApp = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Pizza name="Hawaiian Pizza" description="Pineapple, Ham, Cheese" />
      <Pizza
        name="The Pepperoni Pizza"
        description="Pepperoni, Secret Sauce, Cheese"
      />
    </div>
  );
};

// kita membuat sebuah element React: div yang berisi teks hello World!

const container = document.getElementById("root");
// instance dari div id=root

const root = createRoot(container);
// membuat akar/rootnya; menghapus existing children yg ada pada container

root.render(<WebApp />);
// render component/react elementnya
