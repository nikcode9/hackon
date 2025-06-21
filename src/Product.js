import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
 

function Product({ title, image, id, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showPredictor, setShowPredictor] = useState(false);

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
 
    </div>
  );
}

export default Product;
