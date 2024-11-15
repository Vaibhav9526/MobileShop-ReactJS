import React, { useState } from "react";

const HOME = "home";
const UTILITY = "utility";

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: UTILITY,
      name: "Battery",
      cost: 19.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc"
    },
    {
      category: UTILITY,
      name: "IPHONE",
      cost: 100000.0,
      image:
        "data:image/webp;base64,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"
    },
    {
      category: UTILITY,
      name: "nokia",
      cost: 10000.0,
      image:
        "https://rukminim1.flixcart.com/image/416/416/ka5oia80/mobile/e/3/3/nokia-3310-ds-ta-1030-nokia-3310-ds-original-imafrsgd8fdsfds8.jpeg?q=70"
    },
    {
      category: UTILITY,
      name: "earphone",
      cost: 299.0,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/2/AA/CQ/EQ/147784145/black-wire-earphone.png"
    }
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME);

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>
      <h1>VAIBHAV MOBILE STORE</h1>
      <div>Select a category:</div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME}>{HOME}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
