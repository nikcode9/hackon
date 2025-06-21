import React, { useState } from "react";
import "./Productbutton.css";
import { useStateValue } from "./StateProvider";
//import Popover from "./Popover";
import { Link } from "react-router-dom";
import EcoFriendlyPredictor from "./components/EcoFriendlyPredictor";

function Productbutton({ title, image, id, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showPredictor, setShowPredictor] = useState(false);

  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0, { behavior: "instant" });
  };
const addToCart = (item) => {
    // Implement your cart logic here
    alert(`${item.name || item.title} added to cart!`);
  };
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
    <div className="productb">
      {/* <div className="product__bestsellerb">BESTSELLER</div> */}
      <div className="product__infob">
        <p>{title}</p>
        <div className="product__priceb">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__ratingb">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="normal" onClick={addToBasket}>
        Add to Cart
      </button>

      {/* <button
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
      </button> */}

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
      {/* <button className="show-predictor" onClick={() => setShowPredictor(true)}>
        Show Eco-Friendliness Predictor
      </button> */}
      {/* {showPredictor && (
        <EcoFriendlyPredictor onClose={() => setShowPredictor(false)} />
      )} */}
      {/* <Link to="/product">
        <button onClick={handleLinkClick} className="greenovation">
          Available on GreenCart
        </button>
      </Link>{" "} */}
    </div>
  );
}

export default Productbutton;
