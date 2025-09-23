import { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Wireless Mouse", price: 799 },
  { id: 2, name: "Mechanical Keyboard", price: 2499 },
  { id: 3, name: "Noise Cancelling Headphones", price: 4999 },
  { id: 4, name: "USB-C Charger", price: 999 }
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    alert("Order placed successfully! Payment method: Cash on Delivery 💵");
    setCart([]);
  };

  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="products">
        {sampleProducts.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
            <p>
              <strong>Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</strong>
            </p>
            <button onClick={checkout}>Checkout (Cash on Delivery)</button>
          </>
        )}
      </div>
    </div>
  );
}
