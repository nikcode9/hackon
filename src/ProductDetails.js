import React, { useState } from "react";
import "./ProductDetails.css";
import { useStateValue } from "./StateProvider";
import EcoFriendlyPredictor from "./components/EcoFriendlyPredictor";

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState("../images/Straw2.png");
  const [showPredictor, setShowPredictor] = useState(false);
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id, title, image, price, rating, badge_id) => {
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

  const addToCart = (item) => {
    alert(`${item.title} added to cart!`);
  };

  const imageArray = [
    "../images/Straw1.png",
    "../images/Straw2.png",
    "../images/Straw3.png",
    "../images/Straw4.png",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const product = {
    id: "875617",
    title:
      "Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly & Sustainable Drinking Straws (Pack of 100)",
    image: "../images/straw_eco.jpg",
    price: 8.99,
    rating: 4,
    badge_id: 5,
  };

  return (
    <div className="whole">
      <div className="img">
        <div className="image-slider">
          <div className="image-thumbnails">
            {imageArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={`thumbnail ${
                  selectedImage === image ? "selected" : ""
                }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="large-image">
          {selectedImage && <img src={selectedImage} alt="Selected Product" />}
        </div>
      </div>

      <div className="img-desc">
        <h2>{product.title}</h2>
        <p>⭐⭐⭐⭐ (23 reviews)</p>
        <br />
        <p className="price">
          <span className="discounted-price">$15.35</span>
          <span className="original-price">$18.99</span>
        </p>
        <br />

        <div className="eco_details">
          <div className="carbon_details">
            <img
              src="../images/co2badge.png"
              alt="CO2 Badge"
              className="eco_image"
            />
            <p className="eco_text">60% Less Carbon Emission</p>
          </div>
        </div>

        <br />
        <p>
          Our innovative Quadrat straws offer an exceptional eco-friendly
          solution for all your beverage needs. Made from fallen coconut leaves,
          these straws are not only biodegradable but also act as a natural
          fertilizer when buried in garden soil, enhancing its quality in just
          30 days. They are not only kind to the environment but also
          long-lasting, capable of withstanding both hot and cold beverages
          without breaking or getting soggy. Their temperature range spans from
          a minimum of 32°F / 0°C to a maximum of 302°F / 150°C. Quadrat straws
          are a sustainable alternative to paper or plastic straws, working like
          plastic but feeling entirely natural.
        </p>
        <br />
        <div className="icons">
          <div className="icon">
            <img src="../images/8.png" className="i" alt="Free Delivery" />
            <p>Free Delivery</p>
          </div>

          <div className="icon">
            <img src="../images/9.png" className="i" alt="Amazon Pay" />
            <p>Accept Amazon Pay</p>
          </div>

          <div className="icon">
            <img src="../images/10.png" className="i" alt="Warranty" />
            <p>2-year warranty</p>
          </div>

          <div className="icon">
            <img src="../images/11.png" className="i" alt="Top Brand" />
            <p>Top Brand</p>
          </div>
        </div>

        <div className="product-data-info">
          <p>
            Available: <span style={{ color: "green" }}>In Stock</span>
          </p>
        </div>

        <button
          className="addtocart"
          onClick={() =>
            addToBasket(
              product.id,
              product.title,
              product.image,
              product.price,
              product.rating,
              product.badge_id
            )
          }
        >
          Add to Cart
        </button>

        <button
          onClick={() => window.location.href = "/green"}
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
          Available in GreenCart zone
        </button>

        <button
          onClick={() => addToCart(product)}
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
          Quick Add
        </button>

        <button
          onClick={() => window.location.href = "/green"}
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
    </div>
  );
}

export default ProductDetails;
