import React from "react";
import "./Home.css";
import Product from "./Product";
import ImageSlider from "./Imageslider";
import Productbutton from "./Productbutton";

const addToCart = (item) => {
  // Implement your cart logic here
  alert(`${item.name} added to cart!`);
};

function Home() {
  const products = [
    {
      id: "12321341",
      title: "Disposable Plastic Drinking Straws – a pack of 100 clear, BPA-free straws designed for convenience and reliability, 7.75-inch",
      price: 7.5,
      rating: 3,
      image: "../images/straw.jpg",
      badge_id: 0
    },
    {
      id: "49538094",
      title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: 239.0,
      rating: 4,
      image: "../images/mixer.jpg",
      badge_id: 0
    },
    {
      id: "3254354345",
      title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image: "../images/tablet.jpg",
      badge_id: 0
    },
    {
      id: "23445930",
      title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image: "../images/echo.jpg",
      badge_id: 0
    },
    {
      id: "958462",
      title: "Woven Bag for Women, Leather Tote Bag Large Summer Beach Travel Handbag and Purse Retro Handmade Shoulder Bag",
      price: 19.99,
      rating: 5,
      image: "../images/leatherbag.jpg",
      badge_id: 0
    },
    {
      id: "90829332",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image: "../images/monitor.jpg",
      badge_id: 0
    }
  ];

  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <ImageSlider />

        <div className="home__row">
          {products.slice(0, 2).map((product) => (
            <Productbutton
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              badge_id={product.badge_id}
            />
          ))}
        </div>

        <div className="home__row">
          {products.slice(2, 5).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              badge_id={product.badge_id}
            />
          ))}
        </div>

        <div className="home__row">
          {products.slice(5, 6).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              badge_id={product.badge_id}
            />
          ))}
        </div>

        {/* For disposable and Kenwood products, update the button to match the rest: */}
        {/* <button
          onClick={() => window.location.href = '/green'}
          style={{ backgroundColor: '#388e3c', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        >
          View in GreenCart zone
        </button> */}
      </div>
    </div>
  );
}

export default Home;