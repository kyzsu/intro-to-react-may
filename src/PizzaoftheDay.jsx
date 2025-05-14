import { usePizzaoftheDay } from "./usePizzaoftheDay";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaoftheDay = () => {
  const pizzaoftheDay = usePizzaoftheDay();

  // jika potd masih kosong/fetching
  if (!pizzaoftheDay) {
    return <div>Loading...</div>;
  }

  // jika sudah ada value, kita balikin html dibawah
  return (
    <div className="pizza-of-the-day">
      <h2>Pizza Pilihan Chef hari ini!</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaoftheDay.name}</h3>
          <p>{pizzaoftheDay.description}</p>
          <p>
            Dimulai dari harga{" "}
            <span>{currency.format(pizzaoftheDay.sizes.S)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaoftheDay.image}
          alt={pizzaoftheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaoftheDay;
