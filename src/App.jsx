import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import PizzaoftheDay from "./PizzaoftheDay";

const WebApp = () => {
  return (
    <div>
      <h1>Ristorante Pizza</h1>
      <Order />
      <PizzaoftheDay />
      {/* <Pizza
        name="Hawaiian Pizza"
        description="Pineapple, Ham, Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Pepperoni Pizza"
        description="Pepperoni, Secret Sauce, Cheese"
        image={"/public/pizzas/pepperoni.webp"}
      /> */}
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
