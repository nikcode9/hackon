import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, id, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showPredictor, setShowPredictor] = useState(false); // Preserved from main

  console.log("this is >>>>>", basket);

  const addToCart = (item) => {
    // Implement your cart logic here
    alert(`${item.name || item.title} added to cart!`);
  };

  return (
    <div className="product">
      <div className="product__bestseller">BESTSELLER</div>
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />

      <button
        onClick={() => addToCart({ title, image, id, price, rating, badge_id })}
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
          marginRight: "8px",
        }}
      >
        Add to Cart
      </button>

      <button
        onClick={() => (window.location.href = "/green")}
        style={{
          backgroundColor: "#388e3c",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        View in GreenCart zone
      </button>
    </div>
  );
}

export default Product;
