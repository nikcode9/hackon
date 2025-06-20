import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <strong>EarthScore:</strong> {product.earthScore}
        </div>
        <p className="price">${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
        <button>Show Eco-Friendliness Predictor</button>
      </div>
    </div>
  );
}

export default ProductCard;