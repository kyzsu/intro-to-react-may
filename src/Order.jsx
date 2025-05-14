import { useState, useEffect, useContext } from "react";
import { CartContext } from "./contexts";
import Pizza from "./Pizza";
import Cart from "./Cart";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  // useState return dua value [a, b]; pertama (a) adalah value dari useState itu sendiri dalam hal ini "hawaiian", sedangkan value kedua (b) adalah fungsi untuk mengubah/memperbarui value
  const [pizzaType, setPizzaType] = useState("hawaiian");
  const [pizzaSize, setPizzaSize] = useState("S");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  async function checkout() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
      }),
    });

    setCart([]);
    setLoading(false);
  }

  // useEffect menerima dua argumen/parameter, pertama adalah callback (fungsi), kedua adalah dependency (fungsi ini berjalan kalo .../hal apa yg menginisiasi callback). Jika dependency diberi array kosong maka callback akan dijalankan setelah halaman pertama kali dibuka (selesai dirender).
  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = currency.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  async function fetchPizzaTypes() {
    const res = await fetch("/api/pizzas");
    const resJson = await res.json();
    setPizzaTypes(resJson);
    setLoading(false);
  }

  return (
    <div className="order">
      <h2>Buat Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Jenis Pizza</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {/* <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">Hawaiian Pizza</option> */}
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={[pizza.id]}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Ukuran Pizza</label>
            <div>
              <span>
                <input
                  id="s-pizza"
                  type="radio"
                  name="pizza-size"
                  value="S"
                  checked={pizzaSize === "S"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="s-pizza">Small</label>
              </span>
              <span>
                <input
                  id="m-pizza"
                  type="radio"
                  name="pizza-size"
                  value="M"
                  checked={pizzaSize === "M"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="m-pizza">Medium</label>
              </span>
              <span>
                <input
                  id="l-pizza"
                  type="radio"
                  name="pizza-size"
                  value="L"
                  checked={pizzaSize === "L"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="l-pizza">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Tambahkan ke keranjang</button>
        </div>
        {/* <div>
          <Pizza
            name="Hawaiian Pizza"
            description="Pineapple, Ham, Cheese"
            image={"/public/pizzas/hawaiian.webp"}
          />
          <p>$10</p>
        </div> */}
        {/* {kondisi ? valueJikaTrue : valueJikaFalse } */}
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
      {loading ? <h2>Loading...</h2> : <Cart cart={cart} checkout={checkout} />}
    </div>
  );
}
