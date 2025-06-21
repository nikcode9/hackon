import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ title, image, id, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is >>>>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        badge_id,
      },
    });
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
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
      <button
        onClick={() => window.location.href = '/green'}
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
        Available in Greencart Zone
      </button>
    </div>
  );
}

export default Product;
